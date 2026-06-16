import { useState } from 'react';
import Button from '../../components/Button.jsx';
import { navigateTo } from '../../utils/routes.js';

export default function LoginPage() {
  const [profile, setProfile] = useState('client');
  const [name, setName] = useState('Guilherme');

  function enter() {
    localStorage.setItem('organizapro-session', JSON.stringify({ name, profile, loggedAt: new Date().toISOString() }));
    navigateTo(profile === 'admin' ? '/admin' : '/cliente');
  }

  return (
    <section className="loginPage">
      <div className="container loginGrid">
        <div className="loginCopy">
          <span className="pill dark">Plataforma V5</span>
          <h1>Entre na Central OrganizaPro</h1>
          <p>Este é o primeiro MVP de plataforma: área do cliente, painel administrativo, CRM, automações e assistente IA em um fluxo só.</p>
          <div className="loginBenefits">
            <span>✓ Cliente acessa entregas e métodos</span>
            <span>✓ Admin gerencia leads e propostas</span>
            <span>✓ IA gera diagnóstico e ações</span>
          </div>
        </div>
        <div className="loginCard">
          <h2>Acesso rápido</h2>
          <p>Por enquanto é um login local para prototipar. Depois conectamos Supabase/Auth real.</p>
          <label>
            Nome
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Perfil
            <select value={profile} onChange={(event) => setProfile(event.target.value)}>
              <option value="client">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <Button onClick={enter} className="full">Entrar na plataforma</Button>
          <Button variant="ghost" to="/" className="full">Voltar ao site</Button>
        </div>
      </div>
    </section>
  );
}
