export interface Course {
  id: string;
  title: string;
  titlePT: string;
  provider: string;
  platform: string;
  description: string;
  descriptionPT: string;
  duration: string;
  durationPT: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  cost: string;
  costPT: string;
  link: string;
  category: 'university' | 'tech-giant' | 'education-platform' | 'organization' | 'open-source';
  features: string[];
  featuresPT: string[];
  language: 'en' | 'pt' | 'both';
}

export const courses: Course[] = [
  // University & Major Platform Courses
  {
    id: 'wharton-ai-education',
    title: 'AI in Education: Leveraging ChatGPT for Teaching',
    titlePT: 'IA na Educação: Aproveitando o ChatGPT para Ensinar',
    provider: 'Wharton School, University of Pennsylvania',
    platform: 'Coursera',
    description: 'Taught by renowned AI education experts Ethan and Lilach Mollick, this practical course demystifies generative AI for educators. Learn to effectively incorporate tools like ChatGPT into teaching to save time, increase student engagement, and create personalized learning experiences.',
    descriptionPT: 'Ministrado pelos renomados especialistas em educação com IA, Ethan e Lilach Mollick, este curso prático desmistifica a IA generativa para educadores. Aprenda a incorporar efetivamente ferramentas como o ChatGPT no ensino para economizar tempo, aumentar o engajamento dos alunos e criar experiências de aprendizagem personalizadas.',
    duration: '6-8 hours, self-paced',
    durationPT: '6-8 horas, ritmo próprio',
    level: 'beginner',
    cost: 'Free to audit, paid certificate',
    costPT: 'Gratuito para assistir, certificado pago',
    link: 'https://www.coursera.org/learn/ai-in-education',
    category: 'university',
    features: [
      '4 modules with short video lectures',
      'Prompt engineering techniques',
      'Lesson design with AI',
      'Ethical considerations'
    ],
    featuresPT: [
      '4 módulos com videoaulas curtas',
      'Técnicas de engenharia de prompts',
      'Design de aulas com IA',
      'Considerações éticas'
    ],
    language: 'en'
  },
  {
    id: 'vanderbilt-generative-ai',
    title: 'Generative AI for Educators Specialization',
    titlePT: 'Especialização em IA Generativa para Educadores',
    provider: 'Vanderbilt University',
    platform: 'Coursera',
    description: 'A comprehensive 4-course specialization teaching educators to master generative AI tools. Focus on leveraging ChatGPT and GPT-4 Vision to create personalized learning experiences, generate practical lesson plans, create interactive educational games, and explore innovative teaching strategies.',
    descriptionPT: 'Uma especialização abrangente de 4 cursos que ensina educadores a dominar ferramentas de IA generativa. Foco em aproveitar o ChatGPT e GPT-4 Vision para criar experiências de aprendizagem personalizadas, gerar planos de aula práticos, criar jogos educacionais interativos e explorar estratégias de ensino inovadoras.',
    duration: '3 months (2 hours/week)',
    durationPT: '3 meses (2 horas/semana)',
    level: 'intermediate',
    cost: 'Free to audit, paid certificate',
    costPT: 'Gratuito para assistir, certificado pago',
    link: 'https://www.coursera.org/specializations/generative-ai-for-educators',
    category: 'university',
    features: [
      '4 sequential courses',
      'Hands-on projects',
      'Capstone project',
      'Creative problem-solving focus'
    ],
    featuresPT: [
      '4 cursos sequenciais',
      'Projetos práticos',
      'Projeto final (Capstone)',
      'Foco em resolução criativa de problemas'
    ],
    language: 'en'
  },
  {
    id: 'macquarie-ai-teachers',
    title: 'Artificial Intelligence (AI) Education for Teachers',
    titlePT: 'Educação em Inteligência Artificial (IA) para Professores',
    provider: 'Macquarie University & IBM',
    platform: 'Coursera',
    description: 'Designed "by teachers, for teachers", this course covers fundamental AI concepts, how it works, and how it can be integrated into school curricula. Covers machine learning, algorithms, and AI applications across industries, with significant focus on pedagogy, ethics, and alignment with teaching standards.',
    descriptionPT: 'Projetado "por professores, para professores", este curso aborda conceitos fundamentais de IA, como funciona e como pode ser integrada ao currículo escolar. Cobre aprendizado de máquina, algoritmos e aplicações de IA em diversas indústrias, com foco significativo em pedagogia, ética e alinhamento com padrões de ensino.',
    duration: '4-6 weeks (~20 hours total)',
    durationPT: '4-6 semanas (~20 horas no total)',
    level: 'beginner',
    cost: 'Free to audit, paid certificate',
    costPT: 'Gratuito para assistir, certificado pago',
    link: 'https://www.coursera.org/learn/artificial-intelligence-education-for-teachers',
    category: 'university',
    features: [
      '6 modules with videos and readings',
      'Machine learning fundamentals',
      'Ethics focus (fairness, bias, privacy)',
      'Optional final project'
    ],
    featuresPT: [
      '6 módulos com vídeos e leituras',
      'Fundamentos de aprendizado de máquina',
      'Foco em ética (justiça, viés, privacidade)',
      'Projeto final opcional'
    ],
    language: 'en'
  },
  {
    id: 'kings-college-ai-higher-ed',
    title: 'Generative AI in Higher Education',
    titlePT: 'IA Generativa no Ensino Superior',
    provider: 'King\'s College London',
    platform: 'FutureLearn',
    description: 'A practical and thought-provoking course exploring how AI is reshaping education and how teachers can respond with discernment and creativity. Focused on specific challenges of higher education, investigating benefits and risks of AI, ethical dilemmas, and impact on teaching and assessment roles.',
    descriptionPT: 'Um curso prático e instigante que explora como a IA está remodelando a educação e como os professores podem responder com discernimento e criatividade. Focado nos desafios específicos do ensino superior, investigando benefícios e riscos da IA, dilemas éticos e impacto nas funções de ensino e avaliação.',
    duration: '3 weeks (4 hours/week)',
    durationPT: '3 semanas (4 horas/semana)',
    level: 'intermediate',
    cost: 'Free during active period, paid for unlimited access',
    costPT: 'Gratuito durante período ativo, pago para acesso ilimitado',
    link: 'https://www.futurelearn.com/courses/generative-ai-higher-education',
    category: 'university',
    features: [
      '3-week online course',
      'Activities and discussions',
      'Higher education focus',
      'Ethical considerations'
    ],
    featuresPT: [
      'Curso online de 3 semanas',
      'Atividades e discussões',
      'Foco no ensino superior',
      'Considerações éticas'
    ],
    language: 'en'
  },
  {
    id: 'tiffin-prompt-engineering',
    title: 'Prompt Engineering for Educators Certification',
    titlePT: 'Certificação em Engenharia de Prompts para Educadores',
    provider: 'Tiffin University',
    platform: 'Tiffin University',
    description: 'A certification focused specifically on prompt engineering for educators. Covers fundamental concepts and practical applications, teaching participants to create effective prompts, optimize AI interactions, and use controlled generation techniques to adapt AI responses to specific educational objectives.',
    descriptionPT: 'Uma certificação focada especificamente em engenharia de prompts para educadores. Abrange conceitos fundamentais e aplicações práticas, ensinando os participantes a criar prompts eficazes, otimizar interações com IA e usar técnicas de geração controlada para adaptar respostas de IA a objetivos educacionais específicos.',
    duration: '4 weeks',
    durationPT: '4 semanas',
    level: 'intermediate',
    cost: 'Paid',
    costPT: 'Pago',
    link: 'https://www.tiffin.edu/academics/school-of-arts-sciences/prompt-engineering',
    category: 'university',
    features: [
      'Certification program',
      'Prompt optimization techniques',
      'Controlled generation methods',
      'Educational applications focus'
    ],
    featuresPT: [
      'Programa de certificação',
      'Técnicas de otimização de prompts',
      'Métodos de geração controlada',
      'Foco em aplicações educacionais'
    ],
    language: 'en'
  },

  // Tech Giant Courses
  {
    id: 'microsoft-ai-educators',
    title: 'AI for Educators Learning Path',
    titlePT: 'Trilha de Aprendizagem de IA para Educadores',
    provider: 'Microsoft',
    platform: 'Microsoft Learn',
    description: 'An introductory learning path on AI in education. Covers AI history, LLMs, generative AI, prompt engineering, and responsible AI use. Emphasizes how tools like Microsoft Copilot, Designer, Edge, Word, and PowerPoint can enhance teaching.',
    descriptionPT: 'Uma trilha de aprendizagem introdutória sobre IA na educação. Cobre história da IA, LLMs, IA generativa, engenharia de prompts e uso responsável de IA. Enfatiza como ferramentas como Microsoft Copilot, Designer, Edge, Word e PowerPoint podem aprimorar o ensino.',
    duration: '4-6 hours',
    durationPT: '4-6 horas',
    level: 'beginner',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://learn.microsoft.com/training/paths/ai-for-educators/',
    category: 'tech-giant',
    features: [
      '4 self-paced modules',
      'K-12 and Higher Ed focus',
      'Microsoft tools integration',
      'Responsible AI emphasis'
    ],
    featuresPT: [
      '4 módulos em ritmo próprio',
      'Foco em Ensino Fundamental/Médio e Superior',
      'Integração com ferramentas Microsoft',
      'Ênfase em IA responsável'
    ],
    language: 'en'
  },
  {
    id: 'google-ai-educators',
    title: 'Generative AI for Educators',
    titlePT: 'IA Generativa para Educadores',
    provider: 'Google & MIT',
    platform: 'Grow with Google',
    description: 'A course for teachers to learn how generative AI (like Gemini) can save time, personalize teaching, and boost creativity. Covers core concepts, hands-on practice with AI tools, prompt creation, and integration strategies while maintaining ethics and academic integrity.',
    descriptionPT: 'Um curso para professores aprenderem como a IA generativa (como Gemini) pode economizar tempo, personalizar o ensino e aumentar a criatividade. Cobre conceitos centrais, prática com ferramentas de IA, criação de prompts e estratégias de integração mantendo ética e integridade acadêmica.',
    duration: '~2 hours',
    durationPT: '~2 horas',
    level: 'beginner',
    cost: 'Free (certificate included)',
    costPT: 'Gratuito (certificado incluído)',
    link: 'https://grow.google/ai-for-educators/',
    category: 'tech-giant',
    features: [
      'Self-paced interactive lessons',
      'Elementary and secondary focus',
      'Hands-on examples',
      'Free certificate'
    ],
    featuresPT: [
      'Aulas interativas em ritmo próprio',
      'Foco no ensino fundamental e médio',
      'Exemplos práticos',
      'Certificado gratuito'
    ],
    language: 'en'
  },
  {
    id: 'ibm-ai-foundations',
    title: 'AI Foundations for Educators',
    titlePT: 'Fundamentos de IA para Educadores',
    provider: 'IBM',
    platform: 'IBM SkillsBuild',
    description: 'A comprehensive online learning set for K-12 educators. Covers fundamental AI concepts, machine learning, NLP, robotics, data bias, and ethics, always connecting concepts to practical classroom applications. Goal is to make educators fluent and confident in AI.',
    descriptionPT: 'Um conjunto abrangente de aprendizado online para educadores K-12. Cobre conceitos fundamentais de IA, aprendizado de máquina, PLN, robótica, viés de dados e ética, sempre conectando conceitos a aplicações práticas em sala de aula. O objetivo é tornar educadores fluentes e confiantes em IA.',
    duration: '~14 hours total',
    durationPT: '~14 horas no total',
    level: 'beginner',
    cost: 'Free (IBM digital badge included)',
    costPT: 'Gratuito (badge digital IBM incluído)',
    link: 'https://skillsbuild.org/teachers',
    category: 'tech-giant',
    features: [
      '9 on-demand webinar modules',
      'Real-world examples',
      'IBM digital badge',
      'K-12 educator focus'
    ],
    featuresPT: [
      '9 módulos de webinar sob demanda',
      'Exemplos do mundo real',
      'Badge digital IBM',
      'Foco em educadores K-12'
    ],
    language: 'en'
  },
  {
    id: 'anthropic-ai-fluency',
    title: 'AI Fluency: Frameworks and Foundations',
    titlePT: 'Fluência em IA: Frameworks e Fundamentos',
    provider: 'Anthropic',
    platform: 'Anthropic Academy',
    description: 'A course to develop fluency in safe and effective AI use. Introduces a framework for conscious AI interaction, teaching competencies of Delegation, Description, Discernment, and Diligence. Highly relevant for educators using tools like Claude.',
    descriptionPT: 'Um curso para desenvolver fluência no uso seguro e eficaz de IA. Introduz um framework para interação consciente com IA, ensinando competências de Delegação, Descrição, Discernimento e Diligência. Altamente relevante para educadores que usam ferramentas como Claude.',
    duration: 'Few hours (short modules)',
    durationPT: 'Algumas horas (módulos curtos)',
    level: 'beginner',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://academy.anthropic.com/courses/ai-fluency',
    category: 'tech-giant',
    features: [
      'Self-paced modules',
      'Interactive exercises',
      'Safety-focused framework',
      'Practical AI interaction skills'
    ],
    featuresPT: [
      'Módulos em ritmo próprio',
      'Exercícios interativos',
      'Framework focado em segurança',
      'Habilidades práticas de interação com IA'
    ],
    language: 'en'
  },
  {
    id: 'claude-education',
    title: 'Claude for Education',
    titlePT: 'Claude para Educação',
    provider: 'Anthropic',
    platform: 'Anthropic',
    description: 'A specialized version of Claude AI assistant adapted for higher education institutions. Includes "Learning Mode" that guides student reasoning instead of giving direct answers, helping develop critical thinking. Allows teachers to create rubrics, provide individualized feedback, and generate content with varying difficulty levels.',
    descriptionPT: 'Uma versão especializada do assistente de IA Claude, adaptada para instituições de ensino superior. Inclui "Modo de Aprendizagem" que guia o raciocínio dos alunos em vez de dar respostas diretas, ajudando a desenvolver pensamento crítico. Permite que professores criem rubricas, forneçam feedback individualizado e gerem conteúdo com diferentes níveis de dificuldade.',
    duration: 'Self-paced implementation',
    durationPT: 'Implementação em ritmo próprio',
    level: 'intermediate',
    cost: 'Institutional pricing (education discount)',
    costPT: 'Preços institucionais (desconto educacional)',
    link: 'https://www.anthropic.com/education',
    category: 'tech-giant',
    features: [
      'Learning Mode for guided reasoning',
      'Rubric creation tools',
      'Individualized feedback generation',
      'Variable difficulty content'
    ],
    featuresPT: [
      'Modo de Aprendizagem para raciocínio guiado',
      'Ferramentas de criação de rubricas',
      'Geração de feedback individualizado',
      'Conteúdo com dificuldade variável'
    ],
    language: 'both'
  },

  // Education Platform Courses
  {
    id: 'openai-chatgpt-k12',
    title: 'ChatGPT Foundations for K-12 Educators',
    titlePT: 'Fundamentos do ChatGPT para Educadores K-12',
    provider: 'OpenAI & Common Sense',
    platform: 'OpenAI Academy',
    description: 'A free online course introducing AI fundamentals, generative AI, and ChatGPT, with focus on practical classroom applications and responsible use. "Demystifies" AI and covers prompt techniques, lesson planning, and ethical considerations.',
    descriptionPT: 'Um curso online gratuito que introduz fundamentos de IA, IA generativa e ChatGPT, com foco em aplicações práticas em sala de aula e uso responsável. "Desmistifica" a IA e cobre técnicas de prompt, planejamento de aulas e considerações éticas.',
    duration: '~1 hour',
    durationPT: '~1 hora',
    level: 'beginner',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://openai.com/index/introducing-chatgpt-edu/',
    category: 'education-platform',
    features: [
      '6 short self-paced modules',
      'K-12 educator focus',
      'Practical applications',
      'Responsible use emphasis'
    ],
    featuresPT: [
      '6 módulos curtos em ritmo próprio',
      'Foco em educadores K-12',
      'Aplicações práticas',
      'Ênfase em uso responsável'
    ],
    language: 'en'
  },
  {
    id: 'magicschool-certification',
    title: 'MagicSchool AI Educator Certification',
    titlePT: 'Certificação de Educador MagicSchool AI',
    provider: 'MagicSchool.ai',
    platform: 'MagicSchool.ai',
    description: 'Free certification courses for teachers to learn to leverage 80+ AI tools on the platform. The 4-level program progresses from basic navigation to advanced custom tool creation and Adobe integration for image generation.',
    descriptionPT: 'Cursos de certificação gratuitos para professores aprenderem a aproveitar mais de 80 ferramentas de IA na plataforma. O programa de 4 níveis progride da navegação básica até a criação avançada de ferramentas personalizadas e integração com Adobe para geração de imagens.',
    duration: '30-60 minutes per course',
    durationPT: '30-60 minutos por curso',
    level: 'beginner',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://www.magicschool.ai/certification',
    category: 'education-platform',
    features: [
      '4 certification levels',
      'On-demand video tutorials',
      'Quizzes and practical exercises',
      '80+ AI tools training'
    ],
    featuresPT: [
      '4 níveis de certificação',
      'Tutoriais em vídeo sob demanda',
      'Quizzes e exercícios práticos',
      'Treinamento em 80+ ferramentas de IA'
    ],
    language: 'en'
  },
  {
    id: 'aiforeducation-course',
    title: 'AI for Educators Course',
    titlePT: 'Curso de IA para Educadores',
    provider: 'AI for Education',
    platform: 'AI for Education',
    description: 'A practical course to help educators start using ChatGPT to save time, engage students, and implement AI responsibly. Covers tool familiarization, strategies for planning and administrative tasks, and methods to create personalized learning experiences.',
    descriptionPT: 'Um curso prático para ajudar educadores a começar a usar o ChatGPT para economizar tempo, engajar alunos e implementar IA de forma responsável. Cobre familiarização com ferramentas, estratégias para planejamento e tarefas administrativas, e métodos para criar experiências de aprendizagem personalizadas.',
    duration: '2 hours',
    durationPT: '2 horas',
    level: 'beginner',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://www.aiforeducation.io/ai-course',
    category: 'education-platform',
    features: [
      'Practical self-paced course',
      'Time-saving strategies',
      'Student engagement techniques',
      'Responsible implementation'
    ],
    featuresPT: [
      'Curso prático em ritmo próprio',
      'Estratégias para economizar tempo',
      'Técnicas de engajamento estudantil',
      'Implementação responsável'
    ],
    language: 'en'
  },
  {
    id: 'upeducators-advanced',
    title: 'Advanced AI for Educators Course',
    titlePT: 'Curso Avançado de IA para Educadores',
    provider: 'upEducators',
    platform: 'upEducators',
    description: 'An in-depth course covering 13 modules with innovative tools for teaching and engagement. Participants gain Google Gemini certification and access to 200+ AI prompts and detailed guides on 100+ AI tools.',
    descriptionPT: 'Um curso aprofundado que abrange 13 módulos com ferramentas inovadoras para ensino e engajamento. Participantes ganham certificação Google Gemini e acesso a mais de 200 prompts de IA e guias detalhados sobre mais de 100 ferramentas de IA.',
    duration: '5 weeks',
    durationPT: '5 semanas',
    level: 'advanced',
    cost: 'Paid (group discounts available)',
    costPT: 'Pago (descontos para grupos disponíveis)',
    link: 'https://www.upeducators.com/advanced-ai-course',
    category: 'education-platform',
    features: [
      '5-week instructor-led course',
      '13 comprehensive modules',
      'Google Gemini certification',
      '200+ prompts and 100+ tool guides'
    ],
    featuresPT: [
      'Curso de 5 semanas com instrutor',
      '13 módulos abrangentes',
      'Certificação Google Gemini',
      '200+ prompts e guias de 100+ ferramentas'
    ],
    language: 'en'
  },

  // Educational Organizations
  {
    id: 'iste-ai-explorations',
    title: 'Artificial Intelligence Explorations for Educators',
    titlePT: 'Explorações de Inteligência Artificial para Educadores',
    provider: 'ISTE',
    platform: 'ISTE',
    description: 'Helps teachers understand AI types, how technologies are evolving, and build simple tools to make AI concepts concrete. This introductory course provides foundational knowledge for educators new to AI.',
    descriptionPT: 'Ajuda professores a entender tipos de IA, como as tecnologias estão evoluindo e construir ferramentas simples para tornar conceitos de IA concretos. Este curso introdutório fornece conhecimento fundamental para educadores novos em IA.',
    duration: '15 hours (over ~8 weeks)',
    durationPT: '15 horas (ao longo de ~8 semanas)',
    level: 'beginner',
    cost: 'Paid (~$249 USD, member discount)',
    costPT: 'Pago (~$249 USD, desconto para membros)',
    link: 'https://www.iste.org/professional-development/iste-certifications/ai-explorations',
    category: 'organization',
    features: [
      'Self-paced with instructor support',
      'Hands-on tool building',
      'AI concept exploration',
      'ISTE certification'
    ],
    featuresPT: [
      'Ritmo próprio com suporte de instrutor',
      'Construção prática de ferramentas',
      'Exploração de conceitos de IA',
      'Certificação ISTE'
    ],
    language: 'en'
  },
  {
    id: 'iste-nextlevel-ai',
    title: 'Next Level AI Skills for Educators',
    titlePT: 'Habilidades de IA de Próximo Nível para Educadores',
    provider: 'ISTE',
    platform: 'ISTE',
    description: 'Advanced course that deepens curation, creation, and critical evaluation of AI technologies, focusing on advanced prompt engineering and curriculum design. For educators ready to take their AI skills to the next level.',
    descriptionPT: 'Curso avançado que aprofunda curadoria, criação e avaliação crítica de tecnologias de IA, focando em engenharia de prompt avançada e design de currículo. Para educadores prontos para levar suas habilidades de IA ao próximo nível.',
    duration: '15 hours',
    durationPT: '15 horas',
    level: 'advanced',
    cost: 'Paid',
    costPT: 'Pago',
    link: 'https://www.iste.org/professional-development/iste-certifications/next-level-ai',
    category: 'organization',
    features: [
      'Advanced prompt engineering',
      'Curriculum design with AI',
      'Critical AI evaluation',
      'Curation strategies'
    ],
    featuresPT: [
      'Engenharia de prompt avançada',
      'Design de currículo com IA',
      'Avaliação crítica de IA',
      'Estratégias de curadoria'
    ],
    language: 'en'
  },
  {
    id: 'unesco-ai-competency',
    title: 'UNESCO AI Competency Frameworks for Teachers',
    titlePT: 'Frameworks de Competência em IA da UNESCO para Professores',
    provider: 'UNESCO',
    platform: 'UNESCO',
    description: 'Frameworks to help educators understand AI potential and risks, supporting inclusion of AI topics in curriculum. Part of UNESCO\'s work on AI and Future of Learning, built on Recommendation on Ethics of Artificial Intelligence.',
    descriptionPT: 'Frameworks para ajudar educadores a entender o potencial e riscos da IA, apoiando a inclusão de tópicos de IA no currículo. Parte do trabalho da UNESCO sobre IA e Futuro da Aprendizagem, construído sobre a Recomendação sobre Ética da Inteligência Artificial.',
    duration: 'Self-paced',
    durationPT: 'Ritmo próprio',
    level: 'intermediate',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://www.unesco.org/en/digital-education/ai-in-education',
    category: 'organization',
    features: [
      'Competency frameworks',
      'Implementation resources',
      'Ethics focus',
      'Global perspective'
    ],
    featuresPT: [
      'Frameworks de competências',
      'Recursos de implementação',
      'Foco em ética',
      'Perspectiva global'
    ],
    language: 'both'
  },
  {
    id: 'common-sense-ai-basics',
    title: 'AI Basics for K-12 Teachers',
    titlePT: 'Noções Básicas de IA para Professores K-12',
    provider: 'Common Sense Education',
    platform: 'Common Sense Education',
    description: 'Free, ready-to-use lessons on AI literacy for immediate implementation. The 2-hour course covers generative AI fundamentals with strong emphasis on digital citizenship and ethical considerations.',
    descriptionPT: 'Aulas gratuitas e prontas sobre alfabetização em IA para implementação imediata. O curso de 2 horas cobre fundamentos de IA generativa com forte ênfase em cidadania digital e considerações éticas.',
    duration: '2 hours',
    durationPT: '2 horas',
    level: 'beginner',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://www.commonsense.org/education/ai',
    category: 'organization',
    features: [
      'Ready-to-use lessons',
      'Digital citizenship focus',
      'Ethics emphasis',
      'Self-paced format'
    ],
    featuresPT: [
      'Aulas prontas para usar',
      'Foco em cidadania digital',
      'Ênfase em ética',
      'Formato em ritmo próprio'
    ],
    language: 'en'
  },

  // Open Source Resources
  {
    id: 'microsoft-ai-beginners',
    title: 'AI for Beginners Curriculum',
    titlePT: 'Currículo de IA para Iniciantes',
    provider: 'Microsoft',
    platform: 'GitHub',
    description: 'Comprehensive open-source curriculum for AI fluency. Covers essential topics from Symbolic AI and Neural Networks to Computer Vision and NLP, using practical frameworks like TensorFlow and PyTorch.',
    descriptionPT: 'Currículo abrangente e open-source para fluência em IA. Cobre tópicos essenciais desde IA Simbólica e Redes Neurais até Visão Computacional e PLN, usando frameworks práticos como TensorFlow e PyTorch.',
    duration: '12 weeks',
    durationPT: '12 semanas',
    level: 'intermediate',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://github.com/microsoft/AI-For-Beginners',
    category: 'open-source',
    features: [
      '24 lessons over 12 weeks',
      'Project-based learning',
      'Progressive complexity',
      'Multiple AI frameworks'
    ],
    featuresPT: [
      '24 aulas ao longo de 12 semanas',
      'Aprendizado baseado em projetos',
      'Complexidade progressiva',
      'Múltiplos frameworks de IA'
    ],
    language: 'en'
  },
  {
    id: 'dair-prompt-engineering',
    title: 'Prompt Engineering Guide',
    titlePT: 'Guia de Engenharia de Prompts',
    provider: 'DAIR.AI',
    platform: 'GitHub',
    description: 'Complete guide on prompt optimization techniques, from basic to advanced. Includes interactive exercises and real-world examples relevant to educational contexts.',
    descriptionPT: 'Guia completo sobre técnicas de otimização de prompts, do básico ao avançado. Inclui exercícios interativos e exemplos do mundo real relevantes para contextos educacionais.',
    duration: 'Self-paced',
    durationPT: 'Ritmo próprio',
    level: 'intermediate',
    cost: 'Free',
    costPT: 'Gratuito',
    link: 'https://www.promptingguide.ai/',
    category: 'open-source',
    features: [
      'Comprehensive techniques',
      'Interactive exercises',
      'Real-world examples',
      'GitHub repository'
    ],
    featuresPT: [
      'Técnicas abrangentes',
      'Exercícios interativos',
      'Exemplos do mundo real',
      'Repositório no GitHub'
    ],
    language: 'both'
  }
];

// Helper function to get courses by category
export const getCoursesByCategory = (category: Course['category']): Course[] => {
  return courses.filter(course => course.category === category);
};

// Helper function to get courses by level
export const getCoursesByLevel = (level: Course['level']): Course[] => {
  return courses.filter(course => course.level === level);
};

// Helper function to get free courses
export const getFreeCourses = (): Course[] => {
  return courses.filter(course => 
    course.cost.toLowerCase().includes('free') || 
    course.costPT.toLowerCase().includes('gratuito')
  );
};

// Category labels for UI
export const categoryLabels = {
  'university': { en: 'University Courses', pt: 'Cursos Universitários' },
  'tech-giant': { en: 'Tech Companies', pt: 'Empresas de Tecnologia' },
  'education-platform': { en: 'Education Platforms', pt: 'Plataformas Educacionais' },
  'organization': { en: 'Organizations', pt: 'Organizações' },
  'open-source': { en: 'Open Source', pt: 'Código Aberto' }
};

// Level labels for UI  
export const levelLabels = {
  'beginner': { en: 'Beginner', pt: 'Iniciante' },
  'intermediate': { en: 'Intermediate', pt: 'Intermediário' },
  'advanced': { en: 'Advanced', pt: 'Avançado' }
};