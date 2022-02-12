function makeAIMove(board: string) {
  const data = board.split("");
  const valids = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "-") {
      valids.push(i);
    }
  }

  const random = Math.floor(Math.random() * valids.length);
  return valids[random];
}

export { makeAIMove };
