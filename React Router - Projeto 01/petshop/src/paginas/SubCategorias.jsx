import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ListaPost from "../assets/css/componentes/ListaPost";

function SubCategoria() {
    const { subcategoria } = useParams();

  return <ListaPost url={`/posts?subcategoria=${subcategoria}`} />;
}

export default SubCategoria;
