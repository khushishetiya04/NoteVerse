export default function NoteCard({note, onDelete, onEdit}) {
    return (
        <>
            <div>
                <p>{note}</p>
                <button onClick={onDelete}>Delete</button> &nbsp;&nbsp;
                <button onClick={onEdit}>Edit</button>
                <hr></hr>
            </div>
        </>
    )
}