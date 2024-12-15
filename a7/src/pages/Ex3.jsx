import { useState } from "react";
import "../styles/ex3.css"; // Importando o arquivo CSS separado

export default function Ex3() {
  const [tarefas, setTarefas] = useState([]); // Lista de tarefas
  const [tarefa, setTarefa] = useState(''); // Texto da tarefa
  const [filtro, setFiltro] = useState('todas'); // Filtro: todas, pendentes, concluídas

  // Adicionar uma nova tarefa
  function adicionarTarefa() {
    if (tarefa.trim() === '') return;
    const novaTarefa = { id: Date.now(), texto: tarefa, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
    setTarefa('');
  }

  // Remover uma tarefa
  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  // Alternar estado (concluída/pendente) de uma tarefa
  function alternarConclusao(id) {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  // Filtrar tarefas conforme o filtro selecionado
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'pendentes') return !tarefa.concluida;
    if (filtro === 'concluidas') return tarefa.concluida;
    return true; // Mostrar todas
  });

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      {/* Input e botão para adicionar tarefa */}
      <div className="input-container">
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {/* Filtros */}
      <div className="filters">
        <button
          onClick={() => setFiltro('todas')}
          className={`filter-btn ${filtro === 'todas' ? 'active' : ''}`}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro('pendentes')}
          className={`filter-btn ${filtro === 'pendentes' ? 'active' : ''}`}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFiltro('concluidas')}
          className={`filter-btn ${filtro === 'concluidas' ? 'active' : ''}`}
        >
          Concluídas
        </button>
      </div>

      {/* Lista de tarefas */}
      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <li
            key={tarefa.id}
            className={tarefa.concluida ? 'completed' : ''}
          >
            <span onClick={() => alternarConclusao(tarefa.id)}>
              {tarefa.texto}
            </span>
            <button onClick={() => removerTarefa(tarefa.id)} className="remove-btn">
              Remover
            </button>
          </li>
        ))}
      </ul>

      {/* Mensagem para lista vazia */}
      {tarefasFiltradas.length === 0 && (
        <p className="empty-message">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}
