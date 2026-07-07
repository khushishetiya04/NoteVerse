import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./NoteCard.css";

export default function NoteCard({ note, onDelete, onEdit, onPin }) {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="note-card">
            <div className="note-content" style={{cursor: "pointer"}} onClick={() => navigate(`/note/${note.id}`)}>
                <div className="note-header">
                    <h3 className="note-title">
                        {note.pinned && "📌 "}
                        {note.title}
                    </h3>
                    <p className="note-date">
                        🕒 {new Date(note.createdAt).toLocaleString()}
                    </p>
                </div>

                <p className="note-preview">
                    {note.content.length > 120
                        ? note.content.substring(0, 120) + "..."
                        : note.content}
                </p>
            </div>

            <div className="note-actions">
                <button
                    className="menu-btn"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    ⋮
                </button>
                {showMenu && (
                    <div className="dropdown-menu">
                        <button onClick={onPin}>
                            {note.pinned ? "📌 Unpin" : "📌 Pin"}
                        </button>

                        <button onClick={onEdit}>
                            ✏ Edit
                        </button>

                        <button onClick={onDelete}>
                            🗑 Delete
                        </button>

                    </div>
                )}
            </div>
        </div>
    );
}