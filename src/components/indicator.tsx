
import { Data } from "../App"

export const Indicator = ({ data, indicador, setIndicador, setStartYear }: { data: Data | undefined, indicador: string, setIndicador: (value: string) => void, setStartYear:(value: string) => void  }) => {

    const filteredData = data ? Object.entries(data).filter((entry) => entry[1].nombre) : null

    

    console.log(indicador)
    return (
        <select className="form-select margin x-5"  value={indicador} onChange={(e) => setIndicador(e.currentTarget.value) }>
            <>
                <option>---Selecciona una opción---</option>
                {filteredData ? Object.values(filteredData).map((indicador, index) => {
                    return (
                        <option key={index} value={indicador[1].codigo}>{indicador[1].nombre}</option>
                    )
                })
                    :
                    null}
            </>
        </select>
    )
}
Indicator.defaultProps = {
    label: "Indicador",
    options: [{
        cadence: "daily",
        startYear: 1977,
        title: "Unidad de fomento (UF)",
        value: "uf"
    },
    {
        startYear: 2012,
        title: "Libra de Cobre",
        value: "libra_cobre"
    }
    ]
}