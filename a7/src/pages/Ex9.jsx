import { useEffect, useState } from "react";

export default function Ex9() {
  const [tempo, setTempo] = useState(0); // Tempo em segundos
  const [tempoRestante, setTempoRestante] = useState(0); // Tempo restante
  const [emExecucao, setEmExecucao] = useState(false); // Controla se o timer está em execução
  const [intervalo, setIntervalo] = useState(null); // Intervalo para decrementar o tempo

  const iniciarTimer = () => {
    if (tempo > 0) {
      setTempoRestante(tempo); // Inicializa o tempo restante com o valor do tempo
      setEmExecucao(true);
    }
  };

  const pausarTimer = () => {
    clearInterval(intervalo);
    setEmExecucao(false);
  };

  const reiniciarTimer = () => {
    clearInterval(intervalo);
    setTempoRestante(tempo); // Reinicia o tempo restante para o valor inicial
    setEmExecucao(false);
  };

  useEffect(() => {
    if (emExecucao && tempoRestante > 0) {
      const novoIntervalo = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);

      setIntervalo(novoIntervalo);

      return () => clearInterval(novoIntervalo); // Limpa o intervalo quando o componente é desmontado
    }

    if (tempoRestante === 0 && emExecucao) {
      alert('O tempo acabou!');
      pausarTimer(); // Pausa o timer quando o tempo chega a zero
    }
  }, [emExecucao, tempoRestante]);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <label htmlFor="tempo">Defina o tempo em segundos:</label>
        <input
          id="tempo"
          type="number"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          min="1"
        />
      </div>

      <div>
        <h2>Tempo restante: {tempoRestante}s</h2>
      </div>

      <div>
        <button onClick={iniciarTimer} disabled={emExecucao || tempo === 0}>
          Iniciar
        </button>
        <button onClick={pausarTimer} disabled={!emExecucao}>
          Pausar
        </button>
        <button onClick={reiniciarTimer}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}