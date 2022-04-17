import React from "react";

export const Tile = (props) => {
  const data = Object.values(props.object);
  return (
    <div className="tile-container">
      {
      data.map((element, index) => {
        if (index === 0){
          return <p className="tile-title" key={index}>{element}</p>
        }
        return <p className="tile" key={index}>{element}</p>
      })
      }
    </div>
  );
};
