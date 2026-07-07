import "./NoteList.css";
import NoteCard from "./NoteCard";

export default function NoteList({notes, setNotes, onEdit, onPin}) {

    const deleteNote = (id) => {
        setNotes((prevNotes) => (prevNotes).filter((note) => note.id !== id));
    };
    return (
        <>
            <div className="note-list">
                {
                    notes.length === 0? 
                        <div className="empty-state">
                            <div className="empty-icon">📝</div>
                            <h2>No Notes Yet</h2>
                            <p>
                                Start capturing your ideas, study notes,tasks or inspirations.
                            </p>
                        </div>
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