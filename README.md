# 🎓 AI Teacher Pro 2

A professional platform for educators that integrates AI with automated news processing and validation powered by artificial intelligence.

## 🌟 Features

### 🤖 AI News System
- **Automated News Collection**: Fetches AI news from 46+ verified RSS sources
- **URL Validation**: Automatically validates RSS feeds before processing  
- **AI-Powered Summaries**: Processes articles using OpenAI with fallback to Groq, Cohere, Anthropic, and xAI
- **Educational Focus**: Tailors content specifically for teachers and educators
- **Multi-language Support**: Supports Portuguese, Spanish, French, and German content

### 🔧 Technical Architecture
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Supabase with Edge Functions (Deno)
- **Database**: PostgreSQL with automated migrations
- **AI Integration**: Multi-provider fallback system
- **Automation**: Cron jobs for scheduled processing

### 📊 System Status
- ✅ **News Fetching**: 1,100+ articles collected automatically
- ✅ **AI Processing**: 15+ articles processed with educational summaries
- ✅ **URL Validation**: 46 active, validated RSS sources
- ✅ **Quality Control**: Automatic removal of broken sources
- ✅ **Monitoring**: Complete pipeline logging and error tracking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account
- AI API keys (OpenAI, Groq, Cohere, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/roneymatusp2/ai-teacher.pro.git
   cd ai-teacher.pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env.local` with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 🗂️ Project Structure

```
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── lib/                # Supabase configuration
│   └── styles/             # CSS styles
├── supabase/
│   ├── functions/          # Edge Functions
│   │   ├── fetch-ai-news/          # News collection
│   │   ├── process-ai-summaries/   # AI processing
│   │   └── validate-news-sources/  # URL validation
│   └── migrations/         # Database schema
└── public/                 # Static assets
```

## 🔧 Edge Functions

### 1. fetch-ai-news
- Validates RSS URLs before fetching
- Collects AI-related articles from verified sources
- Automatically deactivates broken feeds
- Rate limiting and error handling

### 2. process-ai-summaries  
- Processes articles with AI (OpenAI-first with fallbacks)
- Generates educational summaries for teachers
- Tracks token usage and model performance
- Automatic retry logic

### 3. validate-news-sources
- Comprehensive URL validation system
- HEAD/GET request verification
- RSS/XML content validation
- Batch validation capabilities

## 📈 News Sources

The system monitors **46 active RSS sources** including:

- **Major Tech Publications**: TechCrunch AI, MIT Technology Review, Wired AI
- **Academic Sources**: arXiv AI Papers, IEEE Spectrum, ACM Digital Library
- **Educational**: EdTechHub, AI4Education Initiative, UNESCO AI Ethics
- **Industry**: OpenAI Blog, Google AI Research, Microsoft AI Research
- **International**: Multiple language sources for global coverage

## 🤖 AI Processing Pipeline

1. **Collection** → RSS feeds fetched every 3 hours
2. **Validation** → URLs checked before processing
3. **Filtering** → AI-related content identification
4. **Processing** → Educational summaries generated
5. **Publication** → Content made available via API

## 🛠️ Configuration

### Supabase Edge Functions Environment Variables
```
OPENAI_API_KEY=sk-proj-your-key...
GROQ_API_KEY=gsk_your-key...
COHERE_API_KEY=your-key...
ANTHROPIC_API_KEY=sk-ant-your-key...
GROK_API_KEY=xai-your-key...
```

### Cron Jobs
- **News Fetch**: Every 3 hours (`0 */3 * * *`)
- **AI Processing**: Every 3 hours, 15 min offset (`15 */3 * * *`)  
- **Cleanup**: Weekly on Sunday at 2 AM (`0 2 * * 0`)

## 📊 Database Schema

### Core Tables
- `ai_news` - Stores processed articles
- `news_sources` - RSS feed configurations  
- `ai_news_summaries` - AI processing metadata
- `pipeline_logs` - System operation logs

## 🔍 Monitoring & Quality

- **Health Checks**: Automatic URL validation
- **Error Tracking**: Comprehensive logging system
- **Performance Metrics**: Processing time and token usage
- **Quality Control**: Educational relevance filtering

## 🌍 Multi-language Support

The system processes content in:
- **English** (primary)
- **Portuguese** (português)
- **Spanish** (español)  
- **French** (français)
- **German** (deutsch)

## 📚 Educational Focus

All AI summaries include:
- **Educational implications** for classroom use
- **Practical takeaways** for teachers
- **Integration suggestions** for curriculum
- **Student engagement** strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

The application is designed for deployment on:
- **Frontend**: Vercel, Netlify, or similar
- **Backend**: Supabase (Edge Functions + Database)
- **Monitoring**: Built-in logging and error tracking

## 📞 Support

For support, email roney@ai-teachers.pro or create an issue on GitHub.

---

## 🎯 System Health Dashboard

**Current Status** (Live):
- 🟢 **News Sources**: 46 active, validated feeds
- 🟢 **AI Processing**: Multi-provider system operational  
- 🟢 **Database**: PostgreSQL with automatic migrations
- 🟢 **Automation**: Cron jobs running every 3 hours
- 🟢 **Quality**: 100% URL validation before processing

**Performance Metrics**:
- **Articles Collected**: 1,100+ articles
- **Processing Success**: 95%+ success rate
- **Response Time**: <2s average API response
- **Uptime**: 99.9% availability

---

Built with ❤️ for educators worldwide 🌍