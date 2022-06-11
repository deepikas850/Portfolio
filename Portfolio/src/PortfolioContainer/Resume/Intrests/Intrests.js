import React from "react";
import "./Intrests.scss";

export default function Intrests() {
  const data = [
    {
      title: "Painting & Sketching",
      desc: "I really like to sketch and paint to enhance my creativity as well as it gives a sense of peace.",
    },
    {
      title: "Reading Books",
      desc: "Reading books gives me a better outlook on everything.",
    },
    {
      title: "Travelling",
      desc: "Travelling is a connection to the real world. One can always learn and build from surroundings.",
    },
  ];
  return (
    <div className="IntrestContainer">
      {data.map((d) => (
        <dl>
          <div className="IHobby">
            <dt className="ITitle">{d.title}</dt>
            <dd className="IDesc">{d.desc}</dd>
          </div>
        </dl>
      ))}
    </div>
  );
}
