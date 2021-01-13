import React from 'react';
import './App.css';
import MovieList from './movieList/MovieList';
/**
 *Lesson "Children"
 *Ce sont les éléments insérés à l'intérieur d'un composant 
 *Accessible via props.children
 */


class Article extends React.Component{
  constructor(props){
    super(props);
    console.log(props.children)
  }

  render(){
    return (
      <div>
        Le contenu de l'article
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
    )
  }
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
 
    
  render(){
    return (
      <div>
        <Article>
          <div>Article1</div>
          <div>Article2</div>
        </Article>
      </div>
    )
  }
}


;
