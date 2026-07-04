export default function NoteInput({onAdd, editingText, setEditingText, editingId}) {

    let handleChange = (event) => {
        setEditingText(event.target.value);
    };

    let handleAdd = () => {
        if(editingText.trim() === "") return;
        onAdd(editingText);
        setEditingText("");
    };
    return (
        <>
            <div>
                <input 
                    placeholder="Write note...." 
                    type="text" 
                    value={editingText} 
                    onChange={handleChange}
                />
                <button onClick={handleAdd}> 
                    {editingId !== null ? "Edit Note" : "Add Note"} 
                </button>
            </div>
        </>
    );
}