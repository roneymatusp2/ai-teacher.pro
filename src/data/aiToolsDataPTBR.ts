import { Resource } from '../lib/supabase';

// Comprehensive AI Tools Database (Portuguese Brazilian) from "AI Teacher Pro" Book
export const aiToolsDataPTBR: Resource[] = [
  // IA geral para conversação e raciocínio de contexto amplo
  {
    id: 'chatgpt-gpt4o',
    category: 'ai_tool',
    title: 'ChatGPT (GPT-4o)',
    title_en: 'ChatGPT (GPT-4o)',
    description: 'LLM multimodal líder com contexto de 128k tokens e ferramentas integradas de imagem/áudio.',
    description_en: 'Leading multimodal LLM with a 128k token context and integrated image/audio tools.',
    url: 'https://chat.openai.com/',
    tags: ['IA Geral', 'Multimodal', 'Contexto Amplo', 'OpenAI'],
    tags_en: ['General AI', 'Multimodal', 'Large Context', 'OpenAI'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      type_en: 'Conversational AI',
      pricing: 'Gratuito + assinatura Plus',
      pricing_en: 'Free + Plus subscription',
      key_features: 'Análise de imagens, execução de código, upload de arquivos, navegação web',
      key_features_en: 'Image analysis, code execution, file uploads, web browsing',
      ai_relevance: 'Assistente IA premium para planejamento de aulas, criação de conteúdo e suporte estudantil',
      ai_relevance_en: 'Premium AI assistant for lesson planning, content creation, and student support',
      future_potential: 'Atualizações contínuas com novos recursos para educação',
      future_potential_en: 'Continuous updates with new features for education'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'claude-3-5-sonnet',
    category: 'ai_tool',
    title: 'Claude 3.5 Sonnet',
    title_en: 'Claude 3.5 Sonnet',
    description: 'Modelo mais recente da Anthropic; excelente em raciocínio profundo e análise de documentos.',
    description_en: 'Anthropic’s latest model; excels at deep reasoning and document analysis.',
    url: 'https://claude.ai/',
    tags: ['IA Geral', 'Raciocínio', 'Análise de Documentos', 'Anthropic'],
    tags_en: ['General AI', 'Reasoning', 'Document Analysis', 'Anthropic'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      type_en: 'Conversational AI',
      pricing: 'Gratuito + assinatura Pro',
      pricing_en: 'Free + Pro subscription',
      key_features: 'Raciocínio avançado, contexto longo, análise de documentos, geração de código',
      key_features_en: 'Advanced reasoning, long context, document analysis, code generation',
      ai_relevance: 'Excellent for analysing and creating complex educational content',
      ai_relevance_en: 'Excellent for analysing and creating complex educational content',
      future_potential: 'Foco forte em segurança e utilidade para uso educacional',
      future_potential_en: 'Strong focus on safety and utility for educational use'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  // IA geral para conversação e raciocínio de contexto amplo
  {
    id: 'chatgpt-gpt4o',
    category: 'ai_tool',
    title: 'ChatGPT (GPT-4o)',
    description: 'LLM multimodal líder com contexto de 128k tokens e ferramentas integradas de imagem/áudio.',
    url: 'https://chat.openai.com/',
    tags: ['IA Geral', 'Multimodal', 'Contexto Amplo', 'OpenAI'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Gratuito + assinatura Plus',
      key_features: 'Análise de imagens, execução de código, upload de arquivos, navegação web',
      ai_relevance: 'Assistente IA premium para planejamento de aulas, criação de conteúdo e suporte estudantil',
      future_potential: 'Atualizações contínuas com novos recursos para educação'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'claude-3-5-sonnet',
    category: 'ai_tool',
    title: 'Claude 3.5 Sonnet',
    description: 'Modelo mais recente da Anthropic; excelente em raciocínio profundo e análise de documentos.',
    url: 'https://claude.ai/',
    tags: ['IA Geral', 'Raciocínio', 'Análise de Documentos', 'Anthropic'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Gratuito + assinatura Pro',
      key_features: 'Raciocínio avançado, contexto longo, análise de documentos, geração de código',
      ai_relevance: 'Excelente para análise e criação de conteúdo educacional complexo',
      future_potential: 'Foco forte em segurança e utilidade para uso educacional'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'google-gemini-2-5-pro',
    category: 'ai_tool',
    title: 'Google Gemini 2.5 Pro',
    description: 'Modelo de primeira linha do Google; forte execução de código e integração nativa YouTube/imagem.',
    url: 'https://gemini.google.com/',
    tags: ['IA Geral', 'Execução de Código', 'Google', 'Multimodal'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Gratuito + assinatura Avançada',
      key_features: 'Integração YouTube, informações em tempo real, integração Google Workspace',
      ai_relevance: 'Integração perfeita com ferramentas e serviços educacionais do Google',
      future_potential: 'Integração profunda com o ecossistema Google for Education'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'xai-grok-3',
    category: 'ai_tool',
    title: 'xAI Grok 3',
    description: 'Assistente conectado à web em tempo real integrado ao X (antigo Twitter).',
    url: 'https://x.ai/',
    tags: ['IA Geral', 'Tempo Real', 'Conectado à Web', 'Redes Sociais'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Requer assinatura X Premium',
      key_features: 'Acesso web em tempo real, integração redes sociais, eventos atuais',
      ai_relevance: 'Informações atualizadas para eventos atuais e tópicos em alta na educação',
      future_potential: 'Conteúdo educacional em tempo real e análise de tendências'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'llama-3-405b',
    category: 'ai_tool',
    title: 'Llama-3 (405B)',
    description: 'LLM de fronteira com pesos abertos da Meta para hospedagem local/privada.',
    url: 'https://ai.meta.com/llama/',
    tags: ['Código Aberto', 'Hospedagem Local', 'Meta', 'Privacidade'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Código Aberto',
      pricing: 'Gratuito (requer hospedagem)',
      key_features: 'Pesos abertos, implantação local, focado em privacidade, personalizável',
      ai_relevance: 'Perfeito para escolas que exigem privacidade de dados e controle local',
      future_potential: 'Controle institucional total e capacidades de personalização'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'deepseek-v3',
    category: 'ai_tool',
    title: 'DeepSeek-V3',
    description: 'Modelo chinês de código aberto ajustado para matemática e código.',
    url: 'https://github.com/deepseek-ai/deepseek-llm',
    tags: ['Código Aberto', 'Matemática', 'Programação', 'Chinês'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Especializado',
      pricing: 'Gratuito (código aberto)',
      key_features: 'Excelência em matemática, otimização de código, focado em pesquisa',
      ai_relevance: 'Especializado para educação STEM e resolução de problemas matemáticos',
      future_potential: 'Raciocínio matemático avançado para aplicações educacionais'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'qwen-max',
    category: 'ai_tool',
    title: 'Qwen-Max',
    description: 'LLM de pesquisa bilíngue da Alibaba com variantes de chat e código.',
    url: 'https://qwen.openkg.cn/',
    tags: ['Bilíngue', 'Pesquisa', 'Alibaba', 'Chinês'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM de Pesquisa',
      pricing: 'Vários níveis disponíveis',
      key_features: 'Bilíngue chinês-inglês, capacidades de pesquisa, geração de código',
      ai_relevance: 'Excelente para educação bilíngue e escolas internacionais',
      future_potential: 'Conteúdo educacional intercultural e aprendizado de idiomas'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'mistral-large',
    category: 'ai_tool',
    title: 'Mistral Large',
    description: 'Modelo europeu com forte resumo e chamada de funções.',
    url: 'https://mistral.ai/',
    tags: ['Europeu', 'Resumo', 'Chamada de Funções', 'Privacidade'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Europeu',
      pricing: 'Preços de API disponíveis',
      key_features: 'Conformidade GDPR, chamada de funções, resumo avançado',
      ai_relevance: 'Soberania de dados europeia e conformidade educacional',
      future_potential: 'Soluções IA compatíveis com GDPR para instituições educacionais europeias'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'bloom-176b',
    category: 'ai_tool',
    title: 'BLOOM-176B',
    description: 'Primeiro LLM verdadeiramente multilíngue aberto (46 idiomas).',
    url: 'https://huggingface.co/bigscience/bloom',
    tags: ['Multilíngue', 'Código Aberto', 'Hugging Face', '46 Idiomas'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Multilíngue',
      pricing: 'Gratuito (código aberto)',
      key_features: 'Suporte a 46 idiomas, pesquisa aberta, desenvolvimento colaborativo',
      ai_relevance: 'Revolucionário para educação multilíngue e internacional',
      future_potential: 'Quebrando barreiras linguísticas na educação global'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'falcon-180b',
    category: 'ai_tool',
    title: 'Falcon-180B',
    description: 'Modelo construído nos Emirados Árabes otimizado para inferência de baixo custo.',
    url: 'https://falconllm.tii.ae/',
    tags: ['Emirados Árabes', 'Custo-Benefício', 'Código Aberto', 'Inferência'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Otimizado',
      pricing: 'Gratuito (código aberto)',
      key_features: 'Inferência econômica, desempenho otimizado, pesos abertos',
      ai_relevance: 'Opção amigável ao orçamento para escolas com recursos limitados',
      future_potential: 'Democratizando acesso à IA para instituições educacionais globalmente'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'stablelm',
    category: 'ai_tool',
    title: 'StableLM',
    description: 'Irmão focado em texto do Stable Diffusion para uso local.',
    url: 'https://stability.ai/blog/stablelm',
    tags: ['Uso Local', 'Stability AI', 'Código Aberto', 'Privacidade'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Local',
      pricing: 'Gratuito (código aberto)',
      key_features: 'Implantação local, focado em privacidade, leve, personalizável',
      ai_relevance: 'Perfeito para escolas que exigem controle total de dados e privacidade',
      future_potential: 'Soluções IA totalmente privadas para ambientes educacionais sensíveis'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'gemma-2',
    category: 'ai_tool',
    title: 'Gemma 2',
    description: 'Modelo leve sem licença do Google para dispositivos edge.',
    url: 'https://ai.google.dev/gemma',
    tags: ['Leve', 'Dispositivos Edge', 'Google', 'Sem Licença'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Modelo IA Edge',
      pricing: 'Gratuito (sem licença)',
      key_features: 'Implantação edge, baixos requisitos de recursos, sem licença',
      ai_relevance: 'Ideal para salas de aula com recursos computacionais limitados',
      future_potential: 'Capacidades IA em qualquer dispositivo, em qualquer lugar'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'phi-3',
    category: 'ai_tool',
    title: 'Phi-3',
    description: 'Modelo de pegada pequena (4–14B) com desempenho próximo ao GPT-3.',
    url: 'https://www.microsoft.com/en-us/ai/phi',
    tags: ['Microsoft', 'Leve', 'Eficiente', 'Modelo Pequeno'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Eficiente',
      pricing: 'Várias opções de licenciamento',
      key_features: 'Pegada pequena, alto desempenho, inferência eficiente',
      ai_relevance: 'IA de alta qualidade para ambientes educacionais com recursos limitados',
      future_potential: 'Capacidades IA poderosas sem requisitos de infraestrutura pesada'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'solar-10-7b',
    category: 'ai_tool',
    title: 'SOLAR 10.7B',
    description: 'LLM retriever denso da Upstage—SOTA em muitos benchmarks abertos.',
    url: 'https://upstage.ai/solar',
    tags: ['Upstage', 'Retriever Denso', 'Benchmarks', 'Código Aberto'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM Aumentado por Recuperação',
      pricing: 'Código aberto com opções comerciais',
      key_features: 'Recuperação densa, desempenho benchmark, grau de pesquisa',
      ai_relevance: 'Excelente para projetos educacionais baseados em pesquisa e verificação de fatos',
      future_potential: 'Recuperação de informações avançada para pesquisa educacional'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },

  // Copilotos de código e agentes de desenvolvimento
  {
    id: 'github-copilot',
    category: 'ai_tool',
    title: 'GitHub Copilot',
    description: 'Autocompletar código inline e chat em IDEs.',
    url: 'https://github.com/features/copilot',
    tags: ['Programação', 'GitHub', 'Integração IDE', 'Autocompletar Código'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Assistente de Código',
      pricing: 'Gratuito para estudantes, pago para profissionais',
      key_features: 'Autocompletar código, interface de chat, suporte multilinguagem',
      ai_relevance: 'Ferramenta essencial para ensinar programação e ciência da computação',
      future_potential: 'Transformando como a programação é ensinada e aprendida'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'windsurf',
    category: 'ai_tool',
    title: 'Windsurf (anteriormente Codeium)',
    description: 'IDE completamente nativo de IA com refatorações multi-arquivo e agentes.',
    url: 'https://windsurf.com/',
    tags: ['IDE', 'Nativo IA', 'Multi-arquivo', 'Refatoração'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IDE Nativo IA',
      pricing: 'Nível gratuito com opções pro',
      key_features: 'Refatoração multi-arquivo, agentes IA, desenvolvimento integrado',
      ai_relevance: 'IDE de próxima geração para ensinar desenvolvimento de software moderno',
      future_potential: 'Redefinindo o ambiente de desenvolvimento para educação'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'cursor',
    category: 'ai_tool',
    title: 'Cursor',
    description: 'Editor baseado no VS Code com chat de repositório inteiro e revisão de PR.',
    url: 'https://www.cursor.so/',
    tags: ['VS Code', 'Chat Repositório', 'Revisão PR', 'Editor Código'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Editor Código IA',
      pricing: 'Nível gratuito com assinatura pro',
      key_features: 'Compreensão de repositório inteiro, revisões PR, compatibilidade VS Code',
      ai_relevance: 'Editor de código avançado para ensinar práticas de engenharia de software',
      future_potential: 'Compreensão abrangente de código e desenvolvimento colaborativo'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'replit-ai',
    category: 'ai_tool',
    title: 'Replit AI',
    description: 'IDE na nuvem e assistente Ghostwriter para implantações instantâneas.',
    url: 'https://replit.com/site/ai',
    tags: ['IDE Nuvem', 'Implantação Instantânea', 'Ghostwriter', 'Educacional'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Desenvolvimento Nuvem',
      pricing: 'Nível gratuito para educação',
      key_features: 'Implantação instantânea, codificação colaborativa, recursos educacionais',
      ai_relevance: 'Perfeito para codificação em sala de aula com zero requisitos de configuração',
      future_potential: 'Democratizando educação em programação com assistência IA baseada na nuvem'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'bolt-new',
    category: 'ai_tool',
    title: 'Bolt.new',
    description: 'Gerador de chat para site/app que implanta no Netlify em minutos.',
    url: 'https://bolt.new/',
    tags: ['Sem Código', 'Gerador Site', 'Netlify', 'Implantação Rápida'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Sem Código',
      pricing: 'Preços baseados em uso',
      key_features: 'Linguagem natural para website, implantação instantânea, sem necessidade de codificação',
      ai_relevance: 'Permite que educadores não técnicos criem websites educacionais instantaneamente',
      future_potential: 'Conectando a lacuna entre ideias educacionais e implementação digital'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'create-xyz',
    category: 'ai_tool',
    title: 'Create.xyz',
    description: 'Agente sem código que transforma especificações em linguagem natural em apps full-stack.',
    url: 'https://www.create.xyz/',
    tags: ['Sem Código', 'Full Stack', 'Linguagem Natural', 'Construtor App'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Construtor App Sem Código',
      pricing: 'Vários níveis disponíveis',
      key_features: 'Especificações linguagem natural, geração full-stack, agente IA',
      ai_relevance: 'Capacita educadores a criar aplicações educacionais personalizadas',
      future_potential: 'Transformando ideias educacionais em software funcional sem codificação'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'tempo-labs',
    category: 'ai_tool',
    title: 'Tempo Labs',
    description: 'Editor visual React que co-cria UI com IA.',
    url: 'https://www.tempo.new/',
    tags: ['React', 'Editor Visual', 'Design UI', 'Co-criação'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Ferramenta Desenvolvimento Visual',
      pricing: 'Acesso beta disponível',
      key_features: 'Edição visual React, co-criação IA, colaboração tempo real',
      ai_relevance: 'Ensinando desenvolvimento web moderno com design assistido por IA',
      future_potential: 'IA colaborativa para educação em programação visual'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'v0-vercel',
    category: 'ai_tool',
    title: 'v0 by Vercel',
    description: 'Gera componentes Next.js prontos para produção a partir de prompts.',
    url: 'https://v0.dev/',
    tags: ['Next.js', 'Componentes', 'Vercel', 'Pronto Produção'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Gerador Componentes',
      pricing: 'Preços baseados em uso',
      key_features: 'Componentes Next.js, código pronto produção, integração sistema design',
      ai_relevance: 'Ensinando desenvolvimento web moderno com componentes gerados por IA',
      future_potential: 'Acelerando educação desenvolvimento web e prototipagem'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'codeium',
    category: 'ai_tool',
    title: 'Codeium',
    description: 'Autocompletar gratuito para 70+ linguagens; opção auto-hospedagem.',
    url: 'https://www.codeium.com/',
    tags: ['Autocompletar', '70+ Linguagens', 'Auto Hospedagem', 'Gratuito'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Ferramenta Autocompletar Código',
      pricing: 'Gratuito com opções empresariais',
      key_features: '70+ linguagens programação, auto-hospedagem, focado privacidade',
      ai_relevance: 'Assistência codificação abrangente para todas linguagens programação ensinadas',
      future_potential: 'Suporte educação codificação universal com opções privacidade'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'junie-ai',
    category: 'ai_tool',
    title: 'Junie AI',
    description: 'Agente JetBrains que pode navegar, executar e refatorar projetos inteiros.',
    url: 'https://www.jetbrains.com/junie/',
    tags: ['JetBrains', 'Navegação Projeto', 'Refatoração', 'Agente IDE'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Agente IA IDE',
      pricing: 'Licenciamento JetBrains',
      key_features: 'Compreensão projeto inteiro, refatoração automatizada, navegação inteligente',
      ai_relevance: 'Capacidades IDE avançadas para ensinar arquitetura software',
      future_potential: 'Compreensão projeto abrangente e melhorias código automatizadas'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'jules-google',
    category: 'ai_tool',
    title: 'Jules',
    description: 'Beta do Google Labs que corrige bugs e escreve testes assincronamente.',
    url: 'https://jules.google/',
    tags: ['Google Labs', 'Correção Bugs', 'Escrita Testes', 'Assíncrono'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Ferramenta Desenvolvimento Automatizado',
      pricing: 'Acesso beta (Google Labs)',
      key_features: 'Correção bugs automatizada, geração testes, operação assíncrona',
      ai_relevance: 'Ensinando garantia qualidade software e metodologias teste',
      future_potential: 'Manutenção software automatizada e melhoria qualidade'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'lovable',
    category: 'ai_tool',
    title: 'Lovable',
    description: 'Construtor IA orientado pela comunidade para ferramentas internas.',
    url: 'https://lovable.dev/',
    tags: ['Orientado Comunidade', 'Ferramentas Internas', 'Construtor IA', 'Colaborativo'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma IA Comunidade',
      pricing: 'Preços baseados comunidade',
      key_features: 'Desenvolvimento orientado comunidade, criação ferramentas internas, IA colaborativa',
      ai_relevance: 'Construindo ferramentas educacionais através colaboração comunidade',
      future_potential: 'Democratizando desenvolvimento ferramentas educacionais através IA comunidade'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'base44',
    category: 'ai_tool',
    title: 'BASE44',
    description: '"IA como sua fábrica SaaS" – bancos dados, autenticação, email integrados.',
    url: 'https://base44.com/',
    tags: ['Fábrica SaaS', 'Banco Dados', 'Autenticação', 'Tudo-em-Um'],
    cover_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma SaaS Completa',
      pricing: 'Baseado assinatura',
      key_features: 'Bancos dados integrados, autenticação, serviços email, alimentado por IA',
      ai_relevance: 'Plataforma completa para construir aplicações SaaS educacionais',
      future_potential: 'Desenvolvimento plataforma educacional full-stack com assistência IA'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },

  // Geração de mídia criativa
  {
    id: 'dalle-3',
    category: 'ai_tool',
    title: 'DALL·E 3',
    description: 'Texto para imagem (agora integrado no ChatGPT).',
    url: 'https://labs.openai.com/',
    tags: ['Geração Imagem', 'Texto para Imagem', 'OpenAI', 'Criativo'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Geração Imagem',
      pricing: 'Integrado com ChatGPT Plus',
      key_features: 'Geração imagens alta qualidade, integração texto, ilustrações educacionais',
      ai_relevance: 'Criando visuais educacionais personalizados, ilustrações e materiais aprendizado',
      future_potential: 'Revolucionando criação conteúdo visual para educação'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'midjourney',
    category: 'ai_tool',
    title: 'Midjourney',
    description: 'Gerador arte baseado Discord famoso por realismo fotográfico.',
    url: 'https://www.midjourney.com/',
    tags: ['Geração Arte', 'Fotorrealístico', 'Discord', 'Criativo'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Geração Arte',
      pricing: 'Baseado assinatura',
      key_features: 'Imagens fotorrealísticas, estilos artísticos, orientado comunidade',
      ai_relevance: 'Criando conteúdo visual impressionante para apresentações e materiais educacionais',
      future_potential: 'Arte educacional qualidade profissional e narrativa visual'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'stable-diffusion-xl',
    category: 'ai_tool',
    title: 'Stable Diffusion XL',
    description: 'Modelo difusão pesos abertos para criação imagem local ou API.',
    url: 'https://stability.ai/',
    tags: ['Código Aberto', 'Geração Local', 'API', 'Stable Diffusion'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Imagem Código Aberto',
      pricing: 'Gratuito (código aberto) + opções API',
      key_features: 'Implantação local, pesos abertos, personalizável, focado privacidade',
      ai_relevance: 'Controle completo sobre geração imagem para instituições educacionais',
      future_potential: 'Geração imagem privada e personalizável para conteúdo educacional sensível'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'leonardo-ai',
    category: 'ai_tool',
    title: 'Leonardo AI',
    description: 'Pipeline SD pronto para ajuste fino com gráficos 4k e variantes assets.',
    url: 'https://leonardo.ai/',
    tags: ['Ajuste Fino', 'Gráficos 4K', 'Variantes Assets', 'Profissional'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Imagem Profissional',
      pricing: 'Freemium com níveis pro',
      key_features: 'Capacidades ajuste fino, resolução 4K, gerenciamento assets',
      ai_relevance: 'Criação conteúdo educacional grau profissional e desenvolvimento assets',
      future_potential: 'Estilos visuais educacionais personalizados e criação conteúdo marca'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'ideogram',
    category: 'ai_tool',
    title: 'Ideogram',
    description: 'Excelente em pôsteres texto-dentro-imagem e tipografia.',
    url: 'https://ideogram.ai/',
    tags: ['Tipografia', 'Texto em Imagens', 'Pôsteres', 'Gráficos Educacionais'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Focada Tipografia',
      pricing: 'Modelo freemium',
      key_features: 'Integração texto, criação pôsteres, excelência tipografia',
      ai_relevance: 'Perfeito para criar pôsteres educacionais, infográficos e visuais baseados texto',
      future_potential: 'Criação avançada pôsteres educacionais e infográficos'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'adobe-firefly',
    category: 'ai_tool',
    title: 'Adobe Firefly',
    description: 'Imagens comercialmente seguras + recoloração vetorial em apps Adobe CC.',
    url: 'https://firefly.adobe.com/',
    tags: ['Adobe', 'Comercialmente Seguro', 'Gráficos Vetoriais', 'Creative Cloud'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Criativa Empresarial',
      pricing: 'Assinatura Adobe Creative Cloud',
      key_features: 'Licenciamento comercial, integração Creative Cloud, capacidades vetoriais',
      ai_relevance: 'Uso comercial seguro para instituições educacionais e conteúdo profissional',
      future_potential: 'Criação conteúdo educacional profissional com segurança legal'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'canva-magic',
    category: 'ai_tool',
    title: 'Canva Magic',
    description: 'Apresentações um clique, imagem e assets redes sociais dentro Canva.',
    url: 'https://www.canva.com/magic/',
    tags: ['Apresentações', 'Redes Sociais', 'Templates', 'Fácil Usar'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Automação Design',
      pricing: 'Freemium com Canva Pro',
      key_features: 'Design um clique, criação apresentações, assets redes sociais',
      ai_relevance: 'Apresentações profissionais instantâneas e materiais educacionais',
      future_potential: 'Democratizando design profissional para todos educadores'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'unity-muse',
    category: 'ai_tool',
    title: 'Unity Muse',
    description: 'Gera texturas, comportamentos e C# estruturado para desenvolvimento jogos.',
    url: 'https://unity.com/products/unity-muse',
    tags: ['Desenvolvimento Jogos', 'Unity', 'Texturas', 'Programação C#'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Desenvolvimento Jogos',
      pricing: 'Níveis assinatura Unity',
      key_features: 'Geração texturas, scripting comportamentos, estruturação código C#',
      ai_relevance: 'Ensinando desenvolvimento jogos e experiências educacionais interativas',
      future_potential: 'Criação jogos educacionais assistida por IA e aprendizado interativo'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'runway-ml',
    category: 'ai_tool',
    title: 'Runway ML',
    description: 'Gen-2 texto para vídeo e remoção tela verde para editores.',
    url: 'https://runwayml.com/',
    tags: ['Geração Vídeo', 'Texto para Vídeo', 'Tela Verde', 'Edição Vídeo'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Geração Vídeo',
      pricing: 'Sistema baseado créditos',
      key_features: 'Geração vídeo texto, ferramentas edição vídeo, remoção tela verde',
      ai_relevance: 'Criando vídeos educacionais e conteúdo visual interativo',
      future_potential: 'Criação conteúdo vídeo revolucionária para educação online'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'synthesia',
    category: 'ai_tool',
    title: 'Synthesia',
    description: 'Vídeos talking-head qualidade estúdio em 120+ idiomas.',
    url: 'https://www.synthesia.io/',
    tags: ['Vídeos Talking Head', 'Multilíngue', 'Qualidade Estúdio', 'Apresentador IA'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Vídeo IA',
      pricing: 'Baseado assinatura',
      key_features: '120+ idiomas, avatares realísticos, produção qualidade estúdio',
      ai_relevance: 'Criando conteúdo educacional multilíngue com apresentadores IA',
      future_potential: 'Entrega educação multilíngue escalável com instrutores IA'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'elevenlabs',
    category: 'ai_tool',
    title: 'ElevenLabs',
    description: 'TTS multilíngue quase humano e clonagem voz.',
    url: 'https://elevenlabs.io/',
    tags: ['Texto para Fala', 'Clonagem Voz', 'Multilíngue', 'Áudio'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Voz IA',
      pricing: 'Preços baseados uso',
      key_features: 'TTS realístico, clonagem voz, suporte multilíngue',
      ai_relevance: 'Criando conteúdo áudio, audiolivros e materiais educacionais acessíveis',
      future_potential: 'Educação áudio personalizada e soluções acessibilidade'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'google-veo-3',
    category: 'ai_tool',
    title: 'Google Veo 3',
    description: 'Texto para vídeo próxima geração; 1080p, clipes 1 min com áudio.',
    url: 'https://deepmind.google/technologies/video-generation/veo',
    tags: ['Google', 'Texto para Vídeo', '1080p', 'Geração Áudio'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Vídeo Avançada',
      pricing: 'Preços Google Cloud',
      key_features: 'Vídeo alta definição, geração áudio, duração estendida',
      ai_relevance: 'Criando vídeos educacionais alta qualidade com áudio sincronizado',
      future_potential: 'Produção vídeo educacional profissional com IA'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'hailuo-ai',
    category: 'ai_tool',
    title: 'Hailuo AI',
    description: 'Micro-vídeos loop 6 segundos perfeitos para "ganchos aula".',
    url: 'https://hailuoai.video/',
    tags: ['Micro Vídeos', 'Ganchos Aula', 'Loop', 'Conteúdo Curto'],
    cover_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Micro-Vídeo',
      pricing: 'Baseado uso',
      key_features: 'Geração vídeo curto, conteúdo loop, engajamento aula',
      ai_relevance: 'Criando ganchos vídeo envolventes e conteúdo educacional chamativo',
      future_potential: 'Conteúdo micro-aprendizagem e ferramentas captura atenção para educação'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },

  // Pesquisa acadêmica e manipulação dados
  {
    id: 'perplexity-ai',
    category: 'ai_tool',
    title: 'Perplexity AI',
    description: 'Busca conversacional que cita cada fonte.',
    url: 'https://www.perplexity.ai/',
    tags: ['Pesquisa', 'Busca Conversacional', 'Citações', 'Acadêmico'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Pesquisa IA',
      pricing: 'Freemium com assinatura Pro',
      key_features: 'Citações fonte, busca tempo real, suporte pesquisa acadêmica',
      ai_relevance: 'Ferramenta essencial para pesquisa acadêmica e verificação fatos na educação',
      future_potential: 'Transformando como pesquisa é conduzida e verificada em ambientes educacionais'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'consensus',
    category: 'ai_tool',
    title: 'Consensus',
    description: 'Extrai sentenças evidência de 200M+ artigos acadêmicos.',
    url: 'https://consensus.app/',
    tags: ['Artigos Acadêmicos', 'Extração Evidência', 'Pesquisa', 'Científico'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Ferramenta Pesquisa Acadêmica',
      pricing: 'Modelo freemium',
      key_features: 'Extração evidência, 200M+ artigos, consenso científico',
      ai_relevance: 'Crítico para ensino baseado evidência e pesquisa acadêmica',
      future_potential: 'Revolucionando revisões literatura e síntese evidência'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'elicit',
    category: 'ai_tool',
    title: 'Elicit',
    description: 'Assistente revisão sistemática que constrói matrizes literatura.',
    url: 'https://elicit.org/',
    tags: ['Revisão Sistemática', 'Matriz Literatura', 'Assistente Pesquisa', 'Acadêmico'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Assistente Pesquisa IA',
      pricing: 'Gratuito para pesquisadores',
      key_features: 'Matrizes literatura, revisões sistemáticas, automação fluxo trabalho pesquisa',
      ai_relevance: 'Simplificando processos pesquisa acadêmica para educadores e estudantes',
      future_potential: 'Metodologia pesquisa automatizada e análise literatura'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'scispace',
    category: 'ai_tool',
    title: 'SciSpace',
    description: 'Explicador linguagem simples e leitor PDF IA.',
    url: 'https://typeset.io/scispace',
    tags: ['Linguagem Simples', 'Leitor PDF', 'Explicador Pesquisa', 'Acadêmico'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Assistente Leitura Acadêmica',
      pricing: 'Freemium com recursos premium',
      key_features: 'Explicações linguagem simples, análise PDF, compreensão pesquisa',
      ai_relevance: 'Tornando pesquisa complexa acessível para estudantes e educadores',
      future_potential: 'Democratizando acesso conhecimento acadêmico através explicação IA'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'notebooklm',
    category: 'ai_tool',
    title: 'NotebookLM',
    description: 'Caderno pesquisa IA com respostas ancoradas fonte.',
    url: 'https://notebooklm.google/',
    tags: ['Caderno Pesquisa', 'Ancorado Fonte', 'Google', 'Acadêmico'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Caderno Pesquisa IA',
      pricing: 'Gratuito (Google Labs)',
      key_features: 'Atribuição fonte, organização pesquisa, insights alimentados IA',
      ai_relevance: 'Organizando e sintetizando pesquisa para projetos educacionais',
      future_potential: 'Metodologia pesquisa próxima geração e gestão conhecimento'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'wolfram-alpha',
    category: 'ai_tool',
    title: 'Wolfram Alpha',
    description: 'Computação simbólica e dados curados para matemática, ciência, finanças.',
    url: 'https://www.wolframalpha.com/',
    tags: ['Matemática', 'Ciência', 'Computação Simbólica', 'Educacional'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Motor Conhecimento Computacional',
      pricing: 'Gratuito com assinatura Pro',
      key_features: 'Computação matemática, dados científicos, soluções passo-a-passo',
      ai_relevance: 'Essencial para educação STEM e resolução problemas matemáticos',
      future_potential: 'Educação computacional avançada e alfabetização matemática'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'ibm-watson-x',
    category: 'ai_tool',
    title: 'IBM Watson x',
    description: 'PLN empresarial, fala e pipelines AutoIA.',
    url: 'https://www.ibm.com/watson',
    tags: ['Empresarial', 'PLN', 'Processamento Fala', 'IBM'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma IA Empresarial',
      pricing: 'Licenciamento empresarial',
      key_features: 'Processamento linguagem natural, reconhecimento fala, pipelines IA automatizados',
      ai_relevance: 'Soluções IA grau empresarial para grandes instituições educacionais',
      future_potential: 'Infraestrutura IA escalável para organizações educacionais'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'oracle-ai',
    category: 'ai_tool',
    title: 'Oracle AI',
    description: 'APIs Linguagem e Visão OCI com opções soberania dados.',
    url: 'https://www.oracle.com/artificial-intelligence/',
    tags: ['Oracle', 'Soberania Dados', 'Processamento Linguagem', 'Visão IA'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Nuvem Empresarial',
      pricing: 'Preços baseados nuvem',
      key_features: 'Soberania dados, APIs linguagem, processamento visão, segurança empresarial',
      ai_relevance: 'Soluções IA seguras para instituições com requisitos dados rigorosos',
      future_potential: 'Capacidades IA soberana para ambientes educacionais sensíveis'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'claude-scholar',
    category: 'ai_tool',
    title: 'Claude Scholar',
    description: 'Vertical Anthropic ajustado para artigos acadêmicos.',
    url: 'https://claude.ai/',
    tags: ['Artigos Acadêmicos', 'Anthropic', 'Pesquisa Acadêmica', 'Especializado'],
    cover_url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Assistente IA Acadêmico',
      pricing: 'Assinatura profissional',
      key_features: 'Análise artigos acadêmicos, escrita acadêmica, assistência pesquisa',
      ai_relevance: 'IA especializada para pesquisa acadêmica e comunicação acadêmica',
      future_potential: 'IA acadêmica avançada adaptada para necessidades pesquisa educacional'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },

  // Plataformas educação-primeiro
  {
    id: 'magicschool-ai',
    category: 'ai_tool',
    title: 'MagicSchool AI',
    description: 'Construído por professores para professores, agrupa 60+ fluxos trabalho prompts e políticas dados seguras estudantes.',
    url: 'https://www.magicschool.ai/',
    tags: ['Educação Primeiro', 'Construído Professores', 'Seguro Estudantes', 'Ferramentas Fluxo Trabalho'],
    cover_url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma IA Focada Educação',
      pricing: 'Gratuito para educadores',
      key_features: '60+ fluxos trabalho educacionais, proteção dados estudantes, projetado professores',
      ai_relevance: 'Construído propositalmente para educação com ferramentas ensino abrangentes',
      future_potential: 'Definindo padrão para plataformas IA educação-primeiro'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'google-gemini-education',
    category: 'ai_tool',
    title: 'Google Gemini for Education',
    description: '1000 usos/mês, NoteTaker Meet, protegido privacidade.',
    url: 'https://workspace.google.com/gemini',
    tags: ['Google Educação', 'Protegido Privacidade', 'Notas Reunião', 'Workspace'],
    cover_url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Suíte IA Educacional',
      pricing: 'Nível gratuito para educação',
      key_features: 'Integração Google Workspace, proteção privacidade, transcrição reuniões',
      ai_relevance: 'IA perfeitamente integrada para usuários Google for Education',
      future_potential: 'Ecossistema IA abrangente para instituições educacionais'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'google-ai-studio',
    category: 'ai_tool',
    title: 'Google AI Studio',
    description: 'Playground ajuste parâmetros demonstrado livro para planejamento aulas.',
    url: 'https://aistudio.google.com/',
    tags: ['Ajuste Parâmetros', 'Planejamento Aulas', 'Google', 'Playground IA'],
    cover_url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma Desenvolvimento IA',
      pricing: 'Gratuito com limites uso',
      key_features: 'Personalização modelo, ajuste parâmetros, experimentação educacional',
      ai_relevance: 'Ensinando conceitos IA e personalizando modelos para uso educacional',
      future_potential: 'Capacitando educadores criar soluções IA personalizadas'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'moodle-ai',
    category: 'ai_tool',
    title: 'Moodle with Moodle AI',
    description: 'LMS código aberto agora enviando classificação assistida gen-IA e auto-criação banco-Q.',
    url: 'https://moodle.org/',
    tags: ['LMS', 'Código Aberto', 'Auto Classificação', 'Bancos Questões'],
    cover_url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LMS Melhorado IA',
      pricing: 'Código aberto com opções hospedagem',
      key_features: 'Classificação automatizada, geração questões, analytics aprendizado',
      ai_relevance: 'LMS abrangente com capacidades IA integradas para gestão cursos',
      future_potential: 'O futuro sistemas gestão aprendizado inteligentes'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  },
  {
    id: 'qgis-geoai',
    category: 'ai_tool',
    title: 'QGIS + GeoAI',
    description: 'Adiciona plugins ML espaciais para projetos ambientais ou geografia.',
    url: 'https://www.qgis.org/',
    tags: ['GIS', 'Análise Espacial', 'Geografia', 'Ambiental'],
    cover_url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Plataforma IA Geográfica',
      pricing: 'Gratuito e código aberto',
      key_features: 'Análise espacial, plugins aprendizado máquina, processamento dados geográficos',
      ai_relevance: 'Educação geográfica e ambiental avançada com análise alimentada IA',
      future_potential: 'Combinando IA com educação geográfica para compreensão ambiental'
    },
    created_at: '2024-06-25T10:00:00Z',
    updated_at: '2024-06-25T10:00:00Z'
  }
];

// Categories for organization (Portuguese)
export const aiToolCategoriesPTBR = [
  {
    id: 'general-ai',
    name: 'IA Geral para Conversação e Raciocínio de Contexto Amplo',
    description: 'Assistentes IA líderes para conversas, análise e tarefas raciocínio complexo.',
    icon: '🤖',
    tools: aiToolsDataPTBR.filter(tool => 
      ['chatgpt-gpt4o', 'claude-3-5-sonnet', 'google-gemini-2-5-pro', 'xai-grok-3', 
       'llama-3-405b', 'deepseek-v3', 'qwen-max', 'mistral-large', 'bloom-176b', 
       'falcon-180b', 'stablelm', 'gemma-2', 'phi-3', 'solar-10-7b'].includes(tool.id)
    )
  },
  {
    id: 'coding-tools',
    name: 'Copilotos de Código e Agentes de Desenvolvimento',
    description: 'Ferramentas desenvolvimento alimentadas por IA para programação, depuração e criação software.',
    icon: '💻',
    tools: aiToolsDataPTBR.filter(tool => 
      ['github-copilot', 'windsurf', 'cursor', 'replit-ai', 'bolt-new', 'create-xyz', 
       'tempo-labs', 'v0-vercel', 'codeium', 'junie-ai', 'jules-google', 'lovable', 'base44'].includes(tool.id)
    )
  },
  {
    id: 'creative-media',
    name: 'Geração de Mídia Criativa',
    description: 'Ferramentas IA para criar imagens, vídeos, áudio e conteúdo multimídia educacional.',
    icon: '🎨',
    tools: aiToolsDataPTBR.filter(tool => 
      ['dalle-3', 'midjourney', 'stable-diffusion-xl', 'leonardo-ai', 'ideogram', 'adobe-firefly', 
       'canva-magic', 'unity-muse', 'runway-ml', 'synthesia', 'elevenlabs', 'google-veo-3', 'hailuo-ai'].includes(tool.id)
    )
  },
  {
    id: 'research-tools',
    name: 'Pesquisa Acadêmica e Manipulação de Dados',
    description: 'Ferramentas pesquisa alimentadas por IA para trabalho acadêmico, revisões literatura e análise dados.',
    icon: '📊',
    tools: aiToolsDataPTBR.filter(tool => 
      ['perplexity-ai', 'consensus', 'elicit', 'scispace', 'notebooklm', 'wolfram-alpha', 
       'ibm-watson-x', 'oracle-ai', 'claude-scholar'].includes(tool.id)
    )
  },
  {
    id: 'education-first',
    name: 'Plataformas Educação-Primeiro',
    description: 'Plataformas IA especificamente projetadas para instituições educacionais e professores.',
    icon: '🎓',
    tools: aiToolsDataPTBR.filter(tool => 
      ['magicschool-ai', 'google-gemini-education', 'google-ai-studio', 'moodle-ai', 'qgis-geoai'].includes(tool.id)
    )
  }
];