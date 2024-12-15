import { useState } from "react";

const BoasVindas = ({ nome }) => {
  return <h2>Bem-vindo, {nome}!</h2>;
};

export default function Ex6() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações simples
    if (!nome || !email || !senha) {
      setMensagem('Por favor, preencha todos os campos.');
    } else {
      setMensagem('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}

      {/* Exibe mensagem de boas-vindas se o formulário for enviado corretamente */}
      {nome && email && senha && <BoasVindas nome={nome} />}
    </div>
  );
}

