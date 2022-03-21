import React, { useState, useEffect } from "react";
import ListaCategorias from "../assets/css/componentes/ListaCategorias";
import ListaPost from "../assets/css/componentes/ListaPost";
import "../assets/css/blog.css";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";
import { busca } from "../api/api";
import SubCategoria from "../paginas/SubCategorias";

function Categoria() {
  const { id } = useParams(); // Pega o id e retorna qual a rota
  const { url, path } = useRouteMatch(); // Url - Retorna a ulr. Path - Retorna qual o path (caminho) na url
  const [subCategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      // Passa na api para buscar os post's
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subCategorias.map((subcategoria) => {
          return (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}> {/* Rota aninhada - rota dentro de outra rota (home) */}
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
}

export default Categoria;
