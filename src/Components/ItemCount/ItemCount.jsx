import React, { useState } from "react";

function ItemCount() {
  const [clicks, SetClicks] = useState(0);
  function addClickHandler() {
    SetClicks(clicks + 1);
  }
  function removeClickHandler() {
    SetClicks(clicks - 1);
  }
  return (
    <>
      <button onClick={addClickHandler} className="btn btn-success">
        Agregar
      </button>
      <button onClick={removeClickHandler} className="btn btn-danger">
        Quitar
      </button>
      <p>Items: {clicks}</p>
    </>
  );
}

export default ItemCount;
