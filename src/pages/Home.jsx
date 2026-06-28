import Navbar from "../components/Navbar";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";

export default function Home () {
    return (
        <>
            <Navbar/>
            <NoteInput/>
            <NoteList/>
        </>
    );
}