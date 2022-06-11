import React from "react";
import "./CommentsCard.scss";

export default function CommentsCard(props) {
  //   const data = [
  //     {
  //       id: 1,
  //       name: "Covid Tracker",
  //       title: "React",
  //       image: "female",
  //       desc: "Developed a Covid-19 Tracker which shows the complete data about covid cases throughout the world. All the data is fetched through api.",
  //     },
  //     {
  //       id: 2,
  //       name: "Real Estate Website",
  //       title: "React and Redux",
  //       image: "kid",
  //       desc: "Developed a Real Estate Website application with fully functional login system using redux. Application also contains a fully functional whislist",
  //     },
  //     {
  //       id: 3,
  //       name: "Weather App",
  //       title: "Javascript",
  //       image: "male",
  //       desc: "Developed a Web application shows dynamic weather report using javascript and openweather web api",
  //     },
  //   ];
  return (
    <div className="CommentsCard" id="CommentsCard">
      {/* {data.map((d) => ( */}
      <div className="Card">
        <div className="Bottom">
          <img
            className="User"
            src={require(`../../../../assets/Home/${props.image}.png`)}
            alt=""
          />
          <div className="Tittle">
            <a className="linkk" href={props.link} target="_blank" rel="noopener noreferrer">
              <h3 className="a">{props.name}</h3>
            </a>
            <h4 className="b">{props.title}</h4>
          </div>
        </div>
        <div className="Top">
          <p className="descriptionC">
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            {props.desc}
            <i className="fa fa-quote-right" aria-hidden="true"></i>
          </p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
