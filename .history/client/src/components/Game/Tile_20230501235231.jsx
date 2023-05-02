import React from "react";
// import classes from "./Board.scss";
import "./Board.scss";
// import "./styles.scss";

const Tile = ({ tile, id }) => {
  console.log("tile");
  let classArray = ["tile"];
  classArray.push("tile" + tile.value);
  if (!tile.mergedInto) {
    classArray.push(`position_${tile.row}_${tile.column}`);
  }
  if (tile.mergedInto) {
    classArray.push("merged");
  }
  if (tile.isNew()) {
    classArray.push("new");
  }

  if (tile.hasMoved()) {
    classArray.push(`row_from_${tile.fromRow()}_to_${tile.toRow()}`);
    classArray.push(`column_from_${tile.fromColumn()}_to_${tile.toColumn()}`);
    classArray.push("isMoving");
  }
  //   if (tile.isRandom()) {
  //     classArray.push("random");
  //   }

  let styles = classArray.join(" ");
  return (
    <div className="tileblock">
      <span className={styles}>{tile.value}</span>
    </div>
  );
};

export default Tile;
