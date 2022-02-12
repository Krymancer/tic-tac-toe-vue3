const checkWin = (board: string, player = "X") => {
  board = board.replaceAll("-", "*");
  const data = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];

  for (let i = 0; i < data.length; i++) {
    if (data[i].every((x) => x === player)) {
      return true;
    }
  }
  return false;
};

const checkTie = (board: string) => {
  const data = board.split("");
  return data.every((x) => x !== "-");
};

export { checkWin, checkTie };
