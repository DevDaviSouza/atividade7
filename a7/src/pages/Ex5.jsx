import { useState } from "react";

export default function Ex5() {
  const [filtro, setFiltro] = useState('');
  const nomes = ['Ana', 'Carlos', 'João', 'Maria', 'Paulo', 'Cláudia', 'Felipe'];

  const filtrarNomes = nomes.filter(nome => 
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar nomes"
        className="border p-2"
      />
      <ul>
        {filtrarNomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}