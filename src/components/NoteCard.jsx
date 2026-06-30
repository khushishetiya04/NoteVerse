export default function NoteCard({note, onDelete}) {
    return (
        <>
            <div>
                <p>{note}</p>
                <button onClick={onDelete}>Delete</button>
                <hr></hr>
            </div>
        </>
    )
}