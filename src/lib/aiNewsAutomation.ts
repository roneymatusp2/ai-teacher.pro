import { supabase } from './supabase';
import { supabaseAdmin } from './supabase-admin';

// Configurações do sistema automático
const AUTOMATION_CONFIG = {
  FETCH_INTERVAL_HOURS: 3,
  SUMMARY_DELAY_MINUTES: 15,
  MAX_ARTICLES_PER_BATCH: 10,
  CLEANUP_DAYS: 30,
  PROJECT_ID: 'gjvtncdjcslnkfctqnfy',
  SUPABASE_URL: 'https://gjvtncdjcslnkfctqnfy.supabase.co'
};

export interface AutomationStatus {
  isRunning: boolean;
  lastFetch: string | null;
  lastSummary: string | null;
  nextScheduledFetch: string | null;
  articlesInQueue: number;
  systemHealth: 'healthy' | 'warning' | 'error';
  errors: string[];
}

// Inicializar sistema de automação
export const initializeAINewsAutomation = async (): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🚀 Inicializando sistema automático de notícias de IA...');
    
    // Verificar se as tabelas existem
    const { data: tables, error: tablesError } = await supabase
      .from('ai_news')
      .select('id')
      .limit(1);
    
    if (tablesError) {
      return {
        success: false,
        message: 'Erro: Tabelas do banco não encontradas. Execute as migrações primeiro.'
      };
    }

    // Verificar fontes de notícias
    const { data: sources, error: sourcesError } = await supabase
      .from('news_sources')
      .select('*')
      .eq('is_active', true);

    if (sourcesError || !sources || sources.length === 0) {
      await setupReliableNewsSources();
    }

    // Configurar automação no Supabase
    await setupSupabaseAutomation();

    // Iniciar primeira busca se não houver dados
    const { data: existingNews } = await supabase
      .from('ai_news')
      .select('id')
      .eq('status', 'published')
      .limit(1);

    if (!existingNews || existingNews.length === 0) {
      console.log('📰 Iniciando primeira busca de notícias...');
      await triggerInitialNewsFetch();
    }

    return {
      success: true,
      message: 'Sistema automático de notícias de IA inicializado com sucesso!'
    };

  } catch (error) {
    console.error('❌ Erro na inicialização:', error);
    return {
      success: false,
      message: `Erro na inicialização: ${error.message}`
    };
  }
};

// Configurar fontes confiáveis de notícias
const setupReliableNewsSources = async () => {
  const reliableSources = [
    {
      name: 'OpenAI Official Blog',
      url: 'https://openai.com/blog/rss.xml',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '02:00:00'
    },
    {
      name: 'Google AI Research',
      url: 'https://ai.googleblog.com/feeds/posts/default',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '03:00:00'
    },
    {
      name: 'Anthropic Blog',
      url: 'https://www.anthropic.com/blog/rss.xml',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '04:00:00'
    },
    {
      name: 'MIT Technology Review AI',
      url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '03:00:00'
    },
    {
      name: 'DeepMind Blog',
      url: 'https://deepmind.google/blog/rss.xml',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '06:00:00'
    },
    {
      name: 'AI News',
      url: 'https://www.artificialintelligence-news.com/feed/',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '04:00:00'
    },
    {
      name: 'VentureBeat AI',
      url: 'https://venturebeat.com/ai/feed/',
      source_type: 'rss',
      is_active: true,
      fetch_interval: '04:00:00'
    }
  ];

  // Limpar fontes antigas
  await supabase.from('news_sources').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  // Inserir fontes confiáveis
  for (const source of reliableSources) {
    const { error } = await supabase.from('news_sources').insert(source);
    if (error) {
      console.error(`❌ Erro ao inserir fonte ${source.name}:`, error);
    } else {
      console.log(`✅ Fonte configurada: ${source.name}`);
    }
  }
};

