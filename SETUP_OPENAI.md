# 🔑 Configurar OpenAI API Key

## **1. No Supabase Dashboard**

1. Vá para: **Settings → Edge Functions → Environment Variables**
2. Adicione a variável:
   ```
   Name: OPENAI_API_KEY
   Value: sk-proj-sua-api-key-aqui...
   ```

## **2. Obter API Key Gratuita/Barata**

### **OpenAI (Recomendado)**
- Site: https://platform.openai.com/api-keys
- Modelo: `gpt-4o-mini` (mais barato)
- Custo: ~$0.15 por 1M de tokens
- Para 1000 notícias/mês: ~$5-10

### **Alternativas GRATUITAS**
- **Groq**: https://groq.com/ (grátis + rápido)
- **Cohere**: https://cohere.ai/ (grátis até 100 calls/mês)
- **Anthropic**: https://anthropic.com/ (créditos iniciais)

## **3. Configuração no Edge Function**

Já está configurado para usar:
```typescript
const openaiApiKey = Deno.env.get('OPENAI_API_KEY')!
```

## **4. Teste Manual**

Após configurar, teste:
```bash
# No Supabase SQL Editor:
SELECT net.http_post(
  'https://sua-url.supabase.co/functions/v1/process-ai-summaries',
  '{"trigger": "manual"}'
);
```