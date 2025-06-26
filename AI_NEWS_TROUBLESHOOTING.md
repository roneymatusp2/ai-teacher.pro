# 🔧 AI News System Troubleshooting Guide

## 🚨 Problema Identificado

O sistema de busca por AI News não está funcionando porque faltam algumas configurações essenciais.

## 🔍 Possíveis Causas

### 1. **Variáveis de Ambiente Ausentes** ❌
- Arquivo `.env` não existe ou está incompleto
- Variáveis do Supabase não configuradas

### 2. **Configuração do Supabase Incompleta** ❌
- Edge Functions não deployadas
- Tabelas do banco não criadas
- API Keys não configuradas

### 3. **Edge Functions Offline** ❌
- Functions `fetch-ai-news` e `process-ai-summaries` não funcionando
- Dependências de APIs externas (OpenAI, etc.) não configuradas

## 🛠️ Soluções

### **Solução 1: Criar Arquivo .env**

Crie um arquivo `.env` na raiz do projeto com:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_anon_aqui

# Para Edge Functions (opcional)
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key
OPENAI_API_KEY=sua_openai_key
```

### **Solução 2: Configurar Supabase**

1. **Instalar Supabase CLI:**
```bash
npm install -g supabase
```

2. **Login no Supabase:**
```bash
supabase login
```

3. **Linkar projeto:**
```bash
supabase link --project-ref SEU_PROJECT_REF
```

4. **Deploy das migrações:**
```bash
supabase db push
```

5. **Deploy das Edge Functions:**
```bash
supabase functions deploy fetch-ai-news
supabase functions deploy process-ai-summaries
```

### **Solução 3: Usar Ferramentas de Debug**

O sistema agora inclui ferramentas automáticas de diagnóstico:

1. **Acesse a página onde está o AI News**
2. **Se não aparecer notícias, verá um painel amarelo de troubleshooting**
3. **Clique em "System Diagnostic"** para ver o que está quebrado
4. **Clique em "Auto-Fix System"** para tentar correção automática
5. **Abra o Console (F12)** para ver detalhes técnicos

## 🔧 Debug Automático

### **System Diagnostic Button**
- ✅ Verifica configuração do Supabase
- ✅ Testa conexão com banco de dados  
- ✅ Verifica se tabelas existem
- ✅ Testa Edge Functions
- ✅ Mostra relatório completo no console

### **Auto-Fix System Button**
- 🔧 Cria fontes de notícias básicas se não existirem
- 🔧 Configura estrutura inicial
- 🔧 Mostra guia de variáveis de ambiente
- 🔧 Refresca sistema automaticamente

## 📊 Como Usar o Debug

1. **Vá para a página que contém AI News**
2. **Se não houver notícias, aparecerá:**
   ```
   🔧 AI News System Troubleshooting
   It looks like the AI News system might need configuration...
   
   [System Diagnostic] [Auto-Fix System]
   ```

3. **Clique "System Diagnostic"** primeiro
4. **Abra Console do navegador (F12 → Console)**
5. **Verá relatório como:**
   ```
   📊 AI News System Debug Summary:
   ==========================================
   Supabase Config: ❌
   Database Tables: ❌  
   Edge Functions: ❌
   Has News Data: ❌
   
   🐛 Errors:
     ❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY
   ==========================================
   ```

6. **Corrija os problemas mostrados**
7. **Execute "Auto-Fix System" se necessário**

## 🚀 Testando a Correção

Após corrigir:

1. **Execute diagnostic novamente**
2. **Deve ver:**
   ```
   Supabase Config: ✅
   Database Tables: ✅  
   Edge Functions: ✅
   Has News Data: ✅ (ou ❌ se ainda não há dados)
   ```

3. **Clique "Fetch Latest News" para buscar notícias**
4. **Sistema deve funcionar normalmente**

## 🆘 Se Ainda Não Funcionar

1. **Verifique logs do Supabase Dashboard**
2. **Teste Edge Functions manualmente no Supabase**
3. **Verifique se APIs externas (OpenAI) estão configuradas**
4. **Execute migrations do banco novamente**

## 📝 Notas Importantes

- **O sistema funciona sem AI News** - outras funcionalidades continuam ok
- **Debug tools só aparecem quando não há dados** - para não poluir interface
- **Console sempre mostra informações detalhadas** - mesmo quando está funcionando
- **Auto-fix é seguro** - só cria dados básicos, não modifica existentes

---

## ✅ Resultado Esperado

Quando funcionando corretamente, você verá:
- ✅ Lista de notícias AI atualizadas
- ✅ Botões de busca funcionando  
- ✅ Categorias filtráveis
- ✅ Artigos clicáveis
- ✅ Sistema de views funcionando