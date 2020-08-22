import { db } from "./../firebase/firebaseConfig";
import { types } from "types/types";
import { loadNotes } from "helpers/loadNotes";
import Swal from "sweetalert2";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const {
      auth: { uid, name },
    } = getState();

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoadAll,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, state) => {
    const { uid } = state().auth;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(updateLocalNote(note.id, noteToFirestore));
    Swal.fire("Save", note.title, "success");
  };
};

export const updateLocalNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: { id, ...note },
  },
});
