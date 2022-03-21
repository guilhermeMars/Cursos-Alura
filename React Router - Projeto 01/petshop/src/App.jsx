import React from "react";
import "./assets/css/base/base.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min"; // Chama BrowserRouter de Router
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./assets/css/componentes/Cabecalho";
import Post from "./paginas/Post";
import Categoria from "./paginas/Categoria";

// Route - Envelopa o componente
// SPA (Single Page Aplication) - Ao fazer uma requisição, o servidor devolve todo o index HTML e o JS faz toda a troca de páginas

function App() {
  return (
    <>
      <Router>
        <Cabecalho /> {/* Por conta de estar em cima dos switch's, ele renderiza em todos */}
        <Switch> {/* Faz com que, quando encontrar a path, pare de procurar outros iguais */}
          <Route exact path="/"> {/* Precisa ser exatamente /*/}
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/categoria/:id">
            <Categoria/>
          </Route>
          <Route path="/posts/:id"> {/* Caso o id seja o mesmo do post, ele renderiza toda a pagina */}
            <Post />
          </Route>
          <Route>
            <Pagina404/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
