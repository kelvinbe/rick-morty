import React, {FormEventHandler, ChangeEventHandler, useState, useEffect } from "react";
import NoteCard from "@/components/atoms/NotesCards/NotesCards";

interface IForm {
  residentID?: number | undefined;
}

interface INote {
  id: number | undefined, 
  content: string
}

type NoteData = IForm & INote

const NotesForm = (props: IForm) => {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState<NoteData[]>([]);

  const { residentID } = props;


  const handleChange:ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const addedNote = {
      id: residentID,
      content: notes,
    };
    const updatedNotes = [...savedNotes, addedNote];
    localStorage.setItem("savedNotes", JSON.stringify(updatedNotes));
    setSavedNotes(updatedNotes);
    setNotes("");
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("savedNotes") || "[]");
    setSavedNotes(savedNotes);
  }, []);

  return (
    <>
      <form
        className="max-w-lg mx-auto mt-10 shadow-lg px-10 py-20"
        onSubmit={handleSubmit}
      >
        <label className="block text-sm font-medium text-gray-700">Resident Notes</label>
        <textarea
          rows={4}
          value={notes}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
        <button
          type="submit"
          className="mt-4 inline-block px-6 py-2 text-base font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded-lg shadow ripple hover:shadow-lg hover:bg-indigo-700 focus:outline-none"
        >
          Add Notes
        </button>
      </form>

      {savedNotes.length !== 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedNotes.map((note: INote, index) => {
           return <div className="pl-5 flex-wrap" key={index}>
              {residentID === Number(note?.id) &&
                <NoteCard notes={note.content} />}
            </div>
        })}
        </div>
      )}
    </>
  );
};

export default NotesForm;
