
import { Data } from "../App"

export const Indicator = ({ data, indicador, setIndicador, setStartYear }: { data: Data | undefined, indicador: string, setIndicador: (value: string) => void, setStartYear:(value: number) => void  }) => {

    
    
    return (
        <select className="form-select margin x-5"  value={indicador} onChange={(e) => {setIndicador(e.target.options[e.target.selectedIndex].text); setStartYear(parseInt(e.currentTarget.value))}}>
            <>
                <option>---Selecciona una opción---</option>
                {data ? Object.values(data).map((indicador, index) => {
                    return (
                        <option key={index} value={indicador[1][1].startYear} >{indicador[1][1].nombre}</option>
                    )
                })
                    :
                    null}
            </>
        </select>
    )
}
// Indicator.defaultProps = {
//     label: "Indicador",
//     options: [{
//         cadence: "daily",
//         startYear: 1977,
//         title: "Unidad de fomento (UF)",
//         value: "uf"
//     },
//     {
//         startYear: 2012,
//         title: "Libra de Cobre",
//         value: "libra_cobre"
//     }
//     ]
// }