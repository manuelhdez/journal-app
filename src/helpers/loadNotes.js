import { db } from "firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnapshot = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  notesSnapshot.forEach((documento) => {
    notes.push({
      id: documento.id,
      ...documento.data(),
    });
  });

  return notes;
};
