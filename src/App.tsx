import React, { useEffect, useState } from 'react';

import './App.css';
import { Navbar } from './components/navbar';
import Plot from 'react-plotly.js';

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
  "startYear"?: number
}


function App() {
  const years: Record<string, number> = {
    "Unidad de fomento (UF)": 1977,
    "Libra de Cobre": 2012,
    "Tasa de desempleo": 2009,
    "Euro": 1999,
    "Imacec": 1997,
    "Dólar observado": 1984,
    "Tasa Política Monetaria (TPM)": 2001,
    "Indice de valor promedio (IVP)": 1990,
    "Indice de Precios al Consumidor (IPC)": 1928,
    "Dólar acuerdo": 1988,
    "Unidad Tributaria Mensual (UTM)": 1990,
    "Bitcoin": 2009


  }
  const [data, setData] = useState<Data>();
  const [indicador, setIndicador] = useState<string>("");
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<number>(0);
  const [startYear, setStartYear] = useState<number>(0);
  const getData = async () => {
    const data = await fetch(
      `https://mindicador.cl/api`
    );
    const resp = await data.json();
    const filteredData = Object.entries(resp).filter((entry: { [key: string]: any }) => entry[1].nombre);
    const dataWithYear: any = Object.entries(filteredData).map((item: { [key: string]: any }) => {

      item[1][1].startYear = years[item[1][1].nombre]

      return item

    })
    setData(dataWithYear)


  };
  useEffect(() => {

    getData();



  }, [data]);





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
        month={month}
        setMonth={setMonth}
      />
      {/* <Graph data={data} indicador={indicador}/> */}

      {
        <div className='d-flex justify-content-center '>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'red' },
              
            },
            
          ]}
          layout={{ width: 620, height: 440, title: `${indicador} de ${month} de ${year}` }}
        />
      </div>}
    </>
  );
}

export default App;
