import React from 'react';


interface INotesCard {
    notes: string
}


const NoteCard = (props: INotesCard) => {
    
    const {notes} = props

    return (
    <div className="bg-amber-300 flex justify-start w-[18rem] h-48 p-4 rounded-lg shadow-md text-black">
      <p>{notes}</p>
    </div>
  );
};

export default NoteCard;
