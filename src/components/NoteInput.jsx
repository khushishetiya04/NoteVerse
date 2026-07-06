import "./NoteInput.css";

export default function NoteInput({
    onAdd,
    editingText,
    setEditingText,
    editingId,
}) {

    const handleChange = (event) => {
        setEditingText(event.target.value);
    };

    const handleAdd = () => {
        if (editingText.trim() === "") return;

        onAdd(editingText);
        setEditingText("");
    };

    return (
        <div className="note-input-container">

            <textarea
                className="note-input"
                rows="3"
                placeholder="Write your note, idea or study point..."
                value={editingText}
                onChange={handleChange}
            />

            <button
                className="add-note-btn"
                onClick={handleAdd}
            >
                {editingId !== null ? "✏ Update Note" : "+ Add Note"}
            </button>

        </div>
    );
}