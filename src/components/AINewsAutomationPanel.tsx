import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  initializeAINewsAutomation,
  getAutomationStatus,
  triggerManualNewsFetch,
  triggerManualSummaryProcessing,
  performAutomaticCleanup,
  checkSystemHealth,
  startRealtimeMonitoring,
  AutomationStatus,
  AUTOMATION_CONFIG
} from '../lib/aiNewsAutomation';

const AINewsAutomationPanel: React.FC = () => {
  const [status, setStatus] = useState<AutomationStatus | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCleaning, setIsCleaning] = useState(false);
  const [systemHealth, setSystemHealth] = useState<{ healthy: boolean; issues: string[] } | null>(null);
  const [realtimeMonitoring, setRealtimeMonitoring] = useState<any>(null);

  useEffect(() => {
    loadStatus();
    checkHealth();
    
    // Iniciar monitoramento em tempo real
    const monitoring = startRealtimeMonitoring();
    setRealtimeMonitoring(monitoring);

    // Atualizar status a cada 30 segundos
    const interval = setInterval(() => {
      loadStatus();
      checkHealth();
    }, 30000);

    return () => {
      clearInterval(interval);
      if (monitoring) {
        monitoring.stop();
      }
    };
  }, []);

  const loadStatus = async () => {
    try {
      const automationStatus = await getAutomationStatus();
      setStatus(automationStatus);
    } catch (error) {
      console.error('Erro ao carregar status:', error);
    }
  };

  const checkHealth = async () => {
    try {
      const health = await checkSystemHealth();
      setSystemHealth(health);
    } catch (error) {
      console.error('Erro ao verificar saúde:', error);
    }
  };

  const handleInitialize = async () => {
    setIsInitializing(true);
    try {
      const result = await initializeAINewsAutomation();
      if (result.success) {
        alert('✅ Sistema inicializado com sucesso!');
        await loadStatus();
      } else {
        alert(`❌ Erro na inicialização: ${result.message}`);
      }
    } catch (error) {
      alert(`❌ Erro: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsInitializing(false);
    }
  };

  const handleManualFetch = async () => {
    setIsFetching(true);
    try {
      const result = await triggerManualNewsFetch();
      if (result.success) {
        alert(`✅ ${result.message}`);
        await loadStatus();
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (error) {
      alert(`❌ Erro: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsFetching(false);
    }
  };

  const handleManualProcessing = async () => {
    setIsProcessing(true);
    try {
      const result = await triggerManualSummaryProcessing();
      if (result.success) {
        alert(`✅ ${result.message}`);
        await loadStatus();
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (error) {
      alert(`❌ Erro: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCleanup = async () => {
    setIsCleaning(true);
    try {
      const result = await performAutomaticCleanup();
      if (result.success) {
        alert(`✅ ${result.message}`);
        await loadStatus();
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (error) {
      alert(`❌ Erro: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsCleaning(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Nunca';
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getHealthColor = (health: 'healthy' | 'warning' | 'error') => {
    switch (health) {
      case 'healthy': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'error': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getHealthIcon = (health: 'healthy' | 'warning' | 'error') => {
    switch (health) {
      case 'healthy': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return '❓';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          🤖 Sistema Automático de Notícias IA
        </h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${status?.isRunning ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {status?.isRunning ? 'Ativo' : 'Inativo'}
          </span>
        </div>
      </div>

      {/* Configuração do Projeto */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🔧 Configuração</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-blue-600 dark:text-blue-400">Projeto ID:</span>
            <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">{AUTOMATION_CONFIG.PROJECT_ID}</span>
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">URL:</span>
            <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">{AUTOMATION_CONFIG.SUPABASE_URL}</span>
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">Busca automática:</span>
            <span className="ml-2 text-blue-800 dark:text-blue-200">A cada {AUTOMATION_CONFIG.FETCH_INTERVAL_HOURS}h</span>
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">Resumos IA:</span>
            <span className="ml-2 text-blue-800 dark:text-blue-200">{AUTOMATION_CONFIG.SUMMARY_DELAY_MINUTES}min após busca</span>
          </div>
        </div>
      </div>

      {/* Status do Sistema */}
      {status && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-4">📊 Status do Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-1">📰</div>
              <div className="font-semibold text-gray-900 dark:text-white">Última Busca</div>
              <div className="text-gray-600 dark:text-gray-400">{formatDate(status.lastFetch)}</div>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-1">🤖</div>
              <div className="font-semibold text-gray-900 dark:text-white">Último Resumo</div>
              <div className="text-gray-600 dark:text-gray-400">{formatDate(status.lastSummary)}</div>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-1">⏰</div>
              <div className="font-semibold text-gray-900 dark:text-white">Próxima Busca</div>
              <div className="text-gray-600 dark:text-gray-400">{formatDate(status.nextScheduledFetch)}</div>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-1">📋</div>
              <div className="font-semibold text-gray-900 dark:text-white">Fila</div>
              <div className="text-gray-600 dark:text-gray-400">{status.articlesInQueue} artigos</div>
            </div>
          </div>
          
          {/* Saúde do Sistema */}
          <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900 dark:text-white">Saúde do Sistema:</span>
              <span className={`flex items-center ${getHealthColor(status.systemHealth)}`}>
                {getHealthIcon(status.systemHealth)} {status.systemHealth.toUpperCase()}
              </span>
            </div>
            {status.errors.length > 0 && (
              <div className="mt-2">
                <div className="text-sm text-red-600 dark:text-red-400 font-medium">Erros Recentes:</div>
                <ul className="text-xs text-red-500 dark:text-red-400 mt-1">
                  {status.errors.slice(0, 3).map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Saúde Detalhada */}
      {systemHealth && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-4">🏥 Diagnóstico Detalhado</h3>
          <div className={`p-3 rounded-lg ${systemHealth.healthy ? 'bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-700' : 'bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-700'}`}>
            <div className={`font-medium ${systemHealth.healthy ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
              {systemHealth.healthy ? '✅ Sistema Saudável' : '❌ Problemas Detectados'}
            </div>
            {systemHealth.issues.length > 0 && (
              <ul className="mt-2 text-sm text-red-600 dark:text-red-400">
                {systemHealth.issues.map((issue, index) => (
                  <li key={index}>• {issue}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Controles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.button
          onClick={handleInitialize}
          disabled={isInitializing}
          className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isInitializing ? 1 : 1.05 }}
          whileTap={{ scale: isInitializing ? 1 : 0.95 }}
        >
          {isInitializing ? (
            <>
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Inicializando...
            </>
          ) : (
            <>
              🚀 Inicializar Sistema
            </>
          )}
        </motion.button>

        <motion.button
          onClick={handleManualFetch}
          disabled={isFetching}
          className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isFetching ? 1 : 1.05 }}
          whileTap={{ scale: isFetching ? 1 : 0.95 }}
        >
          {isFetching ? (
            <>
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Buscando...
            </>
          ) : (
            <>
              📰 Buscar Notícias
            </>
          )}
        </motion.button>

        <motion.button
          onClick={handleManualProcessing}
          disabled={isProcessing}
          className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isProcessing ? 1 : 1.05 }}
          whileTap={{ scale: isProcessing ? 1 : 0.95 }}
        >
          {isProcessing ? (
            <>
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Processando...
            </>
          ) : (
            <>
              🤖 Processar Resumos
            </>
          )}
        </motion.button>

        <motion.button
          onClick={handleCleanup}
          disabled={isCleaning}
          className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isCleaning ? 1 : 1.05 }}
          whileTap={{ scale: isCleaning ? 1 : 0.95 }}
        >
          {isCleaning ? (
            <>
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Limpando...
            </>
          ) : (
            <>
              🧹 Limpeza
            </>
          )}
        </motion.button>
      </div>

      {/* Informações Adicionais */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">ℹ️ Informações Importantes</h3>
        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• O sistema busca notícias automaticamente a cada {AUTOMATION_CONFIG.FETCH_INTERVAL_HOURS} horas</li>
          <li>• Os resumos são processados automaticamente {AUTOMATION_CONFIG.SUMMARY_DELAY_MINUTES} minutos após cada busca</li>
          <li>• A limpeza automática remove dados antigos a cada 30 dias</li>
          <li>• O monitoramento em tempo real está ativo e detecta mudanças automaticamente</li>
          <li>• Todas as operações são logadas no banco de dados para auditoria</li>
        </ul>
      </div>
    </div>
  );
};

export default AINewsAutomationPanel; 