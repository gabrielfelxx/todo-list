const Search = ({ search, setSearch }) => {
  return (
      <div className="search">
        <div className="search-title">
            <h3>Search</h3>
        </div>
        <input type="text" 
        
        value={search} 
        onChange={(event) => setSearch(event.target.value)} 
        placeholder="Digite o que deseja pesquisar"
        ></input>
      </div>
      )
}

export default Search