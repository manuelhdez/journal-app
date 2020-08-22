import React from "react";
import { JournalEntry } from "./JournalEntry";
import { useSelector } from "react-redux";

export const JournalEntries = () => {
  const { notes: entries } = useSelector((state) => state.notes);
  return (
    <div className="journal__entries">
      {entries.map((entry) => {
        return <JournalEntry key={entry.id} {...entry} />;
      })}
    </div>
  );
};
