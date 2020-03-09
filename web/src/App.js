import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './app.css';


function App() {

  const [lancamentos, setLancamentos] = useState([]);
  const [lancPast, setLancPast] = useState([]);
  const [lancFuturo, setLancFuturo] = useState([]);

  useEffect (()=> {
    async function loadLancamento(){
      const response = await api.get('api/capsulas');
      setLancamentos(response.data);
    }

    loadLancamento();
  },[])

  async function carregarCapsulasPast(){
    const response = await api.get('api/capsulas/past');
    setLancPast(response.data);
  }

  async function carregarCapsulasFuture(){
    const response = await api.get('api/capsulas/future');
    setLancFuturo(response.data);
  }

  return (
    <div id="app">
      <main>
        <strong>SpaceX</strong>

        <table>
          <thead>
            <tr>
              <th>ID_Capsula</th>
              <th>ID_Serial</th>
              <th>Status</th>
              <th>Desembarque</th>
              <th>Tipo</th>
              <th>Dt_Lancamento</th>
              <th>Detalhes</th>
              <th>Missoes</th>
              <th>Reutilizada</th>
            </tr>
          </thead>
          <tbody>
            {lancamentos.map( lancamento =>{ return ( 
                <tr>
                  <td>{lancamento.capsule_id}</td>
                  <td>{lancamento.capsule_serial}</td>
                  <td>{lancamento.status}</td>
                  <td>{lancamento.landings}</td>
                  <td>{lancamento.type}</td>
                  <td>{lancamento.original_launch}</td>
                  <td>{lancamento.details}</td>
                  <td>{lancamento.missions.join(', ')}</td>
                  <td>{lancamento.reuse_count}</td>
                </tr>
            )})}
          </tbody>
        </table>
        <br/>

        <strong>SpaceX - Passado</strong>

        <table>
          <thead>
            <tr>
              <th>ID_Capsula</th>
              <th>ID_Serial</th>
              <th>Status</th>
              <th>Desembarque</th>
              <th>Tipo</th>
              <th>Dt_Lancamento</th>
              <th>Detalhes</th>
              <th>Missoes</th>
              <th>Reutilizada</th>
            </tr>
          </thead>
          <tbody>
            {lancPast.map( lancamento =>{ return ( 
                <tr>
                  <td>{lancamento.capsule_id}</td>
                  <td>{lancamento.capsule_serial}</td>
                  <td>{lancamento.status}</td>
                  <td>{lancamento.landings}</td>
                  <td>{lancamento.type}</td>
                  <td>{lancamento.original_launch}</td>
                  <td>{lancamento.details}</td>
                  <td>{lancamento.missions.join(', ')}</td>
                  <td>{lancamento.reuse_count}</td>
                </tr>
            )})}
          </tbody>
        </table>
        <button>Listar Past</button>
        <br/>

        <strong>SpaceX - Futuras</strong>
          <table>
            <thead>
              <tr>
                <th>ID_Capsula</th>
                <th>ID_Serial</th>
                <th>Status</th>
                <th>Desembarque</th>
                <th>Tipo</th>
                <th>Dt_Lancamento</th>
                <th>Detalhes</th>
                <th>Missoes</th>
                <th>Reutilizada</th>
              </tr>
            </thead>
            <tbody>
              {lancFuturo.map( lancamento =>{ return ( 
                  <tr>
                    <td>{lancamento.capsule_id}</td>
                    <td>{lancamento.capsule_serial}</td>
                    <td>{lancamento.status}</td>
                    <td>{lancamento.landings}</td>
                    <td>{lancamento.type}</td>
                    <td>{lancamento.original_launch}</td>
                    <td>{lancamento.details}</td>
                    <td>{lancamento.missions.join(', ')}</td>
                    <td>{lancamento.reuse_count}</td>
                  </tr>
              )})}
            </tbody>
          </table>
          <button>Listar Futuras</button>
      </main>
    </div>
  );
}

export default App;