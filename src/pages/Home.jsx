import { useState } from "react";
import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";

export default function Home () {
    const[notes, setNotes] = useState([]);

    const addNote = (text) => {
        setNotes((prev) => [...prev, text]);
    };
 

    return (
        <>
            <Navbar/>
            <NoteInput onAdd={addNote}/>
            <NoteList notes={notes} setNotes={setNotes}/>
        </>
    );
}