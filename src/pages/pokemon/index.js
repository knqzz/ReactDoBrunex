import { useState } from 'react';
import './index.scss';
import axios from 'axios';


export default function Pokemon() {
    
    const [pokemons, setPokemons] = useState([]);

    async function buscarPokemons() {
        let url = 'https://pokeapi.co/api/v2/pokemon';

        let response = await axios.get(url);
        

        let listaPokemons = [];
        

        for (let item of response.data.results) {
            let pokemonResp = await axios.get(item.url);

            let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

            let tipos = 'Tipo: ';
            for 
            (let t of pokemonResp.data.types) {
                tipos = tipos + t.type.name + ",";
            }

            listaPokemons.push({
                nome: item.name,
                imagem: imagem,
                tipos: tipos

            })
        }

        setPokemons(listaPokemons);
    }

    return(
        <div className='pagina-Pokemon'>

            <div className='tudo'>

                <div className='cabecalho'>
                    <img src='/assets/images/logoPokedex 1.png' />
                    <button onClick={buscarPokemons}>Encontrar Pokémons</button>
                </div>

                <div className='Lista'>

                    {pokemons.map(item =>

                        <div className='td'> 
                            <div className='card-pokemon'>
                                <div className='imagem'>
                                <img src={item.imagem} />
                                </div>
                                <h1> {item.nome} </h1>
                                <p> {item.tipos} </p>
                            </div>
                        </div>

                        )}

                </div>
            </div>
        </div>
    )
}