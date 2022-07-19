import React, { useEffect, useState } from 'react';

import './App.css';
import { Navbar } from './components/navbar';


export interface Data {
  "bitcoin": Indicador
  "dolar": Indicador
  "dolar_intercambio": Indicador
  "euro": Indicador
  "imacec": Indicador
  "ipc": Indicador
  "ivp": Indicador
  "libra_cobre": Indicador
  "tasa_desempleo": Indicador
  "tpm": Indicador
  "uf": Indicador
  "utm": Indicador
}
export interface Indicador {
  "codigo": string
  "fecha": string
  "nombre": string
  "unidad_medida": string
  "valor": number
}


function App() {
  const years = {
    "Unidad de Fomento (UF)": 1977,
    "Libra de Cobre": 2012,
    "Tasa de desempleo": 2009,
    "Euro":1999,
    "Imacec": 1997,
    "Dólar observado": 1984,
    "Tasa Política Monetaria (TPM)": 2001,
    "Indice de valor promedio (IVP)": 1990,
    "Indice de Precios al Consumidor (IPC)": 1928,
    "Dólar acuerdo": 1988,
    "Unidad Tributaria Mensual (UTM)": 1990,
    "Bitcoin": 2009

    
  }
  const [data, setData] = useState<Data>()
  const [indicador, setIndicador] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [startYear, setStartYear] = useState<string>("")
  const getData = async () => {
    const data = await fetch(
      `https://mindicador.cl/api`
    );
    const resp = await data.json();

    setData(resp);
    console.log(resp)
  };
  useEffect(() => {

    getData();

  }, []);



  return (
    <>
      <Navbar
        data={data}
        indicador={indicador}
        setIndicador={setIndicador}
        year={year}
        setYear={setYear}
        startYear={startYear}
        setStartYear={setStartYear}
      />
      {/* <Graph data={data} indicador={indicador}/> */}
    </>
  );
}

export default App;
