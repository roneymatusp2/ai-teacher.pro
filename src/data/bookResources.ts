export interface BookResource {
  id: string;
  path: string;
  title: string;
  chapter: string;
  description: string;
  content: {
    overview: string;
    features: string[];
    resources: {
      title: string;
      description: string;
      url?: string;
      type: 'guide' | 'tool' | 'template' | 'video' | 'community';
    }[];
  };
  relatedLinks?: string[];
}

export const bookResources: BookResource[] = [
  // Chapter 2 - AI Platforms
  {
    id: 'platforms',
    path: '/platforms',
    title: 'Comprehensive Platform Resources',
    chapter: 'Chapter 2 - AI Platforms',
    description: 'Continuously updated platform comparison database, configuration guides, cost calculators, and practical implementation examples',
    content: {
      overview: 'Access comprehensive resources for choosing and implementing AI platforms in education.',
      features: [
        'Platform comparison database',
        'Configuration guides',
        'Cost calculators',
        'Implementation examples',
        'Regular updates'
      ],
      resources: [
        {
          title: 'Platform Comparison Tool',
          description: 'Compare features, pricing, and educational benefits of different AI platforms',
          type: 'tool'
        },
        {
          title: 'Setup Guides',
          description: 'Step-by-step configuration guides for popular AI platforms',
          type: 'guide'
        },
        {
          title: 'Cost Calculator',
          description: 'Calculate and compare costs for different AI platforms based on your usage',
          type: 'tool'
        }
      ]
    }
  },

  // Chapter 3 - Prompt Engineering
  {
    id: 'chapter3_ex1',
    path: '/chapter3_ex1',
    title: 'Complete GUIDE+ Text Examples',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'Comprehensive library of text-based educational prompts',
    content: {
      overview: 'Explore a comprehensive collection of text-based prompts designed specifically for educational contexts.',
      features: [
        'Subject-specific prompts',
        'Grade-level variations',
        'Assessment prompts',
        'Creative writing prompts',
        'Critical thinking exercises'
      ],
      resources: [
        {
          title: 'Prompt Library',
          description: 'Browse hundreds of tested educational prompts',
          type: 'template'
        },
        {
          title: 'Prompt Builder',
          description: 'Create custom prompts using our framework',
          type: 'tool'
        }
      ]
    }
  },

  {
    id: 'chapter3_ex2',
    path: '/chapter3_ex2',
    title: 'VEO 3 Educational Video Prompts',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'Complete VEO 3 prompt library for educators',
    content: {
      overview: 'Master video generation with VEO 3 using education-specific prompts and templates.',
      features: [
        'Educational video templates',
        'Animation prompts',
        'Demonstration videos',
        'Student engagement videos',
        'Tutorial creation'
      ],
      resources: [
        {
          title: 'VEO 3 Templates',
          description: 'Ready-to-use video generation templates',
          type: 'template'
        },
        {
          title: 'Video Examples',
          description: 'See successful educational videos created with VEO 3',
          type: 'video'
        }
      ]
    }
  },

  {
    id: 'chapter3_ex3',
    path: '/chapter3_ex3',
    title: 'Hailuo AI Educational Templates',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'Micro-video prompt collection for instant engagement',
    content: {
      overview: 'Create engaging micro-videos for education using Hailuo AI templates.',
      features: [
        'Quick explanation videos',
        'Concept visualization',
        'Student attention grabbers',
        'Social media educational content',
        'Bite-sized lessons'
      ],
      resources: [
        {
          title: 'Micro-Video Templates',
          description: 'Templates for creating short educational videos',
          type: 'template'
        },
        {
          title: 'Engagement Strategies',
          description: 'Best practices for using micro-videos in education',
          type: 'guide'
        }
      ]
    }
  },

  {
    id: 'chapter3_ex4',
    path: '/chapter3_ex4',
    title: 'Advanced Iteration Techniques',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'Professional iteration strategies and refinement methods',
    content: {
      overview: 'Learn advanced techniques for iterating and refining AI prompts for optimal educational outcomes.',
      features: [
        'Iterative refinement process',
        'A/B testing prompts',
        'Student feedback integration',
        'Performance metrics',
        'Continuous improvement'
      ],
      resources: [
        {
          title: 'Iteration Framework',
          description: 'Structured approach to prompt refinement',
          type: 'guide'
        },
        {
          title: 'Testing Tools',
          description: 'Tools for testing and comparing prompt effectiveness',
          type: 'tool'
        }
      ]
    }
  },

  {
    id: 'chapter3_ex5',
    path: '/chapter3_ex5',
    title: 'Professional Development Framework',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'Complete professional development resources and community',
    content: {
      overview: 'Access professional development resources and connect with the educator community.',
      features: [
        'Training modules',
        'Certification pathways',
        'Community forums',
        'Expert workshops',
        'Peer collaboration'
      ],
      resources: [
        {
          title: 'Training Courses',
          description: 'Self-paced courses on AI in education',
          type: 'guide'
        },
        {
          title: 'Educator Community',
          description: 'Join discussions with fellow AI-forward educators',
          type: 'community'
        }
      ]
    }
  },

  {
    id: 'chapter3_ex6',
    path: '/chapter3_ex6',
    title: 'Automated Tools Directory',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'Directory of prompt generation tools and tutorials',
    content: {
      overview: 'Discover and learn to use automated tools for prompt generation and management.',
      features: [
        'Tool comparisons',
        'Integration guides',
        'Workflow automation',
        'Batch processing',
        'API connections'
      ],
      resources: [
        {
          title: 'Tool Directory',
          description: 'Comprehensive list of prompt automation tools',
          type: 'tool'
        },
        {
          title: 'Integration Tutorials',
          description: 'Learn to integrate tools into your workflow',
          type: 'video'
        }
      ]
    }
  },

  {
    id: 'chapter3_ex7',
    path: '/chapter3_ex7',
    title: 'Chapter Integration Guide',
    chapter: 'Chapter 3 - Prompt Engineering',
    description: 'How prompt engineering connects across educational applications',
    content: {
      overview: 'Understand how prompt engineering integrates with all aspects of AI in education.',
      features: [
        'Cross-chapter connections',
        'Holistic implementation',
        'Best practice synthesis',
        'Workflow optimization',
        'System integration'
      ],
      resources: [
        {
          title: 'Integration Map',
          description: 'Visual guide to connecting prompt engineering across chapters',
          type: 'guide'
        },
        {
          title: 'Case Studies',
          description: 'Real-world examples of integrated implementations',
          type: 'guide'
        }
      ]
    }
  },

  // Chapter 4 - AI Planning
  {
    id: 'planning-toolkit',
    path: '/planning-toolkit',
    title: 'Complete AI Planning Toolkit',
    chapter: 'Chapter 4 - AI Planning',
    description: 'Complete collection of prompts, templates, LaTeX examples, and video tutorials for AI-assisted planning',
    content: {
      overview: 'Access everything you need for AI-assisted educational planning in one place.',
      features: [
        'Lesson plan templates',
        'Curriculum mapping tools',
        'Assessment planning',
        'LaTeX formatting',
        'Time management tools'
      ],
      resources: [
        {
          title: 'Planning Templates',
          description: 'Ready-to-use templates for all planning needs',
          type: 'template'
        },
        {
          title: 'LaTeX Examples',
          description: 'Professional document formatting with LaTeX',
          type: 'template'
        },
        {
          title: 'Video Tutorials',
          description: 'Step-by-step planning tutorials',
          type: 'video'
        }
      ]
    }
  },

  // Chapter 5 - Content Creation
  {
    id: 'chapter5_ex1',
    path: '/chapter5_ex1',
    title: 'Complete Example: IB Mathematics Paper Generation',
    chapter: 'Chapter 5 - Content Creation',
    description: 'Complete demonstration of IB Mathematics Paper 1 generation including source materials, prompts, and professional LaTeX output',
    content: {
      overview: 'See a complete example of generating IB Mathematics papers using AI, from concept to final LaTeX output.',
      features: [
        'Source material examples',
        'Prompt sequences',
        'LaTeX formatting',
        'Quality control checklist',
        'Mark schemes'
      ],
      resources: [
        {
          title: 'IB Math Templates',
          description: 'Templates for different IB Mathematics paper types',
          type: 'template'
        },
        {
          title: 'Generation Tutorial',
          description: 'Complete walkthrough of paper generation process',
          type: 'video'
        }
      ]
    }
  },

  // Chapter 6 - Web Development
  {
    id: 'education-discounts',
    path: '/education-discounts',
    title: 'Complete Educational Discount Resource Hub',
    chapter: 'Chapter 6 - Web Development',
    description: 'Comprehensive database of educational discounts, step-by-step registration guides, and verification processes',
    content: {
      overview: 'Access all available educational discounts for web development tools and services.',
      features: [
        'Discount database',
        'Eligibility requirements',
        'Registration guides',
        'Verification help',
        'Renewal reminders'
      ],
      resources: [
        {
          title: 'Discount Directory',
          description: 'Complete list of educational discounts available',
          type: 'guide'
        },
        {
          title: 'Registration Helper',
          description: 'Step-by-step guides for each platform',
          type: 'guide'
        }
      ]
    }
  },

  {
    id: 'chapter6-ess-prompt',
    path: '/chapter6-ess-prompt',
    title: 'Complete ESS Data Explorer Prompt',
    chapter: 'Chapter 6 - Web Development',
    description: 'Complete, detailed prompt for Environmental Systems & Societies Mathematical Data Explorer',
    content: {
      overview: 'Access the complete prompt and resources for building an ESS Data Explorer application.',
      features: [
        'Full prompt template',
        'Data structure examples',
        'UI/UX guidelines',
        'Integration instructions',
        'Deployment guide'
      ],
      resources: [
        {
          title: 'ESS Prompt Template',
          description: 'Complete prompt for generating ESS applications',
          type: 'template'
        },
        {
          title: 'Example Projects',
          description: 'See working ESS Data Explorer implementations',
          type: 'tool'
        }
      ]
    }
  },

  {
    id: 'chapter6-bolt',
    path: '/chapter6-bolt',
    title: 'Bolt.new ESS Data Explorer',
    chapter: 'Chapter 6 - Web Development',
    description: 'Platform-specific implementation example',
    content: {
      overview: 'Learn to implement the ESS Data Explorer using Bolt.new platform.',
      features: [
        'Platform setup',
        'Implementation guide',
        'Customization options',
        'Deployment process',
        'Live examples'
      ],
      resources: [
        {
          title: 'Bolt.new Guide',
          description: 'Complete guide for using Bolt.new',
          type: 'guide'
        },
        {
          title: 'Live Demo',
          description: 'See the ESS Data Explorer running on Bolt.new',
          url: 'https://bolt.new',
          type: 'tool'
        }
      ]
    }
  },

  {
    id: 'chapter6-lovable',
    path: '/chapter6-lovable',
    title: 'Lovable.dev ESS Data Explorer',
    chapter: 'Chapter 6 - Web Development',
    description: 'Platform-specific implementation example',
    content: {
      overview: 'Build the ESS Data Explorer using Lovable.dev\'s AI-powered development platform.',
      features: [
        'AI-assisted development',
        'Visual editing',
        'Real-time preview',
        'Collaboration features',
        'Export options'
      ],
      resources: [
        {
          title: 'Lovable.dev Tutorial',
          description: 'Step-by-step implementation guide',
          type: 'guide'
        },
        {
          title: 'Platform Access',
          description: 'Get started with Lovable.dev',
          url: 'https://lovable.dev',
          type: 'tool'
        }
      ]
    }
  },

  {
    id: 'chapter6-base44',
    path: '/chapter6-base44',
    title: 'Base44 ESS Data Explorer',
    chapter: 'Chapter 6 - Web Development',
    description: 'Platform-specific implementation example',
    content: {
      overview: 'Implement the ESS Data Explorer using Base44 development platform.',
      features: [
        'Quick deployment',
        'Template library',
        'Custom components',
        'API integration',
        'Hosting included'
      ],
      resources: [
        {
          title: 'Base44 Implementation',
          description: 'Complete implementation walkthrough',
          type: 'guide'
        }
      ]
    }
  },

  {
    id: 'chapter6-create',
    path: '/chapter6-create',
    title: 'Create.xyz ESS Data Explorer',
    chapter: 'Chapter 6 - Web Development',
    description: 'Platform-specific implementation example',
    content: {
      overview: 'Use Create.xyz to build and deploy the ESS Data Explorer application.',
      features: [
        'No-code options',
        'AI assistance',
        'Template marketplace',
        'Custom domains',
        'Analytics included'
      ],
      resources: [
        {
          title: 'Create.xyz Guide',
          description: 'Build your ESS Explorer on Create.xyz',
          type: 'guide'
        }
      ]
    }
  },

  {
    id: 'chapter6-replit',
    path: '/chapter6-replit',
    title: 'Replit ESS Data Explorer',
    chapter: 'Chapter 6 - Web Development',
    description: 'Platform-specific implementation example',
    content: {
      overview: 'Develop the ESS Data Explorer in Replit\'s collaborative coding environment.',
      features: [
        'Online IDE',
        'Multiplayer coding',
        'Instant hosting',
        'Database integration',
        'Educational plans'
      ],
      resources: [
        {
          title: 'Replit Tutorial',
          description: 'Complete Replit implementation guide',
          type: 'guide'
        },
        {
          title: 'Starter Template',
          description: 'Fork our Replit template to get started',
          url: 'https://replit.com',
          type: 'template'
        }
      ]
    }
  },

  {
    id: 'chapter6-manus',
    path: '/chapter6-manus',
    title: 'Manus ESS Data Explorer',
    chapter: 'Chapter 6 - Web Development',
    description: 'Platform-specific implementation example',
    content: {
      overview: 'Build the ESS Data Explorer using Manus development platform.',
      features: [
        'Visual development',
        'Component library',
        'Responsive design',
        'SEO optimization',
        'Performance tools'
      ],
      resources: [
        {
          title: 'Manus Guide',
          description: 'Implementation guide for Manus platform',
          type: 'guide'
        }
      ]
    }
  },

  {
    id: 'chapter6-resources',
    path: '/chapter6-resources',
    title: 'Complete Chapter 6 Resource Hub',
    chapter: 'Chapter 6 - Web Development',
    description: 'Comprehensive resources including platform examples, deployment guides, advanced tutorials, template prompts, and community forums',
    content: {
      overview: 'Access all Chapter 6 resources in one place, from basic tutorials to advanced implementations.',
      features: [
        'All platform guides',
        'Deployment tutorials',
        'Advanced techniques',
        'Community support',
        'Code examples'
      ],
      resources: [
        {
          title: 'Resource Library',
          description: 'Complete collection of Chapter 6 materials',
          type: 'guide'
        },
        {
          title: 'Community Forum',
          description: 'Connect with other educators building web apps',
          type: 'community'
        }
      ]
    }
  },

  // Chapter 7 - AI Ethics
  {
    id: 'ethics-resources',
    path: '/ethics-resources',
    title: 'Comprehensive AI Ethics Resource Hub',
    chapter: 'Chapter 7 - AI Ethics',
    description: 'UNESCO framework implementation guides, bias detection tools, privacy compliance checklists, cybersecurity protocols, and ethical framework templates',
    content: {
      overview: 'Everything you need to implement ethical AI practices in education.',
      features: [
        'UNESCO framework guides',
        'Bias detection tools',
        'Privacy checklists',
        'Security protocols',
        'Ethical templates'
      ],
      resources: [
        {
          title: 'Ethics Framework',
          description: 'Complete ethical framework for AI in education',
          type: 'guide'
        },
        {
          title: 'Bias Detection Toolkit',
          description: 'Tools to identify and mitigate AI bias',
          type: 'tool'
        },
        {
          title: 'Privacy Compliance',
          description: 'GDPR, COPPA, and FERPA compliance guides',
          type: 'guide'
        }
      ]
    }
  },

  // Chapter 8 - Future Readiness
  {
    id: 'future-ready',
    path: '/future-ready',
    title: 'Continue Your Journey',
    chapter: 'Chapter 8 - Future Readiness',
    description: 'Ongoing resources, community connections, and updated guidance for future-ready teachers',
    content: {
      overview: 'Stay connected and continue growing as an AI-empowered educator.',
      features: [
        'Latest updates',
        'Community events',
        'Advanced workshops',
        'Research insights',
        'Career pathways'
      ],
      resources: [
        {
          title: 'Update Hub',
          description: 'Latest developments in AI for education',
          type: 'guide'
        },
        {
          title: 'Community Network',
          description: 'Connect with future-ready educators worldwide',
          type: 'community'
        }
      ]
    }
  }
];

// Helper function to find resource by path
export const findResourceByPath = (path: string): BookResource | undefined => {
  return bookResources.find(resource => resource.path === path);
};

// Helper function to get resources by chapter
export const getResourcesByChapter = (chapter: string): BookResource[] => {
  return bookResources.filter(resource => resource.chapter === chapter);
};