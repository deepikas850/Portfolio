import React from "react";
import "./Education.scss";

export default function Education() {
  const data = [
    {
      id: 1,
      year: "2019-2023",
      title: "Computer Science And Engineering",
      subTitle: "Chitkara University",
      score: "9.5 CGPA",
    },
    {
      id: 2,
      year: "2018-2019",
      title: "12th Degree",
      subTitle: "D.A.V Public School",
      score: "72.6%",
    },
    {
      id: 3,
      year: "2016-2017",
      title: "10th Degree",
      subTitle: "D.A.V Public School",
      score: "9.2 CGPA",
    },
  ];
  return (
    <div className="Educations" id="Education">
      {data.map((d) => (
        <div className="EducationContainer">
          <div className="left-content">
            <i className="fas fa-calendar-alt"></i>
            <p className="EYear">{d.year}</p>
          </div>
          <div className="right-content">
            <h5 className="EducationTitle">{d.title}</h5>
            <h6 className="EducationSubitle">{d.subTitle}</h6>
            <p>{d.score}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
