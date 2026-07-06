import "./NoteCard.css";

export default function NoteCard({ note, onDelete, onEdit, onPin }) {
    return (
        <div className="note-card">

            <div className="note-header">
                <h3>
                    {note.pinned && "📌 "}
                    {note.text}
                </h3>

                <p className="note-date">
                    🕒 {new Date(note.createdAt).toLocaleString()}
                </p>
            </div>

            <div className="note-actions">

                <button className="pin-btn" onClick={onPin}>
                    {note.pinned ? "📌 Unpin" : "📌 Pin"}
                </button>

                <button className="edit-btn" onClick={onEdit}>
                    ✏ Edit
                </button>

                <button className="delete-btn" onClick={onDelete}>
                    🗑 Delete
                </button>

            </div>

        </div>
    );
}