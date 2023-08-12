import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import './App.scss';
import axios from 'axios';


export default function App() {

  const [filme, setFilme] = useState('')
  const [listaFilme, setListaFilmes] = useState([])

  async function Buscar() {

    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c1e06d02&s=' + filme;
    let resposta = await axios.get(url);
    setListaFilmes(resposta.data.Search)
  }


  return (
    <div className="App">
      <header>
        <Cabecalho />
      </header>
      <div className='tudo'>
        <div className='container'>
          <div className='imagem'>
            <h1>IMDB</h1>
          </div>
          <div className='textos'>
            <h1>Consulta de Filmes</h1>

            <div className='inpuut'>

              <div className='tikao'>
                <label>Nome</label>
                <input type='text' value={filme} placeholder='Rush' onChange={e => setFilme(e.target.value)} />
              </div>

              <img onClick={Buscar} src='/assets/images/icon-buscar.png' />
            </div>
          </div>

          <div className='lista'>
            <table>
              <thead>
                <tr>
                  <th >Codigo</th>
                  <th> Nome</th>
                  <th >Ano</th>
                </tr>
              </thead>
              <tbody id='kyan'>
                {listaFilme.map(item =>
                  <tr>
                    <td id='derek'>{item.imdbID}</td>
                    <td>{item.Title}</td>
                    <td>{item.Year}</td>
                  </tr>
                )
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}



