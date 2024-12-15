const ModalEx8 = ({ imagemSelecionada, fecharModal, navegaçãoImagem }) => {
  return (
    <div className="modal" style={modalStyle}>
      <div style={modalContentStyle}>
        <img src={imagemSelecionada} alt="Imagem ampliada" style={imagemStyle} />
        <button onClick={fecharModal} style={fecharButtonStyle}>
          Fechar
        </button>
        <button onClick={() => navegaçãoImagem(-1)} style={navButtonStyle}>
          Anterior
        </button>
        <button onClick={() => navegaçãoImagem(1)} style={navButtonStyle}>
          Próxima
        </button>
      </div>
    </div>
  );
};

// Estilos para o modal
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  position: 'relative',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
};

const imagemStyle = {
  maxWidth: '100%',
  maxHeight: '80vh',
  marginBottom: '20px',
};

const fecharButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  padding: '10px',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
};

const navButtonStyle = {
  padding: '10px',
  margin: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ModalEx8;