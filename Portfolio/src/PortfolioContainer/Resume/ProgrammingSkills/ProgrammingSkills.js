import React from "react";
import "./ProgrammingSkills.scss";
export default function ProgrammingSkills() {
  const data = [
    {
      id: 1,
      icon: <i className="fab fa-java"></i>,
      detail:
        "Java is my most preferable programming language. I have a whole grasp on OOPs concept.",
    },
    {
      id: 2,
      icon: <i className="far fa-file-code"></i>,
      detail:
        "I have intermediate knowlege of C++ and I have basic knowlege of C.",
    },
    {
      id: 3,
      icon: <i className="fab fa-github"></i>,
      detail:
        "I am well aware with Git and GitHub. I have certifictaion of Git from Progate.",
    },
  ];
  return (
    <div className="PSkills" id="ProgrammginSkills">
      {data.map((d) => (
        <div className="PContainer">
          <div className="PLanguage">{d.icon}</div>
          <div className="PDetail">{d.detail}</div>
        </div>
      ))}
    </div>
  );
}
