import { useMemo, useState } from 'react';
import Button from '../../components/Button.jsx';
import PlatformShell from '../../platform/PlatformShell.jsx';
import { initialLeads } from '../../data/platformData.js';
import { readState, writeState } from '../../services/storage.js';

const fallback = { leads: initialLeads };

export default function CRMPage() {
  const [state, setState] = useState(() => readState(fallback));
  const [form, setForm] = useState({ name: '', segment: '', source: 'WhatsApp', status: 'Novo', value: 400, nextAction: 'Enviar primeira mensagem', notes: '' });

  const total = useMemo(() => state.leads.reduce((sum, lead) => sum + Number(lead.value || 0), 0), [state.leads]);

  function update(nextState) {
    setState(nextState);
    writeState(nextState);
  }

  function addLead(event) {
    event.preventDefault();
    if (!form.name.trim()) return;
    const lead = { ...form, id: `lead-${Date.now()}` };
    update({ ...state, leads: [lead, ...state.leads] });
    setForm({ name: '', segment: '', source: 'WhatsApp', status: 'Novo', value: 400, nextAction: 'Enviar primeira mensagem', notes: '' });
  }

  function setStatus(id, status) {
    update({ ...state, leads: state.leads.map((lead) => (lead.id === id ? { ...lead, status } : lead)) });
  }

  return (
    <PlatformShell
      title="CRM OrganizaPro"
      description="Uma esteira simples para não perder clientes: chamado, respondeu, interessado, proposta, fechado e follow-up."
      actions={<Button to="/admin/automacoes">Ver automações</Button>}
    >
      <div className="crmSummary">
        <article><strong>{state.leads.length}</strong><span>oportunidades</span></article>
        <article><strong>R$ {total}</strong><span>potencial total</span></article>
        <article><strong>{state.leads.filter((lead) => lead.status === 'Interessado').length}</strong><span>interessados</span></article>
      </div>
      <form className="leadForm" onSubmit={addLead}>
        <input placeholder="Nome do negócio" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Segmento" value={form.segment} onChange={(e) => setForm({ ...form, segment: e.target.value })} />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>Novo</option>
          <option>Aguardando resposta</option>
          <option>Interessado</option>
          <option>Diagnóstico</option>
          <option>Proposta enviada</option>
          <option>Fechado</option>
        </select>
        <button className="btn primary" type="submit">Adicionar lead</button>
      </form>
      <div className="crmTable">
        {state.leads.map((lead) => (
          <article key={lead.id} className="leadCard">
            <div>
              <strong>{lead.name}</strong>
              <span>{lead.segment || 'Sem segmento'} • {lead.source}</span>
            </div>
            <select value={lead.status} onChange={(e) => setStatus(lead.id, e.target.value)}>
              <option>Novo</option>
              <option>Aguardando resposta</option>
              <option>Interessado</option>
              <option>Diagnóstico</option>
              <option>Proposta enviada</option>
              <option>Fechado</option>
            </select>
            <p>{lead.nextAction}</p>
            <small>{lead.notes}</small>
            <b>R$ {lead.value}</b>
          </article>
        ))}
      </div>
    </PlatformShell>
  );
}
