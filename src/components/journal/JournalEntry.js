import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundColor: "cover",
          backgroundImage:
            "url('https://avirato.com/wp-content/uploads/2020/02/placeholder-300x200.png')",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Algo</p>
        <p className="journal__entry-content">
          lokjh lkfjhsd lfjhsd lkfhsdlk fhsdlfkh sdlkfjhsd lfkjhsdlf kjhdsfrem
        </p>
      </div>

      <div className="journal__entry-datebox">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
