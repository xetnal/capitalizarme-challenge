import { useState } from "react"
import { Data } from "../App"
import { Indicator } from "./indicator"
import { MonthIndicator } from "./months"
import { YearIndicator } from "./year"




export const Navbar = ({ data, indicador, setIndicador, year, setYear, startYear, setStartYear, month, setMonth }: 
    { data: Data | undefined, indicador: string, setIndicador: (value: string) => void, year:number, 
        setYear: (value: number) => void, startYear: number, setStartYear: (value:number) => void, month: number, setMonth: (value:number) => void }) => {

    return (
        <nav className="navbar navbar-light bg-light ">
            <form className="container">
                <div className="input-group">
                    <label className="mx-2 my-auto" id="basic-addon1">Indicador</label>
                    <Indicator
                        data={data}
                        indicador={indicador}
                        setIndicador={setIndicador}
                        setStartYear={setStartYear}
                    />
                    <label className="mx-2 my-auto" id="basic-addon2">Año</label>
                    <YearIndicator
                        data={data}
                        indicador={indicador}
                        year={year}
                        setYear={setYear}
                        startYear={startYear}
                         />

                    <label className="mx-2 my-auto" id="basic-addon3">Mes</label>
                    <MonthIndicator
                        month={month}
                        setMonth={setMonth}

                    />
                </div>
            </form>
        </nav>
    )
}