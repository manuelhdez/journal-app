import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "hooks/useForm";
import { activeNote } from "actions/notes";

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const { title, body } = formValues;

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Captura la información"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Qué pasa"
          name="body"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__img">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};
