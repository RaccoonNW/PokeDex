import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

function Search({setSearch, handleClick}) {

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            handleClick()
        }
    }

    return (
        <div>
            <form>
                <IconButton type="submit" aria-label="search">
                    <SportsMartialArtsIcon style={{ fill: "white" }} />
                </IconButton>
                <TextField
                    id="search-bar"
                    className="text"
                    onChange={handleChange}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    placeholder="Press Enter to Submit"
                    variant="outlined"
                    label="Enter Pokemon Name"
                    size="small"
                    style={{
                        backgroundColor: "#e0e0e0"
                    }}
                />
                {/* <input
                    type="text"
                    id="poke-search"
                    placeholder="Search a Pokemon"
                    name="search"
                    onChange={handleChange}
                /> */}
                {/* <button onClick={handleClick}>Search</button> */}
            </form>
        </div>
    )
}

export default Search