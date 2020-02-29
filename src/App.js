import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Forma de escribir un componente
  // function Hello(props) {
  //   return <h2>{props.title}</h2>
  // }

// Forma de escribir un componente
  // const Hello = (props) => <h2>{props.title}</h2>

// Forma de escribir un componente
class Hello extends Component {
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  //render siempre debe devolver un solo elemento, pero un elemento puede tener tantos subelementos como necesite.
  render() {
    const textoSegunBool = this.props.boolean ? 'Afirmativo' : 'Negativo'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
    return (
      <div>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
      )
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='Hello from props'/>
          <div>
            <Text 
              arrayOfNumbers={[2,3,10]}
              boolean
              number={2} 
              objectWithInfo ={{ key:'First value' , key2: 'otherValue' }}
              text='Texto'              
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
