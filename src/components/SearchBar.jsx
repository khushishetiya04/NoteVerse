export default function SearchBar ({searchText, setSearchText}){
    let handleChange = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <>
            <input
                type="text"
                placeholder="Search notes..."
                value={searchText}
                onChange={handleChange}
            />
        </>
    );
}