import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="card">
      <div className="container display-flex justify-content-center align-items-center h-100 bg-info">
        <div className="row">
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
