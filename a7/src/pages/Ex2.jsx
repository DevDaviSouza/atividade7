import { useState } from "react"

export default function Ex2() {
  const [cor, setCor] = useState('')
  
  function gerarCorHexadecimalAleatoria() {
    const caracteres = '0123456789ABCDEF';
    let novaCor = '#';
    for (let i = 0; i < 6; i++) {
      novaCor += caracteres[Math.floor(Math.random() * 16)];
    }
    setCor(novaCor);
  }

  console.log(cor);
  
  return (
    <div className="container" style={{backgroundColor: cor}}>
      <h1 className="text-white">Exercício 2</h1>

      <button onClick={gerarCorHexadecimalAleatoria}>Alterar fundo</button>
    </div>
  )
}