import React from "react";
import { Sidebar } from "./Sidebar";
import { NoteScreen } from "components/notes/NoteScreen";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}

        <NoteScreen />
      </main>
    </div>
  );
};
