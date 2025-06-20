/**
 * Decode HTML entities in a string
 * @param text - The text containing HTML entities
 * @returns The decoded text
 */
export function decodeHTMLEntities(text: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

/**
 * Common HTML entity replacements for server-side or when DOM is not available
 */
export function decodeHTMLEntitiesSimple(text: string): string {
  const entities: { [key: string]: string } = {
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
    '&lsquo;': "'", // Left single quote
    '&rsquo;': "'", // Right single quote
    '&ldquo;': '"', // Left double quote
    '&rdquo;': '"', // Right double quote
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

/**
 * Decode HTML entities with fallback for server-side rendering
 */
export function safeDecodeHTMLEntities(text: string): string {
  if (typeof document !== 'undefined') {
    return decodeHTMLEntities(text);
  }
  return decodeHTMLEntitiesSimple(text);
}