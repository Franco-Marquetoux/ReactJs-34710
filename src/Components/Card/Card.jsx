import React from "react";
import image1 from "../images/image1.jpg";

function Card() {
  return (
    <div className="card width:15rem;">
      <img src={image1} alt="" />
      <div className="card-body">
        <h4 className="card-title text-secundary">Mi titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          praesentium illo tempora eligendi necessitatibus magnam accusantium
          molestiae consectetur voluptas dignissimos modi, beatae aut architecto
          cupiditate nam saepe dolor, officiis perferendis!
        </p>

        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
}

export default Card;
