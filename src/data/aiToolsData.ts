import { Resource } from '../lib/supabase';

// Comprehensive AI Tools Database from "AI Teacher Pro" Book
// Updated: February 2026
export const aiToolsData: Resource[] = [
  // General large-context chat / reasoning
  {
    id: 'chatgpt-gpt5',
    category: 'ai_tool',
    title: 'ChatGPT (GPT-5)',
    description: 'OpenAI flagship model with advanced reasoning, native multimodal support, and 1M-token context. GPT-5 delivers state-of-the-art performance across coding, analysis, and creative tasks. GPT-5.3-Codex variant excels at software engineering.',
    url: 'https://chat.openai.com/',
    tags: ['General AI', 'Multimodal', 'Large Context', 'OpenAI', 'Reasoning'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Conversational AI',
      pricing: 'Free tier + Plus $20/mo + Pro $200/mo',
      key_features: 'Deep reasoning, image/audio/video understanding, code execution, file uploads, web browsing, 1M context',
      ai_relevance: 'Premier AI assistant for lesson planning, content creation, research, and student support',
      future_potential: 'Continuous model upgrades with expanded agentic capabilities'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'claude-opus-4-6',
    category: 'ai_tool',
    title: 'Claude Opus 4.6',
    description: 'Anthropic most capable model released 5 Feb 2026. Features agent teams for complex multi-step workflows, extended thinking for deep reasoning, and best-in-class safety. Excels at nuanced analysis, coding, and educational content.',
    url: 'https://claude.ai/',
    tags: ['General AI', 'Safety', 'Reasoning', 'Anthropic', 'Education'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Conversational AI',
      pricing: 'Free tier + Pro $20/mo + Team $30/mo',
      key_features: 'Agent teams, extended thinking, 200K context, tool use, computer use, vision, deep analysis',
      ai_relevance: 'Excellent for curriculum development, detailed feedback, research synthesis, and safe student interactions',
      future_potential: 'Leading agentic AI with autonomous multi-step task execution'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'google-gemini-3-pro',
    category: 'ai_tool',
    title: 'Google Gemini 3 Pro',
    description: 'Google latest Gemini 3 generation with native multimodal understanding across text, images, audio, and video. Deep integration with Google Workspace, ideal for education workflows.',
    url: 'https://gemini.google.com/',
    tags: ['General AI', 'Multimodal', 'Google', 'Education', 'Workspace'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Conversational AI',
      pricing: 'Free tier + Google One AI Premium $19.99/mo',
      key_features: 'Native multimodal, Google Workspace integration, 2M context, Deep Research, Gems, real-time information',
      ai_relevance: 'Seamless integration with Google Classroom, Docs, and Slides for educators',
      future_potential: 'Expanding agentic capabilities with Project Astra and Mariner'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'llama4-maverick',
    category: 'ai_tool',
    title: 'Llama 4 Maverick',
    description: 'Meta open-source Mixture-of-Experts model with 128 experts, 10M token context window, and native multimodal capabilities. Designed for broad general tasks, deployable locally or via cloud.',
    url: 'https://llama.meta.com/',
    tags: ['Open Source', 'Large Context', 'Meta', 'MoE', 'Multimodal'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Open Source LLM',
      pricing: 'Free (open source) / API via providers',
      key_features: '128 MoE experts, 10M context window, multimodal, multilingual, locally deployable',
      ai_relevance: 'Ideal for schools seeking data privacy through local deployment and customization',
      future_potential: 'Llama 4 Behemoth (2T params) coming soon for frontier-level tasks'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'deepseek-v3-2',
    category: 'ai_tool',
    title: 'DeepSeek-V3.2 / R2',
    description: 'DeepSeek latest V3.2 model offers frontier-level performance at dramatically lower cost. R2 variant specializes in mathematical and scientific reasoning. V4 expected mid-February 2026.',
    url: 'https://chat.deepseek.com/',
    tags: ['General AI', 'Reasoning', 'Cost-Effective', 'Open Source', 'STEM'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Reasoning AI',
      pricing: 'Free tier + API pricing (very competitive)',
      key_features: 'Advanced reasoning, math/science specialization, MoE architecture, cost-efficient, chain-of-thought',
      ai_relevance: 'Excellent for STEM education, math tutoring, and scientific problem-solving at low cost',
      future_potential: 'V4 release imminent with major capability improvements'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'qwen3-235b',
    category: 'ai_tool',
    title: 'Qwen 3 (235B)',
    description: 'Alibaba Cloud flagship 235B parameter model supporting 119 languages with hybrid thinking modes. Qwen3-Coder-Next excels at software development. Strong multilingual and reasoning capabilities.',
    url: 'https://qwen.ai/',
    tags: ['General AI', 'Multilingual', 'Open Source', 'Coding', 'Alibaba'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Multilingual AI',
      pricing: 'Free (open source) / API available',
      key_features: '119 languages, hybrid thinking, 235B params, Qwen3-Coder-Next, strong reasoning',
      ai_relevance: 'Exceptional for multilingual education and international school environments',
      future_potential: 'Rapidly expanding ecosystem with specialized education variants'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'phi-4',
    category: 'ai_tool',
    title: 'Microsoft Phi-4',
    description: 'Microsoft compact 14B parameter model achieving GPT-4-class performance in math and STEM reasoning. Designed for efficiency, runs on modest hardware while delivering exceptional educational value.',
    url: 'https://azure.microsoft.com/en-us/products/phi/',
    tags: ['Small Model', 'STEM', 'Microsoft', 'Efficient', 'Education'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Compact AI Model',
      pricing: 'Free (open source) / Azure API',
      key_features: '14B params, GPT-4-class math/STEM, efficient inference, locally deployable, strong reasoning',
      ai_relevance: 'Perfect for resource-constrained schools needing high-quality STEM tutoring',
      future_potential: 'Demonstrates small models can rival larger ones for specific educational tasks'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'gemma-3',
    category: 'ai_tool',
    title: 'Google Gemma 3',
    description: 'Google lightweight open model family from 1B to 27B parameters. Multimodal with 128K context, designed for on-device and edge deployment. Excellent for educational apps and local AI.',
    url: 'https://ai.google.dev/gemma',
    tags: ['Open Source', 'Small Model', 'Google', 'Edge AI', 'Multimodal'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Open Source LLM',
      pricing: 'Free (open source)',
      key_features: '1B-27B range, multimodal, 128K context, on-device capable, efficient, vision support',
      ai_relevance: 'Ideal for building privacy-preserving educational tools that run locally on school devices',
      future_potential: 'Growing ecosystem of fine-tuned education-specific variants'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'xai-grok-4-2',
    category: 'ai_tool',
    title: 'xAI Grok 3 / Grok 4.2',
    description: 'xAI latest models with Grok 4.2 releasing February 2026. Real-time X (Twitter) integration, strong reasoning, and DeepSearch. Grok 5 expected Q1 2026.',
    url: 'https://x.ai/',
    tags: ['General AI', 'Real-time', 'xAI', 'Social Media', 'Reasoning'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Conversational AI',
      pricing: 'X Premium+ subscription / API access',
      key_features: 'Real-time X integration, DeepSearch, image generation, strong reasoning, humor mode',
      ai_relevance: 'Useful for real-time current events analysis and social media literacy education',
      future_potential: 'Grok 5 expected with massive compute scaling in Q1 2026'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'mistral-large-3',
    category: 'ai_tool',
    title: 'Mistral Large 3',
    description: 'Mistral AI flagship with 41B active parameters (675B total MoE) and 256K context. Strong multilingual and European AI leadership. Excellent for enterprise and education.',
    url: 'https://mistral.ai/',
    tags: ['General AI', 'European', 'Multilingual', 'Enterprise', 'MoE'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Enterprise AI',
      pricing: 'Free tier (Le Chat) + API pricing',
      key_features: '41B active / 675B total, 256K context, strong multilingual, coding, agentic workflows',
      ai_relevance: 'Leading European AI option with strong data sovereignty for EU schools',
      future_potential: 'Expanding Le Chat platform with agent capabilities'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // New entries
  {
    id: 'amazon-nova-pro',
    category: 'ai_tool',
    title: 'Amazon Nova Pro',
    description: 'Amazon flagship multimodal model with 300K context, up to 75% cheaper than competitors. Available through Amazon Bedrock with strong enterprise integration and compliance.',
    url: 'https://aws.amazon.com/bedrock/nova/',
    tags: ['General AI', 'Multimodal', 'Amazon', 'Enterprise', 'Cost-Effective'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Multimodal AI',
      pricing: 'Pay-per-use via AWS Bedrock (75% cheaper than competitors)',
      key_features: '300K context, multimodal (text/image/video), enterprise-grade, AWS integration, cost-effective',
      ai_relevance: 'Cost-effective option for schools already using AWS with strong compliance features',
      future_potential: 'Deepening AWS education ecosystem integration'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'ai21-jamba-large',
    category: 'ai_tool',
    title: 'AI21 Jamba 1.5 Large',
    description: 'Hybrid SSM-Transformer architecture with 94B active / 398B total parameters and 256K context. Combines efficiency of state-space models with Transformer quality.',
    url: 'https://www.ai21.com/jamba',
    tags: ['General AI', 'Long Context', 'Hybrid Architecture', 'AI21', 'Enterprise'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Hybrid AI Model',
      pricing: 'API access with free trial',
      key_features: 'Hybrid SSM-Transformer, 256K context, 94B/398B params, efficient long-doc processing',
      ai_relevance: 'Excellent for processing lengthy educational materials, textbooks, and research papers',
      future_potential: 'Novel architecture advancing the efficiency frontier for AI in education'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'cohere-command-r-plus',
    category: 'ai_tool',
    title: 'Cohere Command R+',
    description: 'Enterprise-focused 104B model with best-in-class RAG with inline citations. 128K context with strong multilingual support across 10+ languages.',
    url: 'https://cohere.com/',
    tags: ['Enterprise', 'RAG', 'Citations', 'Cohere', 'Multilingual'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Enterprise RAG AI',
      pricing: 'API access with free trial + enterprise plans',
      key_features: '104B params, enterprise RAG with citations, 128K context, multilingual, grounded generation',
      ai_relevance: 'Perfect for building citation-backed educational content and research tools',
      future_potential: 'Pioneering grounded AI generation with verifiable sources'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Image generation
  {
    id: 'midjourney-v7',
    category: 'ai_tool',
    title: 'Midjourney',
    description: 'Leading AI image generation producing stunning visuals from text. Widely used for educational content creation, illustration, and visual learning materials.',
    url: 'https://www.midjourney.com/',
    tags: ['Image Generation', 'Creative', 'Art', 'Visual Learning'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Image Generation',
      pricing: 'From $10/mo (Basic) to $120/mo (Mega)',
      key_features: 'Photorealistic images, artistic styles, text prompts, variation control, upscaling',
      ai_relevance: 'Creating educational illustrations, visual aids, and engaging learning materials',
      future_potential: 'Expanding into video and 3D generation'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'dall-e-3',
    category: 'ai_tool',
    title: 'DALL-E 3',
    description: 'OpenAI image generation integrated into ChatGPT. Excels at following complex text prompts and generating educational diagrams and illustrations.',
    url: 'https://openai.com/dall-e-3',
    tags: ['Image Generation', 'OpenAI', 'Creative', 'Education'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Image Generation',
      pricing: 'Included in ChatGPT Plus / API access',
      key_features: 'Precise prompt following, text rendering, ChatGPT integration, educational diagrams',
      ai_relevance: 'Generate custom educational visuals, diagrams, and illustrations for any subject',
      future_potential: 'Improving text rendering and educational diagram capabilities'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Audio / Speech
  {
    id: 'elevenlabs',
    category: 'ai_tool',
    title: 'ElevenLabs',
    description: 'Leading AI voice synthesis with ultra-realistic text-to-speech in 29+ languages. Ideal for audiobooks, narrated lessons, and accessible educational content.',
    url: 'https://elevenlabs.io/',
    tags: ['Audio', 'Text-to-Speech', 'Accessibility', 'Languages'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Voice AI',
      pricing: 'Free tier + From $5/mo',
      key_features: 'Ultra-realistic voices, 29+ languages, voice cloning, audio translation, real-time streaming',
      ai_relevance: 'Making educational content accessible through high-quality narration and multilingual support',
      future_potential: 'Real-time conversation AI and expanded language support'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Coding assistants
  {
    id: 'github-copilot',
    category: 'ai_tool',
    title: 'GitHub Copilot',
    description: 'AI coding assistant integrated into popular IDEs. Uses GPT-5 and Claude models for intelligent code suggestions, documentation generation, and debugging assistance.',
    url: 'https://github.com/features/copilot',
    tags: ['Coding', 'GitHub', 'IDE', 'Education', 'Developer Tools'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Coding Assistant',
      pricing: 'Free for students + $10/mo Individual + $19/mo Business',
      key_features: 'Multi-model (GPT-5, Claude), inline suggestions, chat, CLI, multi-file editing, workspace agent',
      ai_relevance: 'Free for students, teaching coding concepts, and accelerating CS education projects',
      future_potential: 'Expanding agentic coding with autonomous task completion'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Video generation
  {
    id: 'sora',
    category: 'ai_tool',
    title: 'OpenAI Sora',
    description: 'OpenAI text-to-video model creating realistic videos from text. Revolutionary for educational video content, simulations, and visual explanations.',
    url: 'https://openai.com/sora',
    tags: ['Video Generation', 'OpenAI', 'Creative', 'Education'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Video Generation',
      pricing: 'Included in ChatGPT Pro / API access',
      key_features: 'Text-to-video, realistic motion, scene understanding, up to 1 minute videos',
      ai_relevance: 'Creating engaging educational videos, historical recreations, and science visualizations',
      future_potential: 'Longer videos, better consistency, and interactive educational content'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Research and search
  {
    id: 'perplexity-ai',
    category: 'ai_tool',
    title: 'Perplexity AI',
    description: 'AI search engine providing sourced, cited answers. Ideal for research, fact-checking, and academic inquiry with real-time web access.',
    url: 'https://www.perplexity.ai/',
    tags: ['Search', 'Research', 'Citations', 'Education', 'Real-time'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'AI Search',
      pricing: 'Free tier + Pro $20/mo',
      key_features: 'Cited answers, real-time web search, academic focus, follow-up questions, collections',
      ai_relevance: 'Teaching research skills and providing cited, verifiable information for academic work',
      future_potential: 'Expanding into collaborative research and deeper academic integration'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Presentation and productivity
  {
    id: 'gamma-ai',
    category: 'ai_tool',
    title: 'Gamma AI',
    description: 'AI presentation and document creator generating professional slides, documents, and webpages from prompts. Perfect for teachers creating lesson materials quickly.',
    url: 'https://gamma.app/',
    tags: ['Presentations', 'Productivity', 'Education', 'Design'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Presentation AI',
      pricing: 'Free tier + Plus $8/mo + Pro $15/mo',
      key_features: 'AI presentations, documents, webpages, custom themes, analytics, collaboration',
      ai_relevance: 'Rapidly creating professional lesson presentations and educational materials',
      future_potential: 'Deeper AI integration for adaptive educational content'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Education-specific
  {
    id: 'khan-academy-khanmigo',
    category: 'ai_tool',
    title: 'Khanmigo (Khan Academy)',
    description: 'AI tutoring assistant for Khan Academy. Personalized tutoring, Socratic questioning, and adaptive learning paths across math, science, and more.',
    url: 'https://www.khanacademy.org/khan-labs',
    tags: ['Education', 'Tutoring', 'Adaptive Learning', 'K-12', 'Math'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'AI Tutor',
      pricing: 'Free for teachers / $44/year for learners',
      key_features: 'Socratic tutoring, step-by-step guidance, progress tracking, teacher dashboard, safe for students',
      ai_relevance: 'Purpose-built AI tutor with pedagogical best practices and student safety built in',
      future_potential: 'Expanding subjects and deeper personalization'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'quillbot',
    category: 'ai_tool',
    title: 'QuillBot',
    description: 'AI writing assistant offering paraphrasing, grammar checking, summarization, and citation generation. Widely used in education for improving student writing skills.',
    url: 'https://quillbot.com/',
    tags: ['Writing', 'Grammar', 'Paraphrasing', 'Education', 'Academic'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Writing Assistant',
      pricing: 'Free tier + Premium $9.95/mo',
      key_features: 'Paraphraser, grammar checker, summarizer, citation generator, plagiarism checker',
      ai_relevance: 'Helping students improve writing quality while maintaining academic integrity',
      future_potential: 'AI-powered writing coaching and feedback'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'notebooklm',
    category: 'ai_tool',
    title: 'Google NotebookLM',
    description: 'Google AI research and note-taking tool generating insights from uploaded documents. Creates audio overviews, study guides, and Q&A from source materials.',
    url: 'https://notebooklm.google.com/',
    tags: ['Research', 'Notes', 'Google', 'Education', 'Study'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Research AI',
      pricing: 'Free with Google account',
      key_features: 'Document analysis, audio overviews, study guides, Q&A generation, source-grounded',
      ai_relevance: 'Transform course materials into interactive study resources and audio content',
      future_potential: 'Expanding source types and collaborative features'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  }
];

// AI Tool Categories for filtering
export const aiToolCategories = [
  {
    id: 'all',
    name: 'All AI Tools',
    description: 'Complete collection of AI tools for educators',
    tools: aiToolsData
  },
  {
    id: 'chat',
    name: 'Chat & Reasoning',
    description: 'Conversational AI models for teaching and learning',
    tools: aiToolsData.filter(t => ['chatgpt-gpt5', 'claude-opus-4-6', 'google-gemini-3-pro', 'deepseek-v3-2', 'qwen3-235b', 'xai-grok-4-2', 'mistral-large-3'].includes(t.id))
  },
  {
    id: 'open-source',
    name: 'Open Source',
    description: 'Free and open-source AI models',
    tools: aiToolsData.filter(t => ['llama4-maverick', 'deepseek-v3-2', 'qwen3-235b', 'phi-4', 'gemma-3'].includes(t.id))
  },
  {
    id: 'image-video',
    name: 'Image & Video',
    description: 'AI tools for visual content creation',
    tools: aiToolsData.filter(t => ['midjourney-v7', 'dall-e-3', 'sora'].includes(t.id))
  },
  {
    id: 'education',
    name: 'Education Specific',
    description: 'AI tools designed specifically for education',
    tools: aiToolsData.filter(t => ['khan-academy-khanmigo', 'quillbot', 'notebooklm', 'gamma-ai'].includes(t.id))
  },
  {
    id: 'coding',
    name: 'Coding & Development',
    description: 'AI-powered coding assistants',
    tools: aiToolsData.filter(t => ['github-copilot'].includes(t.id))
  },
  {
    id: 'enterprise',
    name: 'Enterprise & RAG',
    description: 'Enterprise-grade AI with retrieval capabilities',
    tools: aiToolsData.filter(t => ['amazon-nova-pro', 'ai21-jamba-large', 'cohere-command-r-plus', 'mistral-large-3'].includes(t.id))
  },
  {
    id: 'audio',
    name: 'Audio & Speech',
    description: 'AI tools for voice and audio generation',
    tools: aiToolsData.filter(t => ['elevenlabs'].includes(t.id))
  },
  {
    id: 'research',
    name: 'Research & Search',
    description: 'AI-powered research and search tools',
    tools: aiToolsData.filter(t => ['perplexity-ai', 'notebooklm'].includes(t.id))
  }
];
