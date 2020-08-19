import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Captura la información"
          className="notes__title-input"
        />

        <textarea placeholder="Qué pasa" className="notes__textarea"></textarea>

        <div className="notes__img">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
};
