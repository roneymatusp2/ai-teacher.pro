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
  format: string;
  formatPT: string;
  cost: string;
  costPT: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  url: string;
  coverImage: string;
  tags: string[];
  tagsPT: string[];
  featured?: boolean;
}

export const coursesData: Course[] = [
  // 1. University and Platform Courses (Coursera, FutureLearn)
  {
    id: 'wharton-ai-education',
    title: 'AI in Education: Leveraging ChatGPT for Teaching',
    titlePT: 'IA na Educação: Aproveitando o ChatGPT para Ensinar',
    provider: 'Wharton School (UPenn)',
    platform: 'Coursera',
    description: 'Taught by renowned AI in education experts Ethan and Lilach Mollick, this practical course demystifies generative AI for educators. Learn to effectively incorporate tools like ChatGPT into teaching to save time, increase student engagement, and create personalized learning experiences.',
    descriptionPT: 'Ministrado pelos renomados especialistas em IA na educação Ethan e Lilach Mollick, este curso prático desmistifica a IA generativa para educadores. Aprenda a incorporar efetivamente ferramentas como o ChatGPT no ensino para economizar tempo, aumentar o engajamento dos alunos e criar experiências de aprendizagem personalizadas.',
    duration: '6-8 hours, self-paced',
    durationPT: '6-8 horas, ritmo próprio',
    format: '4 modules with short video lectures, readings, discussions and quizzes',
    formatPT: '4 módulos com videoaulas curtas, leituras, discussões e testes',
    cost: 'Free to audit, paid certificate',
    costPT: 'Gratuito para auditar, certificado pago',
    level: 'beginner',
    url: 'https://www.coursera.org/learn/ai-education-chatgpt',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['ChatGPT', 'Teaching', 'Prompt Engineering', 'Ethics', 'Practical'],
    tagsPT: ['ChatGPT', 'Ensino', 'Engenharia de Prompts', 'Ética', 'Prático'],
    featured: true
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
    format: '4 sequential courses with practical projects and capstone',
    formatPT: '4 cursos sequenciais com projetos práticos e projeto final',
    cost: 'Free to audit, paid certificate',
    costPT: 'Gratuito para auditar, certificado pago',
    level: 'intermediate',
    url: 'https://www.coursera.org/specializations/generative-ai-for-educators',
    coverImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Specialization', 'GPT-4', 'Creative Problem Solving', 'Educational Games'],
    tagsPT: ['Especialização', 'GPT-4', 'Resolução Criativa de Problemas', 'Jogos Educacionais']
  },
  {
    id: 'macquarie-ai-teachers',
    title: 'Artificial Intelligence (AI) Education for Teachers',
    titlePT: 'Educação em Inteligência Artificial (IA) para Professores',
    provider: 'Macquarie University & IBM',
    platform: 'Coursera',
    description: 'Designed "by teachers, for teachers", this course covers fundamental AI concepts, how it works, and how it can be integrated into school curriculum. Covers machine learning, algorithms, and AI applications across industries, with significant focus on pedagogy, ethics, and curriculum alignment.',
    descriptionPT: 'Projetado "por professores, para professores", este curso aborda conceitos fundamentais de IA, como funciona e como pode ser integrada ao currículo escolar. Cobre aprendizado de máquina, algoritmos e aplicações de IA em diversas indústrias, com foco significativo em pedagogia, ética e alinhamento curricular.',
    duration: '4-6 weeks (~20 hours total)',
    durationPT: '4-6 semanas (~20 horas no total)',
    format: '6 modules with video lectures, readings and quizzes',
    formatPT: '6 módulos com videoaulas, leituras e questionários',
    cost: 'Free to audit, paid certificate',
    costPT: 'Gratuito para auditar, certificado pago',
    level: 'beginner',
    url: 'https://www.coursera.org/learn/ai-education-for-teachers',
    coverImage: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Fundamentals', 'Machine Learning', 'Ethics', 'Curriculum', 'IBM'],
    tagsPT: ['Fundamentos', 'Aprendizado de Máquina', 'Ética', 'Currículo', 'IBM']
  },
  {
    id: 'kings-college-ai-higher-ed',
    title: 'Generative AI in Higher Education',
    titlePT: 'IA Generativa no Ensino Superior',
    provider: "King's College London",
    platform: 'FutureLearn',
    description: 'A practical and thought-provoking course exploring how AI is reshaping education and how teachers can respond with discernment and creativity. Focused on higher education challenges, it investigates benefits and risks of AI, ethical dilemmas, and impact on teaching and assessment.',
    descriptionPT: 'Um curso prático e instigante que explora como a IA está remodelando a educação e como os professores podem responder com discernimento e criatividade. Focado nos desafios do ensino superior, investiga benefícios e riscos da IA, dilemas éticos e impacto no ensino e avaliação.',
    duration: '3 weeks (4 hours/week)',
    durationPT: '3 semanas (4 horas/semana)',
    format: 'Online course with activities, articles, videos and discussions',
    formatPT: 'Curso online com atividades, artigos, vídeos e discussões',
    cost: 'Free access during active period, paid for unlimited access',
    costPT: 'Acesso gratuito durante período ativo, pago para acesso ilimitado',
    level: 'intermediate',
    url: 'https://www.futurelearn.com/courses/ai-in-education',
    coverImage: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Higher Education', 'Ethics', 'Assessment', 'Critical Thinking'],
    tagsPT: ['Ensino Superior', 'Ética', 'Avaliação', 'Pensamento Crítico']
  },

  // 2. Tech Giant Platforms (Microsoft, Google, IBM, Anthropic)
  {
    id: 'microsoft-ai-educators',
    title: 'AI for Educators Learning Path',
    titlePT: 'Trilha de Aprendizagem IA para Educadores',
    provider: 'Microsoft',
    platform: 'Microsoft Learn',
    description: 'An introductory learning path on AI in education. Covers AI history, LLMs, generative AI, prompt engineering, and responsible AI use. Emphasizes how tools like Microsoft Copilot, Designer, Edge, Word, and PowerPoint can enhance teaching.',
    descriptionPT: 'Uma trilha de aprendizagem introdutória sobre IA na educação. Cobre história da IA, LLMs, IA generativa, engenharia de prompts e uso responsável da IA. Enfatiza como ferramentas como Microsoft Copilot, Designer, Edge, Word e PowerPoint podem aprimorar o ensino.',
    duration: '4-6 hours',
    durationPT: '4-6 horas',
    format: '4 self-paced modules for K-12 and Higher Ed',
    formatPT: '4 módulos em ritmo próprio para Ensino Básico e Superior',
    cost: 'Free',
    costPT: 'Gratuito',
    level: 'beginner',
    url: 'https://learn.microsoft.com/training/paths/ai-for-educators/',
    coverImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Microsoft', 'Copilot', 'Office 365', 'Responsible AI'],
    tagsPT: ['Microsoft', 'Copilot', 'Office 365', 'IA Responsável']
  },
  {
    id: 'google-generative-ai',
    title: 'Generative AI for Educators',
    titlePT: 'IA Generativa para Educadores',
    provider: 'Google & MIT',
    platform: 'Grow with Google',
    description: 'A course for K-12 teachers to learn how generative AI (like Gemini) can save time, personalize instruction, and boost creativity. Covers core concepts, hands-on practice with AI tools, prompt creation, and integration strategies while maintaining ethics and academic integrity.',
    descriptionPT: 'Um curso para professores do ensino fundamental e médio aprenderem como a IA generativa (como Gemini) pode economizar tempo, personalizar o ensino e aumentar a criatividade. Cobre conceitos centrais, prática com ferramentas de IA, criação de prompts e estratégias de integração mantendo ética e integridade acadêmica.',
    duration: '~2 hours',
    durationPT: '~2 horas',
    format: 'Self-paced course with interactive lessons',
    formatPT: 'Curso em ritmo próprio com lições interativas',
    cost: 'Free with certificate',
    costPT: 'Gratuito com certificado',
    level: 'beginner',
    url: 'https://grow.google/ai-for-educators/',
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Google', 'Gemini', 'K-12', 'Quick Start'],
    tagsPT: ['Google', 'Gemini', 'Ensino Básico', 'Início Rápido'],
    featured: true
  },
  {
    id: 'ibm-ai-foundations',
    title: 'AI Foundations for Educators',
    titlePT: 'Fundamentos de IA para Educadores',
    provider: 'IBM',
    platform: 'IBM SkillsBuild',
    description: 'A comprehensive online learning suite for K-12 educators. Covers fundamental AI concepts, machine learning, NLP, robotics, data bias, and ethics, always connecting concepts to practical classroom applications. Goal is to make educators fluent and confident in AI.',
    descriptionPT: 'Um conjunto abrangente de aprendizado online para educadores K-12. Cobre conceitos fundamentais de IA, aprendizado de máquina, PLN, robótica, viés de dados e ética, sempre conectando conceitos a aplicações práticas em sala de aula. O objetivo é tornar educadores fluentes e confiantes em IA.',
    duration: '~14 hours (9 modules)',
    durationPT: '~14 horas (9 módulos)',
    format: '9 on-demand webinar modules with real-world examples',
    formatPT: '9 módulos de webinar sob demanda com exemplos do mundo real',
    cost: 'Free with IBM digital badge',
    costPT: 'Gratuito com badge digital IBM',
    level: 'beginner',
    url: 'https://skillsbuild.org/teachers',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['IBM', 'Comprehensive', 'K-12', 'Digital Badge'],
    tagsPT: ['IBM', 'Abrangente', 'Ensino Básico', 'Badge Digital']
  },
  {
    id: 'anthropic-ai-fluency',
    title: 'AI Fluency: Frameworks and Foundations',
    titlePT: 'Fluência em IA: Frameworks e Fundamentos',
    provider: 'Anthropic',
    platform: 'Anthropic Academy',
    description: 'A course to develop fluency in safe and effective AI use. Introduces a framework for conscious AI interaction, teaching competencies of Delegation, Description, Discernment, and Diligence. Highly relevant for educators using tools like Claude.',
    descriptionPT: 'Um curso para desenvolver fluência no uso seguro e eficaz da IA. Introduz um framework para interação consciente com IA, ensinando competências de Delegação, Descrição, Discernimento e Diligência. Altamente relevante para educadores que usam ferramentas como Claude.',
    duration: 'Few hours (short modules)',
    durationPT: 'Algumas horas (módulos curtos)',
    format: 'Self-paced modules with videos and interactive exercises',
    formatPT: 'Módulos em ritmo próprio com vídeos e exercícios interativos',
    cost: 'Free',
    costPT: 'Gratuito',
    level: 'intermediate',
    url: 'https://www.anthropic.com/courses/ai-fluency',
    coverImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Claude', 'AI Safety', 'Framework', 'Best Practices'],
    tagsPT: ['Claude', 'Segurança em IA', 'Framework', 'Melhores Práticas']
  },

  // 3. Specialized Education Platforms
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
    format: '6 short self-paced modules',
    formatPT: '6 módulos curtos em ritmo próprio',
    cost: 'Free',
    costPT: 'Gratuito',
    level: 'beginner',
    url: 'https://openai.com/academy/ai-for-k-12-educators',
    coverImage: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['OpenAI', 'ChatGPT', 'K-12', 'Quick Start'],
    tagsPT: ['OpenAI', 'ChatGPT', 'Ensino Básico', 'Início Rápido'],
    featured: true
  },
  {
    id: 'magicschool-certification',
    title: 'MagicSchool AI Educator Certification',
    titlePT: 'Certificação MagicSchool AI para Educadores',
    provider: 'MagicSchool.ai',
    platform: 'MagicSchool',
    description: 'Free certification series for teachers to master 80+ AI tools on the platform. 4-level program progresses from basic navigation to advanced custom tool creation and Adobe integration for image generation.',
    descriptionPT: 'Série de certificação gratuita para professores dominarem mais de 80 ferramentas de IA na plataforma. Programa de 4 níveis progride desde navegação básica até criação avançada de ferramentas personalizadas e integração com Adobe para geração de imagens.',
    duration: '30-60 minutes per course',
    durationPT: '30-60 minutos por curso',
    format: '4 certification levels + extra courses',
    formatPT: '4 níveis de certificação + cursos extras',
    cost: 'Free',
    costPT: 'Gratuito',
    level: 'beginner',
    url: 'https://www.magicschool.ai/certification',
    coverImage: 'https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['MagicSchool', 'AI Tools', 'Certification', 'Practical'],
    tagsPT: ['MagicSchool', 'Ferramentas IA', 'Certificação', 'Prático']
  },
  {
    id: 'ai-for-education-course',
    title: 'AI for Educators Course',
    titlePT: 'Curso IA para Educadores',
    provider: 'AI for Education',
    platform: 'AI for Education',
    description: 'A practical course helping educators start using ChatGPT to save time, engage students, and implement AI responsibly. Covers tool familiarization, strategies for planning and administrative tasks, and methods to create personalized learning experiences.',
    descriptionPT: 'Um curso prático ajudando educadores a começar a usar o ChatGPT para economizar tempo, engajar alunos e implementar IA responsavelmente. Cobre familiarização com ferramentas, estratégias para planejamento e tarefas administrativas, e métodos para criar experiências de aprendizagem personalizadas.',
    duration: '2 hours',
    durationPT: '2 horas',
    format: 'Practical self-paced course',
    formatPT: 'Curso prático em ritmo próprio',
    cost: 'Free',
    costPT: 'Gratuito',
    level: 'beginner',
    url: 'https://www.aiforeducation.io/ai-course',
    coverImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['ChatGPT', 'Time-saving', 'Student Engagement', 'Practical'],
    tagsPT: ['ChatGPT', 'Economia de Tempo', 'Engajamento', 'Prático']
  },

  // 4. Educational Organizations (ISTE, UNESCO, etc.)
  {
    id: 'iste-ai-explorations',
    title: 'Artificial Intelligence Explorations for Educators',
    titlePT: 'Explorações de Inteligência Artificial para Educadores',
    provider: 'ISTE',
    platform: 'ISTE U',
    description: 'Helps teachers understand AI types, how technologies are evolving, and build simple tools to make AI concepts concrete. Part of ISTE\'s comprehensive AI education program.',
    descriptionPT: 'Ajuda professores a entender tipos de IA, como as tecnologias estão evoluindo, e construir ferramentas simples para tornar conceitos de IA concretos. Parte do programa abrangente de educação em IA da ISTE.',
    duration: '15 hours over ~8 weeks',
    durationPT: '15 horas em ~8 semanas',
    format: 'Self-paced with instructor support',
    formatPT: 'Ritmo próprio com suporte de instrutor',
    cost: '~$249 USD (member discount available)',
    costPT: '~$249 USD (desconto para membros)',
    level: 'beginner',
    url: 'https://iste.org/ai-explorations',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['ISTE', 'Certification', 'Hands-on', 'Comprehensive'],
    tagsPT: ['ISTE', 'Certificação', 'Prático', 'Abrangente']
  },
  {
    id: 'iste-next-level-ai',
    title: 'Next Level AI Skills for Educators',
    titlePT: 'Habilidades Avançadas de IA para Educadores',
    provider: 'ISTE',
    platform: 'ISTE U',
    description: 'Advanced course deepening curation, creation, and critical evaluation of AI technologies, with focus on advanced prompt engineering and curriculum design.',
    descriptionPT: 'Curso avançado aprofundando curadoria, criação e avaliação crítica de tecnologias de IA, com foco em engenharia de prompt avançada e design de currículo.',
    duration: '15 hours',
    durationPT: '15 horas',
    format: 'Self-paced with projects',
    formatPT: 'Ritmo próprio com projetos',
    cost: '~$249 USD',
    costPT: '~$249 USD',
    level: 'advanced',
    url: 'https://iste.org/next-level-ai',
    coverImage: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['ISTE', 'Advanced', 'Curriculum Design', 'Critical Thinking'],
    tagsPT: ['ISTE', 'Avançado', 'Design Curricular', 'Pensamento Crítico']
  },
  {
    id: 'unesco-ai-competency',
    title: 'UNESCO AI Competency Frameworks for Teachers',
    titlePT: 'Estruturas de Competência em IA da UNESCO para Professores',
    provider: 'UNESCO',
    platform: 'UNESCO',
    description: 'Frameworks to help educators understand AI potential and risks, supporting inclusion of AI topics in curriculum. Built on UNESCO\'s Recommendation on the Ethics of Artificial Intelligence.',
    descriptionPT: 'Estruturas para ajudar educadores a entender potencial e riscos da IA, apoiando inclusão de tópicos de IA no currículo. Construído sobre a Recomendação da UNESCO sobre Ética da Inteligência Artificial.',
    duration: 'Self-paced',
    durationPT: 'Ritmo próprio',
    format: 'Resources and frameworks for implementation',
    formatPT: 'Recursos e estruturas para implementação',
    cost: 'Free',
    costPT: 'Gratuito',
    level: 'intermediate',
    url: 'https://www.unesco.org/en/artificial-intelligence/education',
    coverImage: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['UNESCO', 'Framework', 'Ethics', 'Policy'],
    tagsPT: ['UNESCO', 'Framework', 'Ética', 'Política']
  },

  // 5. Advanced/Specialized Courses
  {
    id: 'tiffin-prompt-engineering',
    title: 'Prompt Engineering for Educators Certification',
    titlePT: 'Certificação em Engenharia de Prompts para Educadores',
    provider: 'Tiffin University',
    platform: 'Tiffin University',
    description: 'Certification focused specifically on prompt engineering for educators. Covers fundamental concepts and practical applications, teaching participants to create effective prompts and optimize AI interactions for educational goals.',
    descriptionPT: 'Certificação focada especificamente em engenharia de prompts para educadores. Cobre conceitos fundamentais e aplicações práticas, ensinando participantes a criar prompts eficazes e otimizar interações com IA para objetivos educacionais.',
    duration: '4 weeks',
    durationPT: '4 semanas',
    format: 'Certification course',
    formatPT: 'Curso para certificação',
    cost: 'Paid',
    costPT: 'Pago',
    level: 'intermediate',
    url: 'https://www.tiffin.edu/academics/certificates/prompt-engineering',
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Prompt Engineering', 'Certification', 'Specialized'],
    tagsPT: ['Engenharia de Prompts', 'Certificação', 'Especializado']
  },
  {
    id: 'upeducators-advanced-ai',
    title: 'Advanced AI for Educators Course',
    titlePT: 'Curso Avançado de IA para Educadores',
    provider: 'upEducators',
    platform: 'upEducators',
    description: 'In-depth course covering 13 modules with innovative tools for teaching and engagement. Participants gain Google Gemini certification and access to 200+ AI prompts and detailed guides on 100+ AI tools.',
    descriptionPT: 'Curso aprofundado cobrindo 13 módulos com ferramentas inovadoras para ensino e engajamento. Participantes ganham certificação Google Gemini e acesso a mais de 200 prompts de IA e guias detalhados sobre mais de 100 ferramentas de IA.',
    duration: '5 weeks',
    durationPT: '5 semanas',
    format: 'Instructor-led with certification',
    formatPT: 'Com instrutor e certificação',
    cost: 'Paid (group discounts available)',
    costPT: 'Pago (descontos para grupos)',
    level: 'advanced',
    url: 'https://www.upeducators.com/advanced-ai-course',
    coverImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Advanced', 'Google Gemini', '200+ Prompts', 'Comprehensive'],
    tagsPT: ['Avançado', 'Google Gemini', '200+ Prompts', 'Abrangente']
  },
  {
    id: 'colorado-ai-course-design',
    title: 'AI for Course Design',
    titlePT: 'IA para Design de Cursos',
    provider: 'University of Colorado Boulder',
    platform: 'Coursera',
    description: 'Program specifically addressing course design with AI, emphasizing ethical considerations and practical tool utilization for instructional designers.',
    descriptionPT: 'Programa que aborda especificamente design de cursos com IA, enfatizando considerações éticas e utilização prática de ferramentas para designers instrucionais.',
    duration: 'Self-paced',
    durationPT: 'Ritmo próprio',
    format: 'Online course',
    formatPT: 'Curso online',
    cost: 'Free to audit',
    costPT: 'Gratuito para auditar',
    level: 'intermediate',
    url: 'https://www.coursera.org/learn/ai-for-course-design',
    coverImage: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Course Design', 'Instructional Design', 'Ethics'],
    tagsPT: ['Design de Cursos', 'Design Instrucional', 'Ética']
  },
  {
    id: 'claude-for-education',
    title: 'Claude for Education',
    titlePT: 'Claude para Educação',
    provider: 'Anthropic',
    platform: 'Anthropic',
    description: 'Specialized version of Claude AI assistant adapted for higher education institutions. Includes "Learning Mode" that guides student reasoning instead of giving direct answers, helping develop critical thinking.',
    descriptionPT: 'Versão especializada do assistente de IA Claude adaptada para instituições de ensino superior. Inclui "Modo de Aprendizagem" que guia o raciocínio dos alunos em vez de dar respostas diretas, ajudando a desenvolver pensamento crítico.',
    duration: 'Self-paced',
    durationPT: 'Ritmo próprio',
    format: 'Institutional implementation',
    formatPT: 'Implementação institucional',
    cost: 'Institutional pricing',
    costPT: 'Preços institucionais',
    level: 'intermediate',
    url: 'https://www.anthropic.com/education',
    coverImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Claude', 'Higher Education', 'Critical Thinking', 'Institutional'],
    tagsPT: ['Claude', 'Ensino Superior', 'Pensamento Crítico', 'Institucional']
  }
];

