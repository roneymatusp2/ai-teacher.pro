# 🔑 Setup de 5 APIs de IA para Fallback

## **🥇 ORDEM ATUALIZADA (OpenAI Primeiro!)**

### **1. OpenAI (MODELO PRINCIPAL)**
- **Link**: https://platform.openai.com/api-keys
- **Modelo**: `gpt-4o-mini`
- **Custo**: ~$0.15 por 1M tokens
- **Limite**: Pago conforme uso
- **Variável**: `OPENAI_API_KEY`
- **Status**: ⭐ **SUA ESCOLHA PRINCIPAL**

### **2. Groq (Fallback #1 - GRÁTIS)**
- **Link**: https://console.groq.com/keys
- **Modelo**: `llama3-8b-8192`
- **Custo**: **GRÁTIS** até 6,000 requests/day
- **Limite**: Alta velocidade
- **Variável**: `GROQ_API_KEY`

### **3. Cohere (Fallback #2 - GRÁTIS)**
- **Link**: https://dashboard.cohere.com/api-keys
- **Modelo**: `command-light`
- **Custo**: **GRÁTIS** até 100 calls/mês
- **Limite**: Bom para resumos
- **Variável**: `COHERE_API_KEY`

### **4. Anthropic Claude (Fallback #3)**
- **Link**: https://console.anthropic.com/account/keys
- **Modelo**: `claude-3-haiku-20240307`
- **Custo**: ~$0.25 por 1M tokens
- **Limite**: $5 de crédito inicial
- **Variável**: `ANTHROPIC_API_KEY`

### **5. xAI Grok (Fallback #4)**
- **Link**: https://console.x.ai/team/api-keys
- **Modelo**: `grok-beta`
- **Custo**: $5 por 1M tokens
- **Limite**: Mais caro, só fallback final
- **Variável**: `GROK_API_KEY`

---

## **📊 NOVA ESTRATÉGIA (OpenAI First!)**

```
🥇 OpenAI (SUA PREFERÊNCIA) → Tenta primeiro
🥈 Groq (GRÁTIS) → Se OpenAI falhar
🥉 Cohere (GRÁTIS) → Se Groq falhar  
4️⃣ Claude (Médio) → Se Cohere falhar
5️⃣ Grok (Caro) → Último recurso
```

## **⚙️ Configuração no Supabase**

Vá em **Settings → Edge Functions → Environment Variables** e adicione:

```
OPENAI_API_KEY=sk-proj-sua-key...
GROQ_API_KEY=gsk_sua-key...
COHERE_API_KEY=sua-key...
ANTHROPIC_API_KEY=sk-ant-sua-key...
GROK_API_KEY=xai-sua-key...
```

## **🎯 Resultado Esperado**

- **OpenAI é usado em 95%+ dos casos** (sua preferência)
- **99.9% uptime** (4 modelos como backup)
- **Custo baixo** (OpenAI gpt-4o-mini é barato)
- **Qualidade** (OpenAI é reconhecidamente o melhor)
- **Fallbacks confiáveis** se OpenAI estiver indisponível

## **💰 Estimativa de Custo**

### **Se só usar OpenAI:**
- 1000 artigos/mês = ~$5-10/mês
- Muito barato e alta qualidade

### **Com fallbacks ativos:**
- 95% OpenAI + 5% outros = praticamente mesmo custo
- Groq/Cohere são gratuitos
- Claude/Grok só em emergências