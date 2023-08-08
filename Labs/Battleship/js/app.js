//define the board size and ship lengths
const boardSize = 10;
const shipLengths = [5, 4, 3, 3, 2]; // Different ship lengths

const board = document.getElementById('board');
const resetButton = document.getElementById('reset-button');
const ships = [];
let isGameOver = false;

//creates the game board
function createBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleCellClick(row, col));
            board.appendChild(cell);
        }
    }
}
//places the ships randomly on the board
function placeShips() {
    for (const length of shipLengths) {
        const isVertical = Math.random() < 0.5;
        const ship = {
            length: length,
            positions: [],
        };

        if (isVertical) {
            //place ship vertically
            const startRow = Math.floor(Math.random() * (boardSize - length + 1));
            const col = Math.floor(Math.random() * boardSize);
            for (let i = 0; i < length; i++) {
                ship.positions.push({ row: startRow + i, col: col });
            }
            //place ship horizontally
        } else {
            const startCol = Math.floor(Math.random() * (boardSize - length + 1));
            const row = Math.floor(Math.random() * boardSize);
            for (let i = 0; i < length; i++) {
                ship.positions.push({ row: row, col: startCol + i });
            }
        }

        ships.push(ship);
    }
}

function handleCellClick(row, col) {
    if (isGameOver) return;

    //check if the clicked cell hits a ship
    for (const ship of ships) {
        for (const position of ship.positions) {
            if (position.row === row && position.col === col) {
                //mark the cell as hit
                document.querySelector(`[data-row="${row}"][data-col="${col}"]`).classList.add('hit');

                //check if the ship is sunk
                const isSunk = ship.positions.every(pos =>
                    document.querySelector(`[data-row="${pos.row}"][data-col="${pos.col}"]`).classList.contains('hit')
                );

                if (isSunk) {
                    console.log('Ship sunk!');
                }

                return;
            }
        }
    }

    //mark the cell as miss
    document.querySelector(`[data-row="${row}"][data-col="${col}"]`).classList.add('miss');
}
//reset the game board
function resetGame() {
    board.innerHTML = '';
    ships.length = 0;
    isGameOver = false;
    createBoard();
    placeShips();
}
//initialize the game
createBoard();
placeShips();
resetButton.addEventListener('click', resetGame);