// Helper function to get courses by level
export const getCoursesByLevel = (level: 'beginner' | 'intermediate' | 'advanced') => {
  return coursesData.filter(course => course.level === level);
};

// Helper function to get featured courses
export const getFeaturedCourses = () => {
  return coursesData.filter(course => course.featured === true);
};

// Helper function to get courses by provider
export const getCoursesByProvider = (provider: string) => {
  return coursesData.filter(course => 
    course.provider.toLowerCase().includes(provider.toLowerCase())
  );
};

// Helper function to get courses by platform
export const getCoursesByPlatform = (platform: string) => {
  return coursesData.filter(course => 
    course.platform.toLowerCase().includes(platform.toLowerCase())
  );
};

// Helper function to search courses
export const searchCourses = (query: string, language: 'en' | 'pt' = 'en') => {
  const lowerQuery = query.toLowerCase();
  return coursesData.filter(course => {
    if (language === 'pt') {
      return course.titlePT.toLowerCase().includes(lowerQuery) ||
             course.descriptionPT.toLowerCase().includes(lowerQuery) ||
             course.tagsPT.some(tag => tag.toLowerCase().includes(lowerQuery));
    }
    return course.title.toLowerCase().includes(lowerQuery) ||
           course.description.toLowerCase().includes(lowerQuery) ||
           course.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
  });
};