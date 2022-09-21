function Search({setSearch, handleClick}) {

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    id="poke-search"
                    placeholder="Search a Pokemon"
                    name="search"
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

export default Search