import { useState } from "react"
import { Data } from "../App"
import { Indicator } from "./indicator"
import { YearIndicator } from "./year"




export const Navbar = ({ data, indicador, setIndicador, year, setYear, startYear, setStartYear }: 
    { data: Data | undefined, indicador: string, setIndicador: (value: string) => void, year:string, 
        setYear: (value: string) => void, startYear: string, setStartYear: (value:string) => void }) => {


    const [month, setMonth] = useState<string>("")
    


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
                    <select className="form-select mx-2" aria-label="Default select example" value={month} onChange={(e) => setMonth(e.currentTarget.value)}>
                        <option >---Selecciona una opción---</option>
                        <option value={1}>Enero</option>
                        <option value={2}>Febrero</option>
                        <option value={3}>Marzo</option>
                        <option value={4}>Abril</option>
                        <option value={5}>Mayo</option>
                        <option value={6}>Junio</option>
                        <option value={7}>Julio</option>
                        <option value={8}>Agosto</option>
                        <option value={9}>Septiembre</option>
                        <option value={10}>Octubre</option>
                        <option value={11}>Noviembre</option>
                        <option value={12}>Diciembre</option>
                    </select>

                </div>
            </form>
        </nav>
    )
}