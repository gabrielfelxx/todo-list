const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h3>Filter</h3>
        <div className="filter-options">
            <div>
                <p>status</p>
                <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div className="ordem">
                <p>Ordem Alfabética</p>
                <button onClick={() => setSort("Asc")} >Asc</button>
                <button onClick={() => setSort("Dsc")} className="dsc">Dsc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter