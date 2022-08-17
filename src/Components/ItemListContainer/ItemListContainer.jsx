import React from "react";
import "../Card/Card";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
  const dataProd = {
    nombre: "Nombre Producto",
    precio: `$10000`,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sun",
    imgurl: "https://picsum.photos/200/300?grayscale",
  };
  return (
    <div className="card">
      <img src="https://picsum.photos/200/300" alt="" className="img-card" />
      <div className="card-body"></div>
      <h4 className="card-title text-secundary">{dataProd.name}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
        similique, adipisci dolorem inventore facilis.
      </p>
      <p>Price: $1090</p>
      <ItemCount />
    </div>
  );
}

export default ItemListContainer;
