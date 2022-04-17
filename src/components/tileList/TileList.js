import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
  return (
    <div>
      {props.data.map((element, index) => {return <Tile object={element} key={index}/>})}
    </div>
  );
};
