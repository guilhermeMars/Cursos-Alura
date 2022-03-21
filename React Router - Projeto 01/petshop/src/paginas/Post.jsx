import React, { useEffect, useState } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { busca } from "../api/api";
import "../assets/css/post.css";

function Post() {
  let history = useHistory();
  const { id } = useParams(); // É responsável por fazer o match do id do post com o id da url
  const [posts, setPosts] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPosts).catch(() => {
      // Faz um get na API para requisitar o id. setPost atualiza o estado
      history.push("/404"); // Caso caia no catch (não encontre uma rota) ele coloca o /404
    });
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{posts.title}</h2>
        <p className="cartao__texto">{posts.body}</p>
      </article>
    </main>
  );
}

export default Post;
