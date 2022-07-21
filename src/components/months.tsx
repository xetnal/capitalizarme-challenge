


export const MonthIndicator = ({month, setMonth}: {month:string, setMonth: (value:string) => void}) =>{
    return (
        <select className="form-select mx-2" aria-label="Default select example" value={month} onChange={(e) => setMonth(e.currentTarget.value)}>
                        <option >---Selecciona una opción---</option>
                        <option value={"Enero"}>Enero</option>
                        <option value={"Febrero"}>Febrero</option>
                        <option value={'Marzo'}>Marzo</option>
                        <option value={'Abril'}>Abril</option>
                        <option value={'Mayo'}>Mayo</option>
                        <option value={6}>Junio</option>
                        <option value={7}>Julio</option>
                        <option value={8}>Agosto</option>
                        <option value={9}>Septiembre</option>
                        <option value={10}>Octubre</option>
                        <option value={11}>Noviembre</option>
                        <option value={12}>Diciembre</option>
                    </select>


    )
}