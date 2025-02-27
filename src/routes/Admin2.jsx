import bancodadosFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import "./Home.css";
import "./NewPost.css";



const Admin2 = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response =

        await bancodadosFetch.get("/hatch")

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {

    await bancodadosFetch.delete(`/hatch/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="admin">
      <h1>Gerenciar veículos</h1>
      {posts.length === 0 ? (
        <p className="aguarde">Carregando conteúdo. Por favor, aguarde...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="infosapi"><span>Marca do veículo:</span> {post.marca}</h2>
            <h2 className="infosapi"><span>Modelo do veículo:</span> {post.modelo}</h2>
            <h2 className="infosapi"><span>Ano de fabricação:</span> {post.ano}</h2>
            <h2 className="infosapi"><span>Cor do veículo:</span> {post.cor}</h2>

            <div className="actions">
              <Link className="btn edit-btn" to={`/posts2/edit/${post.id}`}>
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin2;
