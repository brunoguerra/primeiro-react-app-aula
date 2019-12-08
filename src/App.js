import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'

class App extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(listaDePosts => this.carregaListaDePosts(listaDePosts))
  }
  
  carregaListaDePosts(lista) {
    this.setState({
      posts: lista,
    })
  }
  
  render() {
    const totalDePosts = this.state.posts
    
    return (
      <div>
        <h1 className="title">Total de produtos {totalDePosts.length}</h1>
        
        {totalDePosts.map(post =>
          <Post dados={post} />
        )}
      </div>
    )
  }
}

export default App;
