import { Resource } from '../lib/supabase';

// Base de Dados de Ferramentas de IA do livro "AI Teacher Pro"
// Atualizado: Fevereiro 2026
export const aiToolsDataPTBR: Resource[] = [
  // Chat / Raciocínio geral
  {
    id: 'chatgpt-gpt5',
    category: 'ai_tool',
    title: 'ChatGPT (GPT-5)',
    description: 'Modelo principal da OpenAI com raciocínio avançado, suporte multimodal nativo e contexto de 1M de tokens. O GPT-5 oferece desempenho de ponta em codificação, análise e tarefas criativas. A variante GPT-5.3-Codex se destaca em engenharia de software.',
    url: 'https://chat.openai.com/',
    tags: ['IA Geral', 'Multimodal', 'Contexto Longo', 'OpenAI', 'Raciocínio'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Gratuito + Plus $20/mês + Pro $200/mês',
      key_features: 'Raciocínio profundo, compreensão de imagem/áudio/vídeo, execução de código, upload de arquivos, navegação web, contexto de 1M',
      ai_relevance: 'Assistente de IA principal para planejamento de aulas, criação de conteúdo, pesquisa e apoio ao aluno',
      future_potential: 'Atualizações contínuas com capacidades agênticas expandidas'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'claude-opus-4-6',
    category: 'ai_tool',
    title: 'Claude Opus 4.6',
    description: 'Modelo mais capaz da Anthropic, lançado em 5 de fev. 2026. Apresenta equipes de agentes para fluxos de trabalho complexos, pensamento estendido para raciocínio profundo e segurança de primeira classe. Excelente em análise, codificação e conteúdo educacional.',
    url: 'https://claude.ai/',
    tags: ['IA Geral', 'Segurança', 'Raciocínio', 'Anthropic', 'Educação'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Gratuito + Pro $20/mês + Team $30/mês',
      key_features: 'Equipes de agentes, pensamento estendido, contexto de 200K, uso de ferramentas, visão, análise profunda',
      ai_relevance: 'Excelente para desenvolvimento curricular, feedback detalhado, síntese de pesquisa e interações seguras com alunos',
      future_potential: 'IA agêntica líder com execução autônoma de tarefas em múltiplas etapas'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'google-gemini-3-pro',
    category: 'ai_tool',
    title: 'Google Gemini 3 Pro',
    description: 'Última geração Gemini 3 do Google com compreensão multimodal nativa de texto, imagens, áudio e vídeo. Integração profunda com Google Workspace, ideal para fluxos educacionais.',
    url: 'https://gemini.google.com/',
    tags: ['IA Geral', 'Multimodal', 'Google', 'Educação', 'Workspace'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Gratuito + Google One AI Premium $19,99/mês',
      key_features: 'Multimodal nativo, integração Google Workspace, contexto de 2M, Deep Research, Gems, informações em tempo real',
      ai_relevance: 'Integração perfeita com Google Classroom, Docs e Slides para educadores',
      future_potential: 'Expandindo capacidades agênticas com Project Astra e Mariner'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'llama4-maverick',
    category: 'ai_tool',
    title: 'Llama 4 Maverick',
    description: 'Modelo de código aberto da Meta com Mistura de Especialistas (128 experts), janela de contexto de 10M de tokens e capacidades multimodais nativas. Pode ser implantado localmente ou na nuvem.',
    url: 'https://llama.meta.com/',
    tags: ['Código Aberto', 'Contexto Longo', 'Meta', 'MoE', 'Multimodal'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM de Código Aberto',
      pricing: 'Gratuito (código aberto) / API via provedores',
      key_features: '128 especialistas MoE, contexto de 10M, multimodal, multilíngue, implantação local',
      ai_relevance: 'Ideal para escolas que buscam privacidade de dados através de implantação local e personalização',
      future_potential: 'Llama 4 Behemoth (2T parâmetros) em breve para tarefas de fronteira'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'deepseek-v3-2',
    category: 'ai_tool',
    title: 'DeepSeek-V3.2 / R2',
    description: 'Modelo V3.2 mais recente da DeepSeek com desempenho de fronteira a custo dramaticamente menor. Variante R2 especializada em raciocínio matemático e científico. V4 esperado para meados de fevereiro 2026.',
    url: 'https://chat.deepseek.com/',
    tags: ['IA Geral', 'Raciocínio', 'Custo-Efetivo', 'Código Aberto', 'STEM'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA de Raciocínio',
      pricing: 'Gratuito + preços de API (muito competitivos)',
      key_features: 'Raciocínio avançado, especialização em matemática/ciências, arquitetura MoE, custo-eficiente',
      ai_relevance: 'Excelente para educação STEM, tutoria de matemática e resolução de problemas científicos a baixo custo',
      future_potential: 'Lançamento V4 iminente com grandes melhorias'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'qwen3-235b',
    category: 'ai_tool',
    title: 'Qwen 3 (235B)',
    description: 'Modelo principal da Alibaba Cloud com 235B parâmetros, suportando 119 idiomas com modos de pensamento híbrido. Qwen3-Coder-Next se destaca em desenvolvimento de software.',
    url: 'https://qwen.ai/',
    tags: ['IA Geral', 'Multilíngue', 'Código Aberto', 'Codificação', 'Alibaba'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Multilíngue',
      pricing: 'Gratuito (código aberto) / API disponível',
      key_features: '119 idiomas, pensamento híbrido, 235B parâmetros, Qwen3-Coder-Next, raciocínio forte',
      ai_relevance: 'Excepcional para educação multilíngue e ambientes escolares internacionais',
      future_potential: 'Ecossistema em rápida expansão com variantes especializadas para educação'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'phi-4',
    category: 'ai_tool',
    title: 'Microsoft Phi-4',
    description: 'Modelo compacto da Microsoft com 14B parâmetros alcançando desempenho de classe GPT-4 em matemática e raciocínio STEM. Projetado para eficiência, roda em hardware modesto.',
    url: 'https://azure.microsoft.com/en-us/products/phi/',
    tags: ['Modelo Compacto', 'STEM', 'Microsoft', 'Eficiente', 'Educação'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Modelo Compacto de IA',
      pricing: 'Gratuito (código aberto) / API Azure',
      key_features: '14B parâmetros, matemática/STEM classe GPT-4, inferência eficiente, implantação local',
      ai_relevance: 'Perfeito para escolas com recursos limitados que precisam de tutoria STEM de alta qualidade',
      future_potential: 'Demonstra que modelos pequenos podem rivalizar com maiores para tarefas educacionais específicas'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'gemma-3',
    category: 'ai_tool',
    title: 'Google Gemma 3',
    description: 'Família de modelos leves do Google de 1B a 27B parâmetros. Multimodal com contexto de 128K, projetado para implantação em dispositivos e edge. Excelente para apps educacionais e IA local.',
    url: 'https://ai.google.dev/gemma',
    tags: ['Código Aberto', 'Modelo Compacto', 'Google', 'Edge AI', 'Multimodal'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'LLM de Código Aberto',
      pricing: 'Gratuito (código aberto)',
      key_features: 'Faixa 1B-27B, multimodal, contexto de 128K, capaz de rodar em dispositivo, eficiente, suporte a visão',
      ai_relevance: 'Ideal para construir ferramentas educacionais com privacidade que rodam localmente nos dispositivos da escola',
      future_potential: 'Ecossistema crescente de variantes ajustadas para educação'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'xai-grok-4-2',
    category: 'ai_tool',
    title: 'xAI Grok 3 / Grok 4.2',
    description: 'Modelos mais recentes da xAI com Grok 4.2 sendo lançado em fevereiro 2026. Integração em tempo real com X (Twitter), raciocínio forte e DeepSearch. Grok 5 esperado para Q1 2026.',
    url: 'https://x.ai/',
    tags: ['IA Geral', 'Tempo Real', 'xAI', 'Mídias Sociais', 'Raciocínio'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Conversacional',
      pricing: 'Assinatura X Premium+ / Acesso API',
      key_features: 'Integração X em tempo real, DeepSearch, geração de imagens, raciocínio forte, modo humor',
      ai_relevance: 'Útil para análise de eventos atuais em tempo real e educação em letramento de mídias sociais',
      future_potential: 'Grok 5 esperado com escalonamento massivo de computação no Q1 2026'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'mistral-large-3',
    category: 'ai_tool',
    title: 'Mistral Large 3',
    description: 'Modelo principal da Mistral AI com 41B parâmetros ativos (675B total MoE) e contexto de 256K. Forte capacidade multilíngue e liderança europeia em IA.',
    url: 'https://mistral.ai/',
    tags: ['IA Geral', 'Europeu', 'Multilíngue', 'Enterprise', 'MoE'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Empresarial',
      pricing: 'Gratuito (Le Chat) + preços de API',
      key_features: '41B ativos / 675B total, contexto de 256K, multilíngue forte, codificação, fluxos agênticos',
      ai_relevance: 'Opção líder de IA europeia com forte soberania de dados para escolas da UE',
      future_potential: 'Expandindo plataforma Le Chat com capacidades de agente'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Novas entradas
  {
    id: 'amazon-nova-pro',
    category: 'ai_tool',
    title: 'Amazon Nova Pro',
    description: 'Modelo multimodal principal da Amazon com contexto de 300K, até 75% mais barato que concorrentes. Disponível através do Amazon Bedrock com forte integração empresarial e conformidade.',
    url: 'https://aws.amazon.com/bedrock/nova/',
    tags: ['IA Geral', 'Multimodal', 'Amazon', 'Enterprise', 'Custo-Efetivo'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA Multimodal',
      pricing: 'Pagamento por uso via AWS Bedrock (75% mais barato)',
      key_features: 'Contexto de 300K, multimodal (texto/imagem/vídeo), nível empresarial, integração AWS',
      ai_relevance: 'Opção custo-efetiva para escolas que já usam AWS com recursos de conformidade',
      future_potential: 'Aprofundando integração com ecossistema educacional da AWS'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'ai21-jamba-large',
    category: 'ai_tool',
    title: 'AI21 Jamba 1.5 Large',
    description: 'Arquitetura híbrida SSM-Transformer com 94B ativos / 398B total e contexto de 256K. Combina eficiência de modelos de espaço de estado com qualidade Transformer.',
    url: 'https://www.ai21.com/jamba',
    tags: ['IA Geral', 'Contexto Longo', 'Arquitetura Híbrida', 'AI21', 'Enterprise'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Modelo Híbrido de IA',
      pricing: 'Acesso API com teste gratuito',
      key_features: 'SSM-Transformer híbrido, contexto de 256K, 94B/398B parâmetros, processamento eficiente de documentos longos',
      ai_relevance: 'Excelente para processar materiais educacionais extensos, livros didáticos e artigos de pesquisa',
      future_potential: 'Arquitetura inovadora avançando a fronteira de eficiência para IA na educação'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'cohere-command-r-plus',
    category: 'ai_tool',
    title: 'Cohere Command R+',
    description: 'Modelo empresarial de 104B com RAG de melhor classe com citações inline. Contexto de 128K com forte suporte multilíngue em mais de 10 idiomas.',
    url: 'https://cohere.com/',
    tags: ['Enterprise', 'RAG', 'Citações', 'Cohere', 'Multilíngue'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA RAG Empresarial',
      pricing: 'Acesso API com teste gratuito + planos empresariais',
      key_features: '104B parâmetros, RAG empresarial com citações, contexto de 128K, multilíngue, geração fundamentada',
      ai_relevance: 'Perfeito para construir conteúdo educacional com citações e ferramentas de pesquisa',
      future_potential: 'Pioneira em geração fundamentada de IA com fontes verificáveis'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Geração de imagens
  {
    id: 'midjourney-v7',
    category: 'ai_tool',
    title: 'Midjourney',
    description: 'Líder em geração de imagens por IA produzindo visuais impressionantes a partir de texto. Amplamente usado para criação de conteúdo educacional, ilustração e materiais visuais de aprendizagem.',
    url: 'https://www.midjourney.com/',
    tags: ['Geração de Imagens', 'Criativo', 'Arte', 'Aprendizado Visual'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Geração de Imagens',
      pricing: 'A partir de $10/mês (Básico) até $120/mês (Mega)',
      key_features: 'Imagens fotorrealistas, estilos artísticos, prompts de texto, controle de variação, upscaling',
      ai_relevance: 'Criação de ilustrações educacionais, auxílios visuais e materiais de aprendizagem envolventes',
      future_potential: 'Expandindo para geração de vídeo e 3D'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Áudio / Fala
  {
    id: 'elevenlabs',
    category: 'ai_tool',
    title: 'ElevenLabs',
    description: 'Líder em síntese de voz por IA com texto para fala ultra-realista em mais de 29 idiomas. Ideal para audiolivros, aulas narradas e conteúdo educacional acessível.',
    url: 'https://elevenlabs.io/',
    tags: ['Áudio', 'Texto para Fala', 'Acessibilidade', 'Idiomas'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA de Voz',
      pricing: 'Gratuito + A partir de $5/mês',
      key_features: 'Vozes ultra-realistas, 29+ idiomas, clonagem de voz, tradução de áudio, streaming em tempo real',
      ai_relevance: 'Tornando conteúdo educacional acessível através de narração de alta qualidade e suporte multilíngue',
      future_potential: 'IA de conversação em tempo real e suporte expandido a idiomas'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Assistentes de codificação
  {
    id: 'github-copilot',
    category: 'ai_tool',
    title: 'GitHub Copilot',
    description: 'Assistente de codificação com IA integrado em IDEs populares. Usa modelos GPT-5 e Claude para sugestões inteligentes de código, geração de documentação e assistência em depuração.',
    url: 'https://github.com/features/copilot',
    tags: ['Codificação', 'GitHub', 'IDE', 'Educação', 'Ferramentas de Desenvolvedor'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Assistente de Codificação',
      pricing: 'Gratuito para estudantes + $10/mês Individual + $19/mês Business',
      key_features: 'Multi-modelo (GPT-5, Claude), sugestões inline, chat, CLI, edição multi-arquivo, agente workspace',
      ai_relevance: 'Gratuito para estudantes, ensino de conceitos de programação e aceleração de projetos de educação em CS',
      future_potential: 'Expandindo codificação agêntica com conclusão autônoma de tarefas'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Geração de vídeo
  {
    id: 'sora',
    category: 'ai_tool',
    title: 'OpenAI Sora',
    description: 'Modelo de texto para vídeo da OpenAI criando vídeos realistas a partir de texto. Revolucionário para criação de conteúdo educacional em vídeo, simulações e explicações visuais.',
    url: 'https://openai.com/sora',
    tags: ['Geração de Vídeo', 'OpenAI', 'Criativo', 'Educação'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Geração de Vídeo',
      pricing: 'Incluído no ChatGPT Pro / Acesso API',
      key_features: 'Texto para vídeo, movimento realista, compreensão de cena, vídeos de até 1 minuto',
      ai_relevance: 'Criação de vídeos educacionais envolventes, recriações históricas e visualizações científicas',
      future_potential: 'Vídeos mais longos, melhor consistência e conteúdo educacional interativo'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Pesquisa
  {
    id: 'perplexity-ai',
    category: 'ai_tool',
    title: 'Perplexity AI',
    description: 'Motor de busca com IA fornecendo respostas com fontes citadas. Ideal para pesquisa, verificação de fatos e investigação acadêmica com acesso web em tempo real.',
    url: 'https://www.perplexity.ai/',
    tags: ['Busca', 'Pesquisa', 'Citações', 'Educação', 'Tempo Real'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Busca com IA',
      pricing: 'Gratuito + Pro $20/mês',
      key_features: 'Respostas com citações, busca web em tempo real, foco acadêmico, perguntas de acompanhamento, coleções',
      ai_relevance: 'Ensinando habilidades de pesquisa e fornecendo informações citadas e verificáveis para trabalhos acadêmicos',
      future_potential: 'Expandindo para pesquisa colaborativa e integração acadêmica mais profunda'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Apresentações e produtividade
  {
    id: 'gamma-ai',
    category: 'ai_tool',
    title: 'Gamma AI',
    description: 'Criador de apresentações e documentos com IA gerando slides, documentos e páginas web profissionais a partir de prompts. Perfeito para professores criarem materiais de aula rapidamente.',
    url: 'https://gamma.app/',
    tags: ['Apresentações', 'Produtividade', 'Educação', 'Design'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA de Apresentações',
      pricing: 'Gratuito + Plus $8/mês + Pro $15/mês',
      key_features: 'Apresentações IA, documentos, páginas web, temas personalizados, análises, colaboração',
      ai_relevance: 'Criação rápida de apresentações profissionais para aulas e materiais educacionais',
      future_potential: 'Integração mais profunda de IA para conteúdo educacional adaptativo'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  // Específicos para educação
  {
    id: 'khan-academy-khanmigo',
    category: 'ai_tool',
    title: 'Khanmigo (Khan Academy)',
    description: 'Assistente de tutoria com IA para Khan Academy. Tutoria personalizada, questionamento socrático e caminhos de aprendizagem adaptativos em matemática, ciências e mais.',
    url: 'https://www.khanacademy.org/khan-labs',
    tags: ['Educação', 'Tutoria', 'Aprendizado Adaptativo', 'K-12', 'Matemática'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Tutor de IA',
      pricing: 'Gratuito para professores / $44/ano para alunos',
      key_features: 'Tutoria socrática, orientação passo a passo, acompanhamento de progresso, painel do professor, seguro para alunos',
      ai_relevance: 'Tutor de IA construído com melhores práticas pedagógicas e segurança do aluno integrada',
      future_potential: 'Expandindo disciplinas e personalização mais profunda'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'quillbot',
    category: 'ai_tool',
    title: 'QuillBot',
    description: 'Assistente de escrita com IA oferecendo paráfrase, verificação gramatical, sumarização e geração de citações. Amplamente usado na educação para melhorar habilidades de escrita dos alunos.',
    url: 'https://quillbot.com/',
    tags: ['Escrita', 'Gramática', 'Paráfrase', 'Educação', 'Acadêmico'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'Assistente de Escrita',
      pricing: 'Gratuito + Premium $9,95/mês',
      key_features: 'Parafraseador, verificador gramatical, resumidor, gerador de citações, verificador de plágio',
      ai_relevance: 'Ajudando alunos a melhorar a qualidade da escrita mantendo a integridade acadêmica',
      future_potential: 'Coaching e feedback de escrita com IA'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  },
  {
    id: 'notebooklm',
    category: 'ai_tool',
    title: 'Google NotebookLM',
    description: 'Ferramenta de pesquisa e anotações do Google com IA gerando insights a partir de documentos carregados. Cria resumos em áudio, guias de estudo e Q&A de materiais fonte.',
    url: 'https://notebooklm.google.com/',
    tags: ['Pesquisa', 'Notas', 'Google', 'Educação', 'Estudo'],
    cover_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    provider_meta: {
      type: 'IA de Pesquisa',
      pricing: 'Gratuito com conta Google',
      key_features: 'Análise de documentos, resumos em áudio, guias de estudo, geração de Q&A, fundamentado em fontes',
      ai_relevance: 'Transformar materiais do curso em recursos de estudo interativos e conteúdo em áudio',
      future_potential: 'Expandindo tipos de fonte e recursos colaborativos'
    },
    created_at: '2026-02-07T10:00:00Z',
    updated_at: '2026-02-07T10:00:00Z'
  }
];

// Categorias de ferramentas de IA para filtragem
export const aiToolCategoriesPTBR = [
  {
    id: 'all',
    label: 'Todas as Ferramentas de IA',
    tools: aiToolsDataPTBR.map(t => t.id)
  },
  {
    id: 'chat',
    label: 'Chat e Raciocínio',
    tools: ['chatgpt-gpt5', 'claude-opus-4-6', 'google-gemini-3-pro', 'deepseek-v3-2', 'qwen3-235b', 'xai-grok-4-2', 'mistral-large-3']
  },
  {
    id: 'open-source',
    label: 'Código Aberto',
    tools: ['llama4-maverick', 'deepseek-v3-2', 'qwen3-235b', 'phi-4', 'gemma-3']
  },
  {
    id: 'image-video',
    label: 'Imagem e Vídeo',
    tools: ['midjourney-v7', 'sora']
  },
  {
    id: 'education',
    label: 'Específicos para Educação',
    tools: ['khan-academy-khanmigo', 'quillbot', 'notebooklm', 'gamma-ai']
  },
  {
    id: 'coding',
    label: 'Codificação e Desenvolvimento',
    tools: ['github-copilot']
  },
  {
    id: 'enterprise',
    label: 'Empresarial e RAG',
    tools: ['amazon-nova-pro', 'ai21-jamba-large', 'cohere-command-r-plus', 'mistral-large-3']
  },
  {
    id: 'audio',
    label: 'Áudio e Fala',
    tools: ['elevenlabs']
  },
  {
    id: 'research',
    label: 'Pesquisa e Busca',
    tools: ['perplexity-ai', 'notebooklm']
  }
];
