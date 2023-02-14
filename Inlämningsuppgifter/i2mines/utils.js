// Creates a new board with a set of mines
// the board must be square, eg. 4, 9, 16, 25 cells etc
// Returns the board
function createBoard(boardSize, numberOfMines) {
  // Create The Empty Board
  let newBoard = [];
  for (let i = 0; i < boardSize; i++) {
    newBoard.push({
      index: i,
      hasMine: false,
      numberOfNeighbouringMines: 0,
      visible: false,
    });
  }

  // Place random mines on the board
  let placedMines = 0;
  do {
    let boardIndex = Math.floor(Math.random() * boardSize); // Random 0 - boardSize
    if (!newBoard[boardIndex].hasMine) {
      placedMines++;
      newBoard[boardIndex].hasMine = true;
    }
  } while (placedMines < numberOfMines);
  return calculateNeighbours(newBoard);
}

// Loops trough the board and updates the
// numberOfNeighbouringMines field
// board - the board containing the mines
// returns - updated board
function calculateNeighbours(board) {
  const rowSize = getRowSize(board.length);
  for (let i = 0; i < board.length; i++) {
    // Check row above
    board = calculateRow(i, getRow(i - rowSize, rowSize), board, rowSize);
    // Check row below
    board = calculateRow(i, getRow(i + rowSize, rowSize), board, -rowSize);
    const thisRow = getRow(i, rowSize);
    // Check cell to left
    if (checkCell(i - 1, thisRow, board)) {
      board[i].numberOfNeighbouringMines++;
    }
    // Cehck cell to right
    if (checkCell(i + 1, thisRow, board)) {
      board[i].numberOfNeighbouringMines++;
    }
  }
  return board;
}

// Checks if one cell has a mine and if it is on the same row as
// the current cell
// index - The cell that is being investigated
// row - row that is being investigated (this does not have to be the same as index)
// board - the game board
// returns true if investigated cell has a mine and is on the same row
function checkCell(index, row, board) {
  const rowSize = getRowSize(board.length);
  if (index >= 0 && index < board.length) {
    if (getRow(index, rowSize) === row && board[index].hasMine) {
      return true;
    }
  }
  return false;
}

// Calculate the number of mines on the row (above or below)
// the current cell
// index - the cell being investigated
// row - the row above/below the index
// board - the board
// offset - the number of cells to offset (this could be +/-)
// returns the updated board
function calculateRow(index, row, board, offset) {
  for (let k = 0; k < 3; k++) {
    const thisCell = index - offset - 1 + k;
    if (thisCell >= 0 && thisCell < board.length) {
      if (checkCell(thisCell, row, board)) {
        board[index].numberOfNeighbouringMines++;
      }
    } else {
    }
  }
  return board;
}

function getRowSize(boardSize) {
  // Calculate how many cells on each row, should be square board
  return Math.floor(Math.sqrt(boardSize));
}

function getRow(index, rowSize) {
  // Calculate the row for this index
  return Math.floor(index / rowSize);
}

export default createBoard;
