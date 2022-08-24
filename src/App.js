
import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Gustavo Lima
        </h1>
        <Evento data="2 de agosto de 2019 Sexta-Feira" horario="18h30 - 00h00" local="Parque do Povo" cidade="Campina Grande/PR" genero="Arte em forma de SERTANEJO" />
        <ul>
          <Ingressos nome="Camarote" valor="R$100,00" />
          <Ingressos nome="Camarote Open Bar" valor="R$150,00" />
          <Ingressos nome="Front-stage" valor="R$60,00" />
          <Ingressos nome="Pista" valor="R$30,00" />
        </ul>
      </header>
    </div>
  );
}

class Evento extends React.Component {
  render() {
    return (
      <p>
        Data: {this.props.data} <br />
        Horario: {this.props.horario} <br />
        Local: {this.props.local} <br />
        Cidade: {this.props.cidade} <br />
        Genero: {this.props.genero} <br />
      </p>);
  }
}

class Ingressos extends React.Component {
  render() {
    return (
      <li>{this.props.nome}: {this.props.valor}</li>
    );
  }
}

export default App;