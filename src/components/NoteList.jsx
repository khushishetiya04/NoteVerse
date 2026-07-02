import NoteCard from "./NoteCard";

export default function NoteList({notes, setNotes, onEdit}) {

    const deleteNote = (index) => {
        setNotes((prevNotes) => (prevNotes).filter((_, i) => i != index));
    };
    return (
        <>
            <div>
                {
                    notes.length === 0? <p>No notes yet. Add your first note!</p> : notes.map((note, index) => ( <NoteCard note={note} key={index} onDelete={() => deleteNote(index)} onEdit={()=> onEdit(index, note)}/> ))
                }               
            </div>
        </>
    )
}