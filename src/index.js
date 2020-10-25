import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Pages/Search'

class Main extends React.Component {
  render() {
    return (
      //container é para que a aplicação fique centralizada com espaço na direita e esquerda.
      <div className="container">
        <h1 className="title">Buscador de filmes</h1>
        <Search />
      </div>
      
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
