import { useEffect } from "react"
import { Data } from "../App"


export const YearIndicator = ({ data, indicador, year, setYear, startYear }: { data: Data | undefined, indicador: any, year: number, setYear: (value: number) => void, startYear: number }) => {
    // console.log(indicador[1])
    
    const groupedYears = () => {
        let yearsArray = []
        for (let index = startYear; index <= 2022; index++) {
            yearsArray.push(index)

        }
        
        const mappedYears = yearsArray.map((year, index) => {
            return <option key={index} value={year}>{year}</option>
        })
        return mappedYears

    }
    
    return (
        <select className="form-select mx-2" aria-label="Default select example"value={year} onChange={(e) => setYear(parseInt(e.currentTarget.value))}>
            <option >---Selecciona una opción---</option>
           {groupedYears() }
        </select>
    )
}