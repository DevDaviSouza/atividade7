import { useState } from "react";
import '../styles/ex10.css'

export default function Ex10() {
  const [abaAtiva, setAbaAtiva] = useState('sobre'); // Estado para controlar qual aba está ativa

  // Funções para definir a aba ativa
  const selecionarAba = (aba) => {
    setAbaAtiva(aba);
  };

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => selecionarAba('sobre')}
          className={`tab ${abaAtiva === 'sobre' ? 'ativa' : ''}`}
        >
          Sobre
        </button>
        <button
          onClick={() => selecionarAba('contato')}
          className={`tab ${abaAtiva === 'contato' ? 'ativa' : ''}`}
        >
          Contato
        </button>
      </div>

      <div className="conteudo">
        {abaAtiva === 'sobre' && (
          <div>
            <h2>Sobre</h2>
            <p>Este é o conteúdo da aba Sobre.</p>
          </div>
        )}
        {abaAtiva === 'contato' && (
          <div>
            <h2>Contato</h2>
            <p>Este é o conteúdo da aba Contato.</p>
          </div>
        )}
      </div>
    </div>
  );
}