let rotateLeft = function (matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let res = [];
  for (let row = 0; row < rows; ++row) {
    res.push([]);
    for (let column = 0; column < columns; ++column) {
      res[row][column] = matrix[column][columns - row - 1];
    }
  }
  return res;
};

class Tile {
  constructor(value, row, column) {
    this.value = value || 0;
    this.row = row || -1;
    this.column = column || -1;
    this.oldRow = -1;
    this.oldColumn = -1;
    this.markForDeletion = false;
    this.mergedInto = null;
    this.id = this.id++ || 0;
    // this.random = false;
  }
  moveTo(row, column) {
    this.oldRow = this.row;
    this.oldColumn = this.column;
    this.row = row;
    this.column = column;
  }
  isNew() {
    // console.log(this.oldRow === -1 && !this.mergedInto);
    return this.oldRow === -1 && !this.mergedInto;
  }
  // isRandom() {
  //   return this.random;
  // }
  hasMoved() {
    // console.log(this.mergedInto, "this.mergedInto");
    return (
      (this.fromRow() !== -1 &&
        (this.fromRow() !== this.toRow() ||
          this.fromColumn() !== this.toColumn())) ||
      this.mergedInto
    );
  }
  fromRow() {
    // console.log(
    //   this.mergedInto ? this.row : this.oldRow,
    //   this.oldRow,
    //   "fromRow"
    // );
    return this.mergedInto ? this.row : this.oldRow;
  }
  fromColumn() {
    // console.log(
    //   this.mergedInto ? this.column : this.oldColumn,
    //   this.oldColumn,
    //   "fromColumn"
    // );
    return this.mergedInto ? this.column : this.oldColumn;
  }
  toRow() {
    // console.log(
    //   this.mergedInto ? this.mergedInto.row : this.row,
    //   this.row,
    //   "toRow"
    // );
    return this.mergedInto ? this.mergedInto.row : this.row;
  }
  toColumn() {
    // console.log(
    //   this.mergedInto ? this.mergedInto.column : this.column,
    //   this.column,
    //   "toColumn"
    // );
    return this.mergedInto ? this.mergedInto.column : this.column;
  }
}

class Board {
  constructor() {
    this.tiles = [];
    this.cells = [];
    this.score = 0;
    this.size = 4;
    this.fourProbability = 0.9;
    this.deltaX = [-1, 0, 1, 0];
    this.deltaY = [0, -1, 0, 1];
    for (let i = 0; i < this.size; ++i) {
      this.cells[i] = [
        // for(let j = 0; j < this.size; ++j) {
        //   this.addTile()
        // }
        this.addTile(),
        this.addTile(),
        this.addTile(),
        this.addTile(),
      ];
    }
    this.addRandomTile();
    this.addRandomTile();
    this.setPositions(); //потрібно тільки коли створюється гра
    this.won = false;
  }
  addTile(args) {
    let res = new Tile(args);
    this.tiles.push(res);
    return res;
  }

  moveLeft() {
    let hasChanged = false;
    for (let row = 0; row < this.size; ++row) {
      let currentRow = this.cells[row].filter((tile) => tile.value !== 0);
      let resultRow = [];
      for (let target = 0; target < this.size; ++target) {
        let targetTile = currentRow.length
          ? currentRow.shift()
          : this.addTile();
        if (currentRow.length > 0 && currentRow[0].value === targetTile.value) {
          let tile1 = targetTile;
          targetTile = this.addTile(targetTile.value);
          tile1.mergedInto = targetTile;
          //   console.log(tile1.mergedInto, "tile1.mergedInto ");
          let tile2 = currentRow.shift();
          tile2.mergedInto = targetTile;
          targetTile.value += tile2.value;
          this.score += tile1.value + tile2.value;
        }
        resultRow[target] = targetTile;
        this.won |= targetTile.value === 2048;
        hasChanged |= targetTile.value !== this.cells[row][target].value;
      }
      this.cells[row] = resultRow;
    }
    return hasChanged;
  }
  setPositions() {
    //console.log(this.cells, "this.cells"); //перевірка
    this.cells.forEach((row, rowIndex) => {
      row.forEach((tile, columnIndex) => {
        tile.oldRow = tile.row; // щось з анімаціями
        tile.oldColumn = tile.column; // щось з анімаціями
        tile.row = rowIndex;
        tile.column = columnIndex;
        tile.markForDeletion = false;
      });
    });
  }
  addRandomTile() {
    let emptyCells = [];
    for (let r = 0; r < this.size; ++r) {
      for (let c = 0; c < this.size; ++c) {
        if (this.cells[r][c].value === 0) {
          emptyCells.push({ r: r, c: c });
        }
      }
    }
    let index = Math.floor(Math.random() * emptyCells.length);
    let cell = emptyCells[index];
    let newValue = Math.random() < this.fourProbability ? 4 : 2;
    let randomTile = this.addTile(newValue);
    randomTile.random = true;

    this.cells[cell.r][cell.c] = randomTile;
  }
  move(direction) {
    // я тут
    // 0 -> left, 1 -> up, 2 -> right, 3 -> down
    this.clearOldTiles();
    // console.log(this.tiles, "this.tiles");
    // console.log(this.cells, "this.cells");

    for (let i = 0; i < direction; ++i) {
      this.cells = rotateLeft(this.cells);
    }
    let hasChanged = this.moveLeft();
    for (let i = direction; i < 4; ++i) {
      this.cells = rotateLeft(this.cells);
    }
    // this.setPositions();
    if (hasChanged) {
      this.addRandomTile();
    }
    this.setPositions();
    return this;
  }
  clearOldTiles() {
    // console.log(this.tiles, "this.tiles");
    this.tiles = this.tiles.map((tile) => {
      tile.random = false;
      return tile;
    });
    this.tiles = this.tiles.filter((tile) => tile.markForDeletion === false);
    // console.log(this.tiles, "this.tiles");
    this.tiles.forEach((tile) => {
      tile.markForDeletion = true;
    });
  }
  hasWon() {
    return this.won;
  }
  hasLost() {
    let canMove = false;
    for (let row = 0; row < this.size; ++row) {
      for (let column = 0; column < this.size; ++column) {
        canMove |= this.cells[row][column].value === 0;
        for (let i = 0; i < 4; ++i) {
          let newRow = row + this.deltaX[i];
          let newColumn = column + this.deltaY[i];
          if (
            newRow < 0 ||
            newRow >= this.size ||
            newColumn < 0 ||
            newColumn >= this.size
          ) {
            continue;
          }
          canMove |=
            this.cells[row][column].value ===
            this.cells[newRow][newColumn].value;
        }
      }
    }
    return !canMove;
  }
}

export { Board };
