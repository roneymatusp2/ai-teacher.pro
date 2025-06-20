// Script to fix HTML entities in existing news titles
// Run with: node scripts/fix-html-entities.js

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from the root .env file
dotenv.config({ path: join(__dirname, '..', '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

function decodeHTMLEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#8217;': "'", // Right single quotation mark
    '&#8220;': '"', // Left double quotation mark
    '&#8221;': '"', // Right double quotation mark
    '&#8216;': "'", // Left single quotation mark
    '&#8211;': '–', // En dash
    '&#8212;': '—', // Em dash
    '&#8230;': '…', // Ellipsis
    '&nbsp;': ' ',  // Non-breaking space
    '&#160;': ' ',  // Non-breaking space (numeric)
    '&#38;': '&',   // Ampersand
    '&#60;': '<',   // Less than
    '&#62;': '>',   // Greater than
    '&apos;': "'",  // Apostrophe
    '&#x27;': "'",  // Apostrophe (hex)
    '&#x2F;': '/',  // Forward slash
    '&#47;': '/',   // Forward slash
    '&mdash;': '—', // Em dash
    '&ndash;': '–', // En dash
    '&hellip;': '…', // Ellipsis
    '&lsquo;': '\u2018', // Left single quote
    '&rsquo;': '\u2019', // Right single quote
    '&ldquo;': '\u201C', // Left double quote
    '&rdquo;': '\u201D', // Right double quote
    '\u201C': '"', // Curly quotes
    '\u201D': '"',
    '\u2018': "'",
    '\u2019': "'",
  };
  
  let decodedText = text;
  
  // Replace known entities
  Object.entries(entities).forEach(([entity, char]) => {
    const regex = new RegExp(entity, 'gi');
    decodedText = decodedText.replace(regex, char);
  });
  
  // Handle numeric entities (decimal)
  decodedText = decodedText.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10));
  });
  
  // Handle numeric entities (hexadecimal)
  decodedText = decodedText.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  
  return decodedText;
}

async function fixHTMLEntitiesInNews() {
  console.log('🔍 Fetching news articles with potential HTML entities...');
  
  try {
    // Fetch all news articles
    const { data: articles, error } = await supabase
      .from('ai_news')
      .select('id, title, summary_md')
      .or('title.like.%&#%,title.like.%&amp;%,title.like.%&quot;%,title.like.%&lt;%,title.like.%&gt;%');
    
    if (error) {
      console.error('Error fetching articles:', error);
      return;
    }
    
    if (!articles || articles.length === 0) {
      console.log('✅ No articles found with HTML entities');
      return;
    }
    
    console.log(`📄 Found ${articles.length} articles to process`);
    
    let updatedCount = 0;
    
    for (const article of articles) {
      const originalTitle = article.title;
      const decodedTitle = decodeHTMLEntities(originalTitle);
      
      // Only update if the title actually changed
      if (originalTitle !== decodedTitle) {
        console.log(`\n🔄 Updating article ${article.id}:`);
        console.log(`   Original: ${originalTitle}`);
        console.log(`   Decoded:  ${decodedTitle}`);
        
        const { error: updateError } = await supabase
          .from('ai_news')
          .update({ title: decodedTitle })
          .eq('id', article.id);
        
        if (updateError) {
          console.error(`❌ Error updating article ${article.id}:`, updateError);
        } else {
          updatedCount++;
          console.log(`✅ Updated successfully`);
        }
      }
    }
    
    console.log(`\n🎉 Process complete! Updated ${updatedCount} articles`);
    
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Run the fix
fixHTMLEntitiesInNews();