export default function NoteCard({note, onDelete, onEdit, onPin}) {
    return (
        <>
            <div>
                <p>{note.pinned && "📌 "}{note.text}</p>
                <p>Created At: {new Date(note.createdAt).toLocaleString()}</p>
                <button onClick={onPin}>{note.pinned? "Unpin" : "Pin"}</button> &nbsp;&nbsp;
                <button onClick={onDelete}>Delete</button> &nbsp;&nbsp;
                <button onClick={onEdit}>Edit</button>
                <hr></hr>
            </div>
        </>
    )
}