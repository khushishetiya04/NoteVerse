import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

export default function Home () {
    const[notes, setNotes] = useState( JSON.parse(localStorage.getItem("notes")) || []);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [searchText, setSearchText] = useState("");

    const addNote = (text) => {
        if(editingId !== null){
            const updatedNotes = notes.map((note) => note.id === editingId ? 
                { ...note, text, createdAt: new Date().toLocaleString() }
                : note
            );
            setNotes(updatedNotes);
            setEditingId(null);
            setEditingText("");

        }else{
            setNotes((prevNotes) => [...prevNotes, {id: Date.now(), text, createdAt: new Date().toLocaleString()}]);
        }
    };

    const editNote = (id, note) => {
        setEditingId(id);
        setEditingText(note.text);
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <Navbar/>
            <SearchBar 
                searchText={searchText} 
                setSearchText={setSearchText}
            />
            <p>
                {searchText? `Showing ${filteredNotes.length} of ${notes.length} notes` 
                : `Total Notes: ${notes.length}`}
            </p>
            <NoteInput 
                onAdd={addNote} 
                editingText={editingText} 
                setEditingText={setEditingText} 
                editingId={editingId}
            />
            <NoteList 
                notes={filteredNotes} 
                setNotes={setNotes} 
                onEdit={editNote} 
            />
        </>
    );
}