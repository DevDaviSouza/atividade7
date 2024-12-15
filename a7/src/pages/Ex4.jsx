import { useEffect, useState } from "react";

export default function Ex4() {
  
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    let interval = null;

    if (ativo) {
      interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    } else if (!ativo && interval !== null) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [ativo]);

  function pausarTemporizador() {
    setAtivo(false);
  }

  function reiniciarTemporizador() {
    setSegundos(0);
    setAtivo(false);
  }

  function retomarTemporizador() {
    setAtivo(true);
  }

  return(
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Temporizador</h1>
      <p style={{ fontSize: "24px", margin: "20px 0" }}>{segundos} segundos</p>

      <button onClick={pausarTemporizador} style={buttonStyle}>
        Pausar
      </button>
      <button onClick={retomarTemporizador} style={buttonStyle}>
        Retomar
      </button>
      <button onClick={reiniciarTemporizador} style={buttonStyle}>
        Reiniciar
      </button>
    </div>
  )
}

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

buttonStyle[":hover"] = {
  backgroundColor: "#0056b3",
};
