import React from 'react';
import './App.css';
import MovieList from './movieList/MovieList';
import PropTypes from 'prop-types';
/**
 *Lesson "PropsTypes"
 *Dans le composant qui reçoit les props(après avoir été instancié dans un autre composant)
 *Ces props reçues sont mise sous controle par PropTypes de React
 *PropTypes est un objet créé par nous meme, dedans défini les types attendus pour chaque props reçu
 *Ex: adress: PropTypes.string
 *    price: PropTypes.number
 * ect... 
 * Dans l'ex ci-dessous, la props passé dans le composant Article est <price>
 * pour cette prop, on attend une valeur de tye number
 * Si dans le composant Parent où instancie le composant enfant Article et lui passe une 
 * prop de type par exemple String => Une erreur sera générée
 * Error: Warning: Failed prop type: Invalid prop `price` of type `string` supplied to `Article`, expected `number`.
 *
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
    console.log(props)
  }

  render(){
    return (
      <div>
        Le contenu de l'article <br/>
        <span>Adress:</span> {this.props.price}
        
      </div>
    )
  }

}
Article.propTypes = {
  price : PropTypes.number
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
      isOpen : true,
      myCats: ['noir', 'corgi', 'camille'],
      adress: <div>3 rue Froissart 59000 Lille</div>,
      price: '350000',
      codePostal: '59000',
      visite: ()=>{
        console.log('function visite');
      }
      
    }
  }
 
    
  render(){
   
    return (
        <React.Fragment>
        <Header/>
        <Article price={this.state.price}>
          <div>Article1</div>
          <div>Article2</div>
        </Article>
        <Footer/>
        </React.Fragment>
      
    )
  }
}


;
