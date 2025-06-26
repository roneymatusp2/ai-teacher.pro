export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pt-br', name: 'Português', flag: '🇧🇷' }
];

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      tools: 'AI Tools',
      exploreTools: 'Explore AI Tools',
      learn: 'Learn AI Tools',
      library: 'Library',
      videos: 'Videos',
      about: 'About',
      bookResources: 'Book Resources'
    },
    // Common
    common: {
      readMore: 'Read more',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      viewAll: 'View All',
      loading: 'Loading...',
      error: 'Error',
      search: 'Search',
      filter: 'Filter',
      close: 'Close',
      back: 'Back'
    },
    // Homepage
    home: {
      hero: {
        title: 'AI Teacher Pro',
        subtitle: 'Generative AI for Teachers',
        description: 'Empowering educators to harness the transformative power of artificial intelligence in their classrooms.',
        getBook: 'Get the Book',
        exploreTools: 'Explore AI Tools'
      }
    }
  },
  'pt-br': {
    // Navegação
    nav: {
      home: 'Início',
      tools: 'Ferramentas IA',
      exploreTools: 'Explorar Ferramentas IA',
      learn: 'Aprender Ferramentas IA',
      library: 'Biblioteca',
      videos: 'Vídeos',
      about: 'Sobre',
      bookResources: 'Recursos do Livro'
    },
    // Comum
    common: {
      readMore: 'Leia mais',
      getStarted: 'Começar',
      learnMore: 'Saiba Mais',
      viewAll: 'Ver Todos',
      loading: 'Carregando...',
      error: 'Erro',
      search: 'Pesquisar',
      filter: 'Filtrar',
      close: 'Fechar',
      back: 'Voltar'
    },
    // Página Inicial
    home: {
      hero: {
        title: 'AI Teacher Pro',
        subtitle: 'IA Generativa para Professores',
        description: 'Capacitando educadores a aproveitar o poder transformador da inteligência artificial em suas salas de aula.',
        getBook: 'Adquirir o Livro',
        exploreTools: 'Explorar Ferramentas IA'
      }
    }
  }
};

export function getTranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let translation: any = translations[lang as keyof typeof translations];
  
  for (const k of keys) {
    translation = translation?.[k];
  }
  
  return translation || key;
}

export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  
  const path = window.location.pathname;
  if (path.startsWith('/pt-br')) return 'pt-br';
  return 'en';
}

export function getLocalizedPath(path: string, lang: string): string {
  if (lang === 'en') return path;
  return `/pt-br${path}`;
}