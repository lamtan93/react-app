import React from 'react';
import './App.css';
import MovieList from './movieList/MovieList';
/**
 *Lesson "Fragment"
 *Cela nous permet de render des composant sans avoir besoin des balise HTML root ouverte et fermé
 *Ex: 
 *<div>
 *  <ComposantA>
 *  <ComposantB/>
 *</div>
 *Utilité : ne plus voir les élément root dans html rendu et par ex lors de la render un tableau 
 <table>
  <tbody>
    <tr>
      <Composant_td> //Le composant qui contient un fragment que des <td></td> sans l'élément root html
    </tr>
  </tbody>
 </table>

 const Composant_td = (props)=>{
   return(
     <> //-> <React.Fragment>
      <td>Celulle_1</td>
      <td>Celulle_2</td>
     </>
   )
 }
 */

const Header = (props) =>{
  return(
    <div>Header</div>
  )
}

const Footer = (props)=>{
  return(
    <div>Footer</div>
  )
}

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
        <React.Fragment>
        <Header/>
        <Article>
          <div>Article1</div>
          <div>Article2</div>
        </Article>
        <Footer/>
        </React.Fragment>
      
    )
  }
}


;