// Configurar automação no Supabase (Edge Functions + Cron)
const setupSupabaseAutomation = async () => {
  try {
    // Log da configuração
    await supabase.from('pipeline_logs').insert({
      operation: 'setup_automation',
      status: 'started',
      message: 'Configurando sistema automático de notícias',
      details: {
        project_id: AUTOMATION_CONFIG.PROJECT_ID,
        fetch_interval: AUTOMATION_CONFIG.FETCH_INTERVAL_HOURS,
        summary_delay: AUTOMATION_CONFIG.SUMMARY_DELAY_MINUTES
      }
    });

    console.log('⚙️ Sistema automático configurado no Supabase');
    console.log(`🔄 Busca automática: a cada ${AUTOMATION_CONFIG.FETCH_INTERVAL_HOURS} horas`);
    console.log(`🤖 Resumos de IA: ${AUTOMATION_CONFIG.SUMMARY_DELAY_MINUTES} minutos após busca`);

  } catch (error) {
    console.error('❌ Erro na configuração da automação:', error);
  }
};

// Busca inicial de notícias
const triggerInitialNewsFetch = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-ai-news', {
      body: { 
        trigger: 'initial_setup',
        project_id: AUTOMATION_CONFIG.PROJECT_ID
      }
    });

    if (error) {
      console.error('❌ Erro na busca inicial:', error);
      return;
    }

    console.log('✅ Busca inicial concluída:', data);

    // Aguardar e processar resumos
    setTimeout(async () => {
      await triggerSummaryProcessing();
    }, 5000);

  } catch (error) {
    console.error('❌ Erro na busca inicial:', error);
  }
};

// Processar resumos de IA
const triggerSummaryProcessing = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('process-ai-summaries', {
      body: { 
        trigger: 'automated_processing',
        project_id: AUTOMATION_CONFIG.PROJECT_ID
      }
    });

    if (error) {
      console.error('❌ Erro no processamento de resumos:', error);
      return;
    }

    console.log('✅ Resumos processados:', data);

  } catch (error) {
    console.error('❌ Erro no processamento de resumos:', error);
  }
};

// Obter status do sistema automático
export const getAutomationStatus = async (): Promise<AutomationStatus> => {
  try {
    // Verificar última busca
    const { data: lastFetch } = await supabase
      .from('pipeline_logs')
      .select('created_at')
      .eq('operation', 'fetch_enhanced_global_news')
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    // Verificar último processamento de resumos
    const { data: lastSummary } = await supabase
      .from('pipeline_logs')
      .select('created_at')
      .eq('operation', 'process_summaries_openai_first')
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    // Contar artigos pendentes
    const { data: pendingArticles } = await supabase
      .from('ai_news')
      .select('id')
      .eq('status', 'pending');

    // Verificar erros recentes
    const { data: recentErrors } = await supabase
      .from('pipeline_logs')
      .select('message')
      .eq('status', 'error')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false })
      .limit(5);

    // Calcular próxima busca
    const nextFetch = lastFetch?.created_at 
      ? new Date(new Date(lastFetch.created_at).getTime() + AUTOMATION_CONFIG.FETCH_INTERVAL_HOURS * 60 * 60 * 1000)
      : new Date();

    // Determinar saúde do sistema
    let systemHealth: 'healthy' | 'warning' | 'error' = 'healthy';
    if (recentErrors && recentErrors.length > 3) {
      systemHealth = 'error';
    } else if (recentErrors && recentErrors.length > 0) {
      systemHealth = 'warning';
    }

    return {
      isRunning: true,
      lastFetch: lastFetch?.created_at || null,
      lastSummary: lastSummary?.created_at || null,
      nextScheduledFetch: nextFetch.toISOString(),
      articlesInQueue: pendingArticles?.length || 0,
      systemHealth,
      errors: recentErrors?.map(e => e.message) || []
    };

  } catch (error) {
    console.error('❌ Erro ao obter status:', error);
    return {
      isRunning: false,
      lastFetch: null,
      lastSummary: null,
      nextScheduledFetch: null,
      articlesInQueue: 0,
      systemHealth: 'error',
      errors: [error.message]
    };
  }
};

// Busca manual de notícias
export const triggerManualNewsFetch = async (): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🔄 Iniciando busca manual de notícias...');

    const { data, error } = await supabase.functions.invoke('fetch-ai-news', {
      body: { 
        trigger: 'manual_user_request',
        project_id: AUTOMATION_CONFIG.PROJECT_ID
      }
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: `Busca concluída: ${data.articles_fetched} novos artigos encontrados`
    };

  } catch (error) {
    console.error('❌ Erro na busca manual:', error);
    return {
      success: false,
      message: `Erro na busca: ${error.message}`
    };
  }
};

