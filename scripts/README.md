# Scripts

This directory contains utility scripts for maintaining the AI Teacher Pro application.

## fix-html-entities.js

This script fixes HTML entities in news article titles that are already stored in the database.

### Usage

```bash
npm run fix-html-entities
```

### What it does

1. Fetches all news articles from the `ai_news` table that contain HTML entities
2. Decodes common HTML entities like:
   - `&#8217;` → `'` (right single quote)
   - `&#8220;` and `&#8221;` → `"` (left and right double quotes)
   - `&amp;` → `&`
   - And many others
3. Updates the database with the decoded titles

### When to run

Run this script if you notice HTML entities appearing in news titles on the website. This typically happens when:
- RSS feeds contain encoded HTML entities
- The news fetching function didn't properly decode entities
- Manual data imports included encoded content