import React, { useState } from 'react';
import Modal from '../components/ModalEx8';

export default function Ex8(){
  const imagens = [
    'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Imagem+1',
    'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Imagem+2',
    'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Imagem+3',
    'https://via.placeholder.com/300x200/FF33A8/FFFFFF?text=Imagem+4',
  ];

  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  const navegaçãoImagem = (direção) => {
    const indexAtual = imagens.indexOf(imagemSelecionada);
    const próximoIndex = (indexAtual + direção + imagens.length) % imagens.length;
    setImagemSelecionada(imagens[próximoIndex]);
  };

  return (
    <div>
      <div className="galeria">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1}`}
            onClick={() => abrirModal(imagem)}
            style={{ cursor: 'pointer', margin: '10px', width: '300px' }}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <Modal
          imagemSelecionada={imagemSelecionada}
          fecharModal={fecharModal}
          navegaçãoImagem={navegaçãoImagem}
        />
      )}
    </div>
  );
};