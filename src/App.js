import React, {useState, useEffect} from 'react';
import './App.css';
import Formulario from './components/Formulario.js';
import ListadoNoticias from './components/ListadoNoticias.js';

function App() {

  const [categoria, guardarCategoria] = useState('general');
  const [news, guardarNoticias] = useState([]);
  const [cargar, setCargar] = useState(false)

  useEffect(() => {
    setCargar(true)
    const ConultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=e0c743764f904e5da16721625e87820e`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
      setCargar(false)
    }
    ConultarApi();
  }, [categoria]);


  const aria = (cargar) ? <p>Cargando</p> :
        <ListadoNoticias
          news={news}
        />
  ;


  return (
    <React.Fragment>
      <nav>
        Noticia
      </nav>
      <div >
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        {aria}
      </div>
      <footer>Encuentra las últimas noticias <span>@copyright 2021</span></footer>
      </React.Fragment>
      );
}

export default App;
