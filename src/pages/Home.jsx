import "./Home.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

export default function Home () {
    const[notes, setNotes] = useState( JSON.parse(localStorage.getItem("notes")) || []);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");
    const [editingContent, setEditingContent] = useState("");
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");

    const addNote = (title, content) => {
        if(editingId !== null){
            const updatedNotes = notes.map((note) => note.id === editingId ? 
                { ...note, title, content}
                : note
            );
            setNotes(updatedNotes);
            setEditingId(null);
            setEditingTitle("");
            setEditingContent("");

        }else{
            setNotes((prevNotes) => [...prevNotes, {id: Date.now(), title, content, createdAt: new Date().toISOString(), pinned: false}]);
        }
    };

    const editNote = (id, note) => {
        setEditingId(id);
        setEditingTitle(note.title);
        setEditingContent(note.content);
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.content.toLowerCase().includes(searchText.toLowerCase())
    );

    const sortedNotes = [...filteredNotes];
    sortedNotes.sort((a, b) => {
        if (a.pinned !== b.pinned) {
            return b.pinned - a.pinned;
        }
        if(sortOrder === "newest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }else{
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
    });

    const togglePin = (id) => {
        const updatedNotes = notes.map((note) => note.id === id ?
            {...note, pinned: !note.pinned} : note);
        setNotes(updatedNotes);
    };

    const clearAllNotes = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all notes?");
        if(confirmDelete){
            setNotes([]);
        }
    };

    return (
        <>
            <div className="home-container">
                <div className="app-card">
                    <Navbar/>
                    <SearchBar 
                        searchText={searchText} 
                        setSearchText={setSearchText}
                    />
                    <div className="toolbar">
                        <div className="note-count">
                            📄 {searchText
                                ? `${filteredNotes.length} of ${notes.length} Notes`
                                : `${notes.length} Notes`}
                        </div>
                        <div className="toolbar-buttons">
                            <button
                                className={sortOrder === "newest" ? "active-sort" : ""}
                                onClick={() => setSortOrder("newest")}
                            >
                                Newest
                            </button>

                            <button
                                className={sortOrder === "oldest" ? "active-sort" : ""}
                                onClick={() => setSortOrder("oldest")}
                            >
                                Oldest
                            </button>

                            <button className="clear-btn" onClick={clearAllNotes} disabled={notes.length === 0}>
                                🗑 Clear All
                            </button>
                        </div>
                    </div>
                    <NoteInput
                        onAdd={addNote}
                        editingTitle={editingTitle}
                        setEditingTitle={setEditingTitle}
                        editingContent={editingContent}
                        setEditingContent={setEditingContent}
                        editingId={editingId}
                    />
                    <NoteList 
                        notes={sortedNotes} 
                        setNotes={setNotes} 
                        onEdit={editNote} 
                        onPin={togglePin}
                    />
                </div>
            </div>
        </>
    );
}