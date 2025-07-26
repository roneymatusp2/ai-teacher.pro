import { Resource } from '../lib/supabase';

export interface Book extends Resource {
  author?: string;
  publisher?: string;
  year?: number;
  pages?: number;
}

export const booksDataPTBR: Partial<Book>[] = [
  {
    id: 'ai-engineering-building-applications-with-foundation-models',
    title: 'Engenharia de IA: Construindo Aplicações com Modelos de Fundação',
    author: 'Chip Huyen',
    publisher: 'O\'Reilly Media',
    year: 2025,
    description: 'Um guia sobre engenharia de IA, focado na construção de aplicações com modelos de fundação pré-existentes, abordando avaliação e implementação.',
    url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/',
    category: 'book',
    tags: ['Engenharia de IA', 'LLMs', 'Desenvolvimento']
  },
  {
    id: 'ai-snake-oil',
    title: 'AI Snake Oil: O que Pode Fazer, o que Não Pode e Como Diferenciar',
    author: 'Arvind Narayanan & Sayash Kapoor',
    publisher: 'Princeton University Press',
    year: 2024,
    description: 'Uma análise crítica que desmistifica a IA, explicando suas capacidades reais versus o hype, e como avaliar as alegações sobre a tecnologia.',
    url: 'https://press.princeton.edu/books/hardcover/9780691249131/ai-snake-oil',
    category: 'book',
    tags: ['Ética', 'IA Crítica', 'Sociedade']
  },
  {
    id: 'artificial-intelligence-a-modern-approach-4th-edition',
    title: 'Inteligência Artificial: Uma Abordagem Moderna (4ª Edição)',
    author: 'Stuart Russell & Peter Norvig',
    publisher: 'Pearson',
    year: 2021,
    description: 'O livro-texto definitivo e mais utilizado no campo da IA, cobrindo desde a busca e lógica até aprendizado de máquina e robótica.',
    url: 'https://aima.cs.berkeley.edu/',
    category: 'book',
    tags: ['Fundamental', 'Teórico', 'Acadêmico']
  },
  {
    id: 'atlas-of-ai',
    title: 'Atlas da IA: Poder, Política e os Custos Planetários da Inteligência Artificial',
    author: 'Kate Crawford',
    publisher: 'Yale University Press',
    year: 2021,
    description: 'Revela os custos ambientais, trabalhistas e políticos da IA, argumentando que a tecnologia é um sistema de extração que centraliza o poder.',
    url: 'https://yalebooks.yale.edu/book/9780300209578/atlas-of-ai/',
    category: 'book',
    tags: ['Ética', 'Sociedade', 'IA Crítica']
  },
  {
    id: 'build-a-large-language-model-from-scratch',
    title: 'Construa um Modelo de Linguagem Grande (Do Zero)',
    author: 'Sebastian Raschka',
    publisher: 'Manning Publications',
    year: 2024,
    description: 'Um guia prático que ensina passo a passo como construir um modelo de linguagem grande (LLM) do zero, usando um laptop comum.',
    url: 'https://www.manning.com/books/build-a-large-language-model-from-scratch',
    category: 'book',
    tags: ['LLMs', 'Desenvolvimento', 'Prático']
  },
  {
    id: 'co-intelligence-living-and-working-with-ai',
    title: 'Co-Inteligência: Vivendo e Trabalhando com IA',
    author: 'Ethan Mollick',
    publisher: 'Portfolio / Penguin',
    year: 2024,
    description: 'Um manual prático sobre como usar a IA como uma ferramenta de colaboração no trabalho e na educação, escrito em um estilo acessível.',
    url: 'https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/',
    category: 'book',
    tags: ['Negócios', 'Produtividade', 'IA Aplicada']
  },
  {
    id: 'deep-learning',
    title: 'Aprendizado Profundo',
    author: 'Ian Goodfellow, Yoshua Bengio & Aaron Courville',
    publisher: 'MIT Press',
    year: 2016,
    description: 'A introdução técnica de referência ao aprendizado profundo, cobrindo desde a matemática essencial até as arquiteturas de redes neurais modernas.',
    url: 'https://www.deeplearningbook.org/',
    category: 'book',
    tags: ['Deep Learning', 'Fundamental', 'Técnico']
  },
  {
    id: 'empire-of-ai',
    title: 'Império da IA: Sonhos e Pesadelos na OpenAI de Sam Altman',
    author: 'Karen Hao',
    publisher: 'Doubleday',
    year: 2025,
    description: 'Uma investigação jornalística sobre a indústria de IA, focada na OpenAI, que explora as implicações éticas e de poder por trás da tecnologia.',
    url: 'https://www.penguinrandomhouse.com/books/763118/empire-of-ai-by-karen-hao/',
    category: 'book',
    tags: ['Indústria de IA', 'Ética', 'Jornalismo']
  },
  {
    id: 'generative-ai-for-teachers-a-practical-guide',
    title: 'IA Generativa para Professores: Um Guia Prático para Tecnologia Educacional',
    author: 'Roney Lima do Nascimento',
    publisher: 'Publicado Independentemente',
    year: 2025,
    description: 'Um guia prático focado em educadores para integrar a IA generativa no ensino, abordando aplicações e considerações éticas na tecnologia educacional.',
    url: 'https://www.goodreads.com/book/show/237003213-generative-ai-for-teachers',
    category: 'book',
    tags: ['Educação', 'IA Generativa', 'Prático']
  },
  {
    id: 'hands-on-machine-learning-3rd-ed',
    title: 'Aprendizado de Máquina Prático com Scikit-Learn, Keras & TensorFlow (3ª Ed.)',
    author: 'Aurélien Géron',
    publisher: 'O\'Reilly Media',
    year: 2023,
    description: 'Um guia prático e best-seller que ensina conceitos e ferramentas para construir sistemas inteligentes usando frameworks Python populares.',
    url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/',
    category: 'book',
    tags: ['Prático', 'Python', 'Desenvolvimento']
  },
  {
    id: 'human-compatible',
    title: 'Humano Compatível: Inteligência Artificial e o Problema do Controle',
    author: 'Stuart Russell',
    publisher: 'Viking',
    year: 2019,
    description: 'Argumenta que o risco da IA avançada é uma preocupação séria e propõe uma nova abordagem para construir máquinas comprovadamente benéficas.',
    url: 'https://www.penguinrandomhouse.com/books/566634/human-compatible-by-stuart-russell/',
    category: 'book',
    tags: ['Segurança de IA', 'Ética', 'Filosofia']
  },
  {
    id: 'life-3-0',
    title: 'Vida 3.0: Sendo Humano na Era da Inteligência Artificial',
    author: 'Max Tegmark',
    publisher: 'Knopf',
    year: 2017,
    description: 'Explora o impacto da IA no futuro da vida, abordando desde crime e guerra até o sentido de ser humano, e como podemos guiar um futuro positivo.',
    url: 'https://futureoflife.org/book/life-3-0-being-human-in-the-age-of-artificial-intelligence/',
    category: 'book',
    tags: ['Futurismo', 'Sociedade', 'Segurança de IA']
  },
  {
    id: 'power-and-prediction',
    title: 'Poder e Predição: A Economia Disruptiva da Inteligência Artificial',
    author: 'Ajay Agrawal, Joshua Gans & Avi Goldfarb',
    publisher: 'Harvard Business Review Press',
    year: 2022,
    description: 'Examina como a IA, ao baratear a predição, transforma a tomada de decisão e cria disrupções sistêmicas na indústria e na sociedade.',
    url: 'https://store.hbr.org/product/power-and-prediction-the-disruptive-economics-of-artificial-intelligence/10580',
    category: 'book',
    tags: ['Negócios', 'Economia', 'Estratégia']
  },
  {
    id: 'teaching-with-ai-a-practical-guide',
    title: 'Ensinando com IA: Um Guia Prático para uma Nova Era de Colaboração Homem-Máquina',
    author: 'José Antonio Bowen & C. Edward Watson',
    publisher: 'Johns Hopkins University Press',
    year: 2024,
    description: 'Um recurso abrangente para educadores sobre como aproveitar a IA em sala de aula, abordando questões como integridade acadêmica e colaboração.',
    url: 'https://www.press.jhu.edu/books/title/53869/teaching-ai',
    category: 'book',
    tags: ['Educação', 'IA Aplicada', 'Pedagogia']
  },
  {
    id: 'the-alignment-problem',
    title: 'O Problema do Alinhamento: Aprendizado de Máquina e Valores Humanos',
    author: 'Brian Christian',
    publisher: 'W. W. Norton & Company',
    year: 2020,
    description: 'Uma exploração de como garantir que os sistemas de IA façam o que realmente queremos, investigando os desafios éticos e os vieses humanos.',
    url: 'https://wwnorton.com/books/9780393868333',
    category: 'book',
    tags: ['Segurança de IA', 'Ética', 'Sociedade']
  },
  {
    id: 'the-coming-wave',
    title: 'A Onda que se Aproxima: Tecnologia, Poder e o Maior Dilema do Século XXI',
    author: 'Mustafa Suleyman & Michael Bhaskar',
    publisher: 'Crown',
    year: 2023,
    description: 'Um alerta sobre os riscos sem precedentes que a IA e a biologia sintética representam para a ordem global e como podemos contê-los.',
    url: 'https://thecomingwave.com/',
    category: 'book',
    tags: ['Futurismo', 'Governança', 'Risco']
  },
  {
    id: 'the-singularity-is-nearer',
    title: 'A Singularidade está Próxima: Quando nos Fundiremos com a IA',
    author: 'Ray Kurzweil',
    publisher: 'Viking',
    year: 2024,
    description: 'Uma exploração futurista sobre a fusão da inteligência humana com a artificial, prevendo uma aceleração exponencial da tecnologia e da longevidade.',
    url: 'https://www.penguinrandomhouse.com/books/535433/the-singularity-is-nearer-by-ray-kurzweil/',
    category: 'book',
    tags: ['Futurismo', 'Singularidade', 'AGI']
  },
  {
    id: 'the-worlds-i-see',
    title: 'Os Mundos que Vejo: Curiosidade, Exploração e Descoberta na Aurora da IA',
    author: 'Fei-Fei Li',
    publisher: 'Flatiron Books',
    year: 2023,
    description: 'Um livro de memórias de uma das pioneiras da IA, que mistura sua jornada pessoal com a história da IA e considerações éticas sobre a tecnologia.',
    url: 'https://us.macmillan.com/books/9781250897930/theworldsis',
    category: 'book',
    tags: ['História da IA', 'Memórias', 'Ética']
  },
  {
    id: 'weapons-of-math-destruction',
    title: 'Armas de Destruição Matemática: Como o Big Data Aumenta a Desigualdade e Ameaça a Democracia',
    author: 'Cathy O\'Neil',
    publisher: 'Crown',
    year: 2016,
    description: 'Demonstra como algoritmos opacos e não regulamentados podem ampliar a desigualdade social em áreas críticas como contratação, seguros e justiça.',
    url: 'https://www.penguinrandomhouse.com/books/241363/weapons-of-math-destruction-by-cathy-oneil/',
    category: 'book',
    tags: ['Ética', 'Vieses', 'Sociedade']
  }
];
