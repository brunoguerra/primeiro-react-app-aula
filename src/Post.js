import React from 'react'

class Author extends React.Component {
  state = {
    author: {}
  }
  componentDidMount() {
    const authorId = this.props.authorId

    fetch('https://jsonplaceholder.typicode.com/users/'+authorId)
    .then(response => response.json())
    .then(author => this.defineAuthor(author))
  }

  defineAuthor(author) {
    this.setState({
      author: author
    })
  }

  render() {
    const author = this.state.author

    return <li>{author.name}</li>
  }
}

export default class Post extends React.Component {
  state = {
    clicado: false,
    authors: [
      {
        name: 'João',
      },
      {
        name: 'Paulo'
      },
      {
        name: 'Jorge'
      },
    ]
  }

  clicou = () => {
    const clicado = this.state.clicado
    const dados = this.props.dados
    
    this.setState({
      clicado: !clicado,
    })

    
  }

  render() {
    console.log('Post.rendering...', this.state)
    const clicado = this.state.clicado
    const authorId = this.props.dados.userId

    return (
      <div className="container" onClick={this.clicou}>
        <h6 className="post-title">{this.props.dados.title}</h6>
        <div className="container-content">
          <div className="post-content">
            {this.props.dados.body}
          </div>
          {clicado && 
          <ul className="authors">
            <Author authorId={authorId} />
            
          </ul>
          }
        </div>
      </div>
    )
  }
}