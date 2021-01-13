import React from 'react';
import './App.css';
import MovieList from './movieList/MovieList';

const Chat = (props)=>{
  return(
    <li ><span>Nom: </span>{props.chat.nom} - <span>Age: </span>{props.chat.age}
      <button onClick={props.supprimerUnChat}>Delete</button>
    </li>
    
  )
}

const HoraireContenueMagasin = (props) =>{
  return(
    <div>
    <h3>Bravo {props.name} </h3>
    <span>Magasin est ouvert</span>
    </div>
  )
}

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      ouvert: true,
      chats: [
        {
          nom: 'Corgi',
          age: 4,
          poids: '5kg'
        },
        {
          nom: 'Noir',
          age: 8,
          poids: '7kg'
        },
        {
          nom: 'Blanche',
          age: 2,
          poids: '1,5kg'
        }
      ]
    }
  }
  displayACat = (c)=>{
     return <div>c.name</div>
  }
    
  toggleInfosHoraireMagasin = () =>{
    this.setState({
      ouvert : !this.state.ouvert
    })
  }

  supprimerUnChat = (index)=>{
    let chats = [... this.state.chats];//Copie a array 
    chats.splice(index,1);//Delete 1 elem à partir de l'index
    this.setState({
      chats // chats: chats
    })
    console.log(index)
  }
    
  render(){
    
    return (
      <div>
        <h1>Magasin de chats</h1>
        <button onClick = {this.toggleInfosHoraireMagasin}>En savoir plus</button><br/>
          {this.state.ouvert ? <HoraireContenueMagasin name='corgi'/> : <span>Nothing</span>}
        <ul>
          {this.state.chats.map((c,index)=>
            <Chat key={c.poids+'123'} chat={c} supprimerUnChat={(index) => this.supprimerUnChat(index)}/>
          )}     
        </ul>
      </div>
    )
  }
}


;
