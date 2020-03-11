import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './app.css';


function App() {

  const [lancamentos, setLancamentos] = useState([]);
  const [nextLanc, setNextLanc] = useState([]);
  const [lastLanc, setLastLanc] = useState([]);

  useEffect (()=> {
    async function loadLancamento(){
      const response = await api.get('api/capsulas');
      setLancamentos(JSON.parse(response.data));
    }
    loadLancamento();
  },[])

  useEffect (()=> {
    async function loadLancamento(){
      const response = await api.get('api/capsulas/NextLaunch');
      setNextLanc(JSON.parse(response.data));
    }
    loadLancamento();
  },[])

  useEffect (()=> {
    async function loadLancamento(){
      const response = await api.get('api/capsulas/LastLaunch');
      setLastLanc(JSON.parse(response.data));
    }
    loadLancamento();
  },[])

  async function carregarCapsulas(){
    const response = await api.get('api/capsulas');
    setLastLanc("");
    setNextLanc("");
    setLancamentos(JSON.parse(response.data));
  }

  async function carregarCapsulasPast(){
    const response = await api.get('api/capsulas/past');
    setLastLanc("");
    setNextLanc("");
    setLancamentos(JSON.parse(response.data));
  }

  async function carregarCapsulasFuture(){
    const response = await api.get('api/capsulas/future');
    setLastLanc("");
    setNextLanc("");
    setLancamentos(JSON.parse(response.data));
  }

  async function carregarCapsulaNext(){
    const response = await api.get('api/capsulas/NextLaunch');
    setLastLanc("");
    setLancamentos("");
    setNextLanc(JSON.parse(response.data));
  }

  async function carregarCapsulaAntiga(){
    const response = await api.get('api/capsulas/LastLaunch');
    setLancamentos("");
    setNextLanc("");
    setLastLanc(JSON.parse(response.data));
  }

  return (
    <div id="app">
      
      <button onClick={carregarCapsulas}>Listar Todas</button>
      <button onClick={carregarCapsulasPast}>Listar Passadas</button>
      <button onClick={carregarCapsulasFuture}>Listar Futuras</button>
      <button onClick={carregarCapsulaNext}>Próxima</button>
      <button onClick={carregarCapsulaAntiga}>Última</button>
      
      <main>
        <strong>SpaceX</strong>

        <table>
          <thead>
            <tr>
              <th>ID Capsula</th>
              <th>ID Serial</th>
              <th>Status</th>
              <th>Desembarque</th>
              <th>Tipo</th>
              <th>Data Lançamento</th>
              <th>Detalhes</th>
              <th>Missoes</th>
              <th>Reutilizada</th>
            </tr>
          </thead>
          <tbody>
            { lancamentos ? lancamentos.map( lancamento => ( 
                <tr key={lancamento.capsule_serial}>
                  <td>{lancamento.capsule_id}</td>
                  <td>{lancamento.capsule_serial}</td>
                  <td>{lancamento.status}</td>
                  <td>{lancamento.landings}</td>
                  <td>{lancamento.type}</td>
                  <td>{new Date(lancamento.original_launch).toLocaleDateString()}</td>
                  <td>{lancamento.details}</td>
                  <td>{JSON.stringify(lancamento.missions).valueOf()}</td>
                  <td>{lancamento.reuse_count}</td>
                </tr>
            )): ""}

              { nextLanc ?  
              <tr>
              <td>{nextLanc.capsule_id}</td>
              <td>{nextLanc.capsule_serial}</td>
              <td>{nextLanc.status}</td>
              <td>{nextLanc.landings}</td>
              <td>{nextLanc.type}</td>
              <td>{new Date(nextLanc.original_launch).toLocaleDateString()}</td>
              <td>{nextLanc.details}</td>
              <td>{JSON.stringify(nextLanc.missions)}</td>
              <td>{nextLanc.reuse_count}</td>
               </tr>
              
              : ""}

              { lastLanc ?  
              <tr>
              <td>{lastLanc.capsule_id}</td>
              <td>{lastLanc.capsule_serial}</td>
              <td>{lastLanc.status}</td>
              <td>{lastLanc.landings}</td>
              <td>{lastLanc.type}</td>
              <td>{new Date(lastLanc.original_launch).toLocaleDateString()}</td>
              <td>{lastLanc.details}</td>
              <td>{JSON.stringify(lastLanc.missions)}</td>
              <td>{lastLanc.reuse_count}</td>
               </tr>
              
              : ""}

          </tbody>
        </table>
        <br/>

        
      </main>
    </div>
  );
}

export default App;