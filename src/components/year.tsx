import { Data } from "../App"


export const YearIndicator = ({ data, indicador, year, setYear, startYear}: { data: Data | undefined, indicador: string, year:string, setYear: (value: string) => void, startYear:string}) => {

    return (
        <select className="form-select mx-2" aria-label="Default select example">
            <option >---Selecciona una opción---</option>
        </select>
    )
}