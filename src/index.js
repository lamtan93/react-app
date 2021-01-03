import React from 'react';
import ReactDOM from 'react-dom';

const myTitle = function(){
  return 'hello World!';
};

//Element React
//const monId = 'titleId';
//const elem1 = React.createElement('div', {className: 'monDiv1'},React.createElement('h1', {className: 'my-title'}, 'helloWorld!!'));
//const elem2 = <div><a href='https://google.com' target='blank'><h1 id={monId} className='my-title'>{myTitle()}</h1></a></div>;


class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      compteur: 0
    }
  }

  incrementer= () =>{
    console.log('call the method incrementer le compteur du parent');
    this.setState({
      compteur: this.state.compteur + 1
    })
  }

  render(){
    return (
            <Enfant compteurParent={this.state.compteur} incrementerCompteurParent={this.incrementer}/>  
            )
    
  }
}

class Enfant extends React.Component{
  constructor(props){
    super(props);
    this.nameRef = React.createRef();
    console.log({ref: this.nameRef});
    
  }

  componentDidMount(){
    this.nameRef.current.focus();
  }

  render(){
    return( <div>
              Name: <input ref= {this.nameRef} type = 'text' ></input><br/>
              Enfant, compteur venant du composant Parent= 
              <span>{this.props.compteurParent}</span><br/>
              <button onClick={this.props.incrementerCompteurParent}>Incrémenter le compteur Parent</button>
            </div>
    )
  }
}
ReactDOM.render(<Parent/>,document.getElementById('root'))