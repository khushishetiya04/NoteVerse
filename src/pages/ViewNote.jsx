import { useParams, Link } from "react-router-dom";
import {useEffect} from "react";
import "./ViewNote.css";

export default function ViewNote() {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const note = notes.find(
        (n) => n.id === Number(id)
    );

    // If note doesn't exist
    if (!note) {
        return (
            <div className="view-container">
                <div className="view-card">
                    <h2>Note not found.</h2>

                    <Link
                        to="/"
                        className="back-btn"
                    >
                        ← Back to Notes
                    </Link>
                </div>
            </div>
        );
    }

    // If note exists
    return (
        <div className="view-container">

            <div className="view-card">

                <Link
                    to="/"
                    className="back-btn"
                >
                    ← Back to Notes
                </Link>

                <h1 className="view-title">
                    {note.title}
                </h1>

                <p className="view-date">
                    🕒 {new Date(note.createdAt).toLocaleString()}
                </p>

                <hr />

                <p className="view-content">
                    {note.content}
                </p>

            </div>

        </div>
    );
}