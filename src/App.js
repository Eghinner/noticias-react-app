import React, {useState, useEffect} from 'react';
import './App.css';
import Formulario from './components/Formulario.js';
import ListadoNoticias from './components/ListadoNoticias.js';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const ConultarApi = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=e0c743764f904e5da16721625e87820e`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    ConultarApi();
  }, [categoria]);

  return (
    <React.Fragment>
      <nav>
        Noticia
      </nav>
      <div >
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
      <footer>Encuentra las últimas noticias <span>@copyright 2021</span></footer>
      </React.Fragment>
      );
}

export default App;
