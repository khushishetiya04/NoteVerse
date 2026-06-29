import NoteCard from "./NoteCard";

export default function NoteList({notes}) {
    console.log(notes);
    return (
        <>
            <div>
                {
                    notes.length === 0? <p>No notes yet. Add your first note!</p> : notes.map((note, index) => ( <NoteCard note={note} key={index}/> ))
                }                
            </div>
        </>
    )
}