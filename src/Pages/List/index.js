import React from 'react';
import './style.css'
import '../../index.css';

export default function Lista({filme}){
  return(
    <div className="card">
      <img className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${filme.poster_path}`}
        alt={filme.title + ' poster'}/>
      <div className="card--content">
        <h3 className="card--title">{filme.title}</h3>
        <p><small>Data de Lançamento: {filme.release_date !== "" ? new Date(filme.release_date+'T00:00:00').toLocaleDateString(): "Em breve"}</small></p>
        <p><small>Nota de Avaliação: {filme.vote_average}</small></p>
        <p className="card--desc">{filme.overview}</p>
        </div>
    </div>
  )
}