


export const MonthIndicator = ({month, setMonth}: {month:number, setMonth: (value:number) => void}) =>{
    return (
        <select className="form-select mx-2" aria-label="Default select example" value={month} onChange={(e) => setMonth(parseInt(e.currentTarget.value))}>
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


    )
}