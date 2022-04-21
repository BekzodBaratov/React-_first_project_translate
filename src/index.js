import React from "react";
import ReactDOM from "react-dom";
import CommentComponent from "./CommentComponent.js";
import CardComponent from "./CardComponent.js";
import faker from "@faker-js/faker";

const App = function () {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          text={faker.hacker.phrase()}
        />
        <CommentComponent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          text={faker.hacker.phrase()}
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          text={faker.hacker.phrase()}
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          text={faker.hacker.phrase()}
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          text={faker.hacker.phrase()}
        />
      </CardComponent>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
