import "./SearchBar.css";

export default function SearchBar ({searchText, setSearchText}){
    let handleChange = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="🔍 Search notes, ideas, study material..."
                    value={searchText}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}