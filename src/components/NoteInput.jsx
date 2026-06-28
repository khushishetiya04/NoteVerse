import { useState } from "react";

export default function NoteInput({onAdd}) {
    const [text, setText] = useState("");

    let handleChange = (event) => {
        setText(event.target.value);
    };

    let handleAdd = () => {
        if(text.trim() === "") return;
        onAdd(text);
        setText("");
    };
    return (
        <>
            <div>
                <input placeholder="Write note...." type="text" value={text} onChange={handleChange}/>
                <button onClick={handleAdd}>Add</button>
            </div>
        </>
    );
}