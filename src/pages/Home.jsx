import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

export default function Home () {
    const[notes, setNotes] = useState( JSON.parse(localStorage.getItem("notes")) || []);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [searchText, setSearchText] = useState("");

    const addNote = (text) => {
        if(editingIndex !== null){
            const updatedNotes = [...notes];
            updatedNotes[editingIndex] = text;
            setNotes(updatedNotes);
            setEditingIndex(null);
            setEditingText("");

        }else{
            setNotes((prevNotes) => [...prevNotes, text]);
        }
    };

    const editNote = (index, note) => {
        setEditingIndex(index);
        setEditingText(note);
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


    return (
        <>
            <Navbar/>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <NoteInput onAdd={addNote} editingText={editingText} setEditingText={setEditingText} editingIndex={editingIndex}/>
            <NoteList notes={notes} setNotes={setNotes} onEdit={editNote} searchText={searchText}/>
        </>
    );
}