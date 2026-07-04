export default function NoteCard({note, onDelete, onEdit}) {
    return (
        <>
            <div>
                <p>{note.text}</p>
                <p>Created At: {note.createdAt}</p>
                <button onClick={onDelete}>Delete</button> &nbsp;&nbsp;
                <button onClick={onEdit}>Edit</button>
                <hr></hr>
            </div>
        </>
    )
}