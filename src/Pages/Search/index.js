import React, {useState} from "react";
import './style.css';
import Lista from '../List';
import '../../index.css';
//useState é gerenciar o estado em um componente funcional.
//componente funcional

export default function Search(){
    //states - input query e filmes.
    //primeiro o estado que quero controlar e o segundo a função que seta o valor.
    const [busca, setBusca] = useState('');
    const [filmes, setFilmes] = useState([]);
    const buscarFilme = async (e) =>{
        e.preventDefault();
       
        const url = `https://api.themoviedb.org/3/search/movie?api_key=56f5cc318d39735e14b9341abc89085c&language=pt-BR&query=${busca}&page=1&include_adult=false`;

        //await para esperar a requisição terminar.
        //try catch para retornar um erro caso uma requisição não proceda corretamente.
        try {
            const res = await fetch(url);
            const data = await res.json();
            setFilmes(data.results);
        } catch (error) {
            console.log(error)
        }
        
    }
    //criar uma tag vazia para conseguir no retorno ter mais de uma tag, pois o returno apenas permite ter um parent tag 
    //usar -- para nomear uma classe que tenha o mesmo prefixo de uma tag pai.
    return(
            <>
                <form className="form" onSubmit={buscarFilme}>
                    { /* htmlFor é para manter a label associada ao elemento correto. */ }
                    <label htmlFor="busca" className="label">Nome do Filme:</label>
                    {/* e é o evento, target é o próprio campo, value é o valor que o evento está produzindo. */}
                    <input className="input" type="text" name="busca" placeholder="Ex: Indiana Jones" 
                        onChange={(e) => setBusca(e.target.value)}
                    />
                    <button className="button" type="submit"><b>Enviar</b></button>
                </form>
                <div className="card-list">
                    {/* o filtro serve para fazer o map apenas entre os filmes com poster. 
                        a tag small dentro do parágrafo é para que os elementos dentro sejam menores.
                    */}
                    {filmes.filter(filme => filme.poster_path).sort((a, b) => !a.release_date ? 1 : (!b.release_date ? -1 : (a.release_date.localeCompare(b.release_date)))).map(filme=>(
                        <Lista key={filme.id} filme={filme}/>
                    ))}
                </div>
            </>
    )
}