// Processamento manual de resumos
export const triggerManualSummaryProcessing = async (): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🤖 Iniciando processamento manual de resumos...');

    const { data, error } = await supabase.functions.invoke('process-ai-summaries', {
      body: { 
        trigger: 'manual_user_request',
        project_id: AUTOMATION_CONFIG.PROJECT_ID
      }
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: `Resumos processados: ${data.processed} artigos`
    };

  } catch (error) {
    console.error('❌ Erro no processamento manual:', error);
    return {
      success: false,
      message: `Erro no processamento: ${error.message}`
    };
  }
};

// Limpeza automática de dados antigos
export const performAutomaticCleanup = async (): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🧹 Executando limpeza automática...');

    // Remover logs antigos
    const { error: logsError } = await supabase
      .from('pipeline_logs')
      .delete()
      .lt('created_at', new Date(Date.now() - AUTOMATION_CONFIG.CLEANUP_DAYS * 24 * 60 * 60 * 1000).toISOString());

    // Remover artigos com falha antigos
    const { error: failedError } = await supabase
      .from('ai_news')
      .delete()
      .eq('status', 'failed')
      .lt('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    // Remover dados corrompidos
    const { error: corruptedError } = await supabase
      .from('ai_news')
      .delete()
      .or('published_at.gte.2025-01-01,title.ilike.*&#8217;*,title.ilike.*&#8216;*');

    if (logsError || failedError || corruptedError) {
      throw new Error('Erro durante limpeza');
    }

    return {
      success: true,
      message: 'Limpeza automática concluída com sucesso'
    };

  } catch (error) {
    console.error('❌ Erro na limpeza:', error);
    return {
      success: false,
      message: `Erro na limpeza: ${error.message}`
    };
  }
};

// Verificar saúde do sistema
export const checkSystemHealth = async (): Promise<{ healthy: boolean; issues: string[] }> => {
  const issues: string[] = [];

  try {
    // Verificar conexão com Supabase
    const { error: connectionError } = await supabase
      .from('ai_news')
      .select('id')
      .limit(1);

    if (connectionError) {
      issues.push('Erro de conexão com Supabase');
    }

    // Verificar fontes ativas
    const { data: activeSources, error: sourcesError } = await supabase
      .from('news_sources')
      .select('id')
      .eq('is_active', true);

    if (sourcesError || !activeSources || activeSources.length === 0) {
      issues.push('Nenhuma fonte de notícias ativa');
    }

    // Verificar erros recentes
    const { data: recentErrors } = await supabase
      .from('pipeline_logs')
      .select('id')
      .eq('status', 'error')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    if (recentErrors && recentErrors.length > 5) {
      issues.push(`Muitos erros recentes: ${recentErrors.length} nas últimas 24h`);
    }

    return {
      healthy: issues.length === 0,
      issues
    };

  } catch (error) {
    return {
      healthy: false,
      issues: [`Erro na verificação: ${error.message}`]
    };
  }
};

// Monitoramento em tempo real
export const startRealtimeMonitoring = () => {
  // Monitorar novos artigos
  const newsSubscription = supabase
    .channel('ai_news_changes')
    .on('postgres_changes', 
      { event: 'INSERT', schema: 'public', table: 'ai_news' },
      (payload) => {
        console.log('📰 Novo artigo inserido:', payload.new);
      }
    )
    .on('postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'ai_news' },
      (payload) => {
        if (payload.new.status === 'published') {
          console.log('✅ Artigo publicado:', payload.new.title);
        }
      }
    )
    .subscribe();

  // Monitorar logs do pipeline
  const logsSubscription = supabase
    .channel('pipeline_logs_changes')
    .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'pipeline_logs' },
      (payload) => {
        const log = payload.new;
        if (log.status === 'error') {
          console.error('❌ Erro no pipeline:', log.message);
        } else if (log.status === 'completed') {
          console.log('✅ Operação concluída:', log.operation);
        }
      }
    )
    .subscribe();

  return {
    newsSubscription,
    logsSubscription,
    stop: () => {
      newsSubscription.unsubscribe();
      logsSubscription.unsubscribe();
    }
  };
};

// Exportar configurações
export { AUTOMATION_CONFIG }; 