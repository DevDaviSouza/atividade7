import { useEffect, useState } from "react";

export default function Ex7() {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const fetchPosts = async () => {
    setCarregando(true);
    setErro('');
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erro ao carregar os posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      {carregando && <p>Carregando...</p>}
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
      
      <button onClick={fetchPosts} disabled={carregando}>
        {carregando ? 'Recarregando...' : 'Recarregar Posts'}
      </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}