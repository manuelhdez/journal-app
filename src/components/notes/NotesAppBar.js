import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadPicture } from "actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };

  const handleSavePicture = () => {
    console.log("Picture");
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadPicture(file));
    }
  };

  return (
    <div className="notes__app-bar">
      <span>28 ago 2020</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handleSavePicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
