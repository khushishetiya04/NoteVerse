import "./NoteInput.css";

export default function NoteInput({
    onAdd,
    editingTitle,
    setEditingTitle,
    editingContent,
    setEditingContent,
    editingId,
}) {

    const handleTitleChange = (event) => {
        setEditingTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setEditingContent(event.target.value);
    };

    const handleAdd = () => {
        if (
            editingTitle.trim() === "" ||
            editingContent.trim() === ""
        ) return;

        onAdd(editingTitle, editingContent);

        setEditingTitle("");
        setEditingContent("");
    };

    return (
        <div className="note-input-container">
            <div className="input-fields">
                <input
                    className="note-title-input"
                    type="text"
                    placeholder="Title"
                    value={editingTitle}
                    onChange={handleTitleChange}
                    autoFocus
                />
                <textarea
                    className="note-input"
                    rows="5"
                    placeholder="Write your note..."
                    value={editingContent}
                    onChange={handleContentChange}
                />
            </div>

            <button
                className="add-note-btn"
                onClick={handleAdd}
            >
                {editingId !== null ? "✏ Update Note" : "+ Add Note"}
            </button>

        </div>
    );
}