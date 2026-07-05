import NoteCard from "./NoteCard";

export default function NoteList({notes, setNotes, onEdit, onPin}) {

    const deleteNote = (id) => {
        setNotes((prevNotes) => (prevNotes).filter((note) => note.id !== id));
    };
    return (
        <>
            <div>
                {
                    notes.length === 0? 
                        <p>No notes yet. Add your first note!</p> 
                        : notes.map((note) => ( 
                            <NoteCard 
                                note={note} 
                                key={note.id} 
                                onDelete={() => deleteNote(note.id)} 
                                onEdit={()=> onEdit(note.id, note)}
                                onPin={()=> onPin(note.id)}
                            /> 
                        ))
                }               
            </div>
        </>
    )
}