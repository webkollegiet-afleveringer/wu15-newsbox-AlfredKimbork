import useSearch from "../../hook/useSearch";
import "./Searchbar.scss"

const SearchBar = () => {
    const { setSearchParams } = useSearch();
    
    return (
        <input 
            className="__searchbar" 
            type="text" 
            placeholder="Search news" 
            onChange={e => e.currentTarget.value === "" && setSearchParams()}
            onKeyDown={e => { if(e.key === "Enter") setSearchParams({ search: e.currentTarget.value }) }}
        />
    );
}

export default SearchBar