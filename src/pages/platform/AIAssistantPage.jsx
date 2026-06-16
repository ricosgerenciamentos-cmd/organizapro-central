import { useState } from 'react';
import Button from '../../components/Button.jsx';
import PlatformShell from '../../platform/PlatformShell.jsx';
import { aiTemplates } from '../../data/platformData.js';

function generateResponse({ business, segment, goal, template }) {
  const safeBusiness = business || 'seu negócio';
  const safeSegment = segment || 'pequenos negócios';
  const safeGoal = goal || 'melhorar presença digital e atendimento';

  return `Diagnóstico OrganizaPro para ${safeBusiness}\n\nSegmento: ${safeSegment}\nObjetivo: ${safeGoal}\nModelo escolhido: ${template}\n\n1. Primeira impressão\nOrganize a apresentação do negócio com uma bio clara, destaques simples, link de WhatsApp e uma página profissional.\n\n2. Oferta principal\nApresente um serviço ou combo fácil de entender. Para começar, use uma oferta direta com benefício claro e chamada para WhatsApp.\n\n3. Plano de ação de 7 dias\nDia 1: ajustar bio, foto e descrição.\nDia 2: configurar WhatsApp Business.\nDia 3: criar página de apresentação.\nDia 4: postar prova de trabalho/serviço.\nDia 5: chamar clientes e empreendedores.\nDia 6: fazer follow-up.\nDia 7: revisar respostas e melhorar a oferta.\n\n4. Mensagem comercial\nOlá, tudo bem? Vi seu negócio e acredito que dá para deixar sua presença digital mais profissional com site, Instagram e WhatsApp melhor organizados. Posso te mostrar uma ideia rápida?\n\n5. Próximo passo\nRegistrar esse contato no CRM, enviar proposta e acompanhar resposta em até 24 horas.`;
}

export default function AIAssistantPage() {
  const [form, setForm] = useState({ business: 'Barbearia Modelo', segment: 'Barbearia', goal: 'atrair mais clientes pelo Instagram e WhatsApp', template: aiTemplates[0] });
  const [result, setResult] = useState(() => generateResponse({ business: 'Barbearia Modelo', segment: 'Barbearia', goal: 'atrair mais clientes pelo Instagram e WhatsApp', template: aiTemplates[0] }));

  function submit(event) {
    event.preventDefault();
    setResult(generateResponse(form));
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(result);
      alert('Plano copiado.');
    } catch {
      alert(result);
    }
  }

  return (
    <PlatformShell
      title="Assistente IA OrganizaPro"
      description="Primeiro protótipo de inteligência: gera diagnóstico, plano, mensagem e próximos passos. Depois conectamos com uma API de IA real."
      actions={<Button onClick={copy}>Copiar resultado</Button>}
    >
      <div className="aiWorkspace">
        <form className="aiForm" onSubmit={submit}>
          <label>Nome do negócio<input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} /></label>
          <label>Segmento<input value={form.segment} onChange={(e) => setForm({ ...form, segment: e.target.value })} /></label>
          <label>Objetivo<input value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} /></label>
          <label>Tipo de saída
            <select value={form.template} onChange={(e) => setForm({ ...form, template: e.target.value })}>
              {aiTemplates.map((template) => <option key={template}>{template}</option>)}
            </select>
          </label>
          <button className="btn primary" type="submit">Gerar diagnóstico</button>
        </form>
        <pre className="aiResult">{result}</pre>
      </div>
    </PlatformShell>
  );
}
