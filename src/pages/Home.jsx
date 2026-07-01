import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";

export default function Home () {
    const[notes, setNotes] = useState( JSON.parse(localStorage.getItem("notes")) || []);

    const addNote = (text) => {
        setNotes((prev) => [...prev, text]);
    };

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


    return (
        <>
            <Navbar/>
            <NoteInput onAdd={addNote}/>
            <NoteList notes={notes} setNotes={setNotes}/>
        </>
    );
}