import Pieces from "./Pieces";
import Game from "../gameBack/Game";
import {Piece} from "../gameBack/Piece"
import { useCallback, useEffect, useState } from 'react'




const Board = () => {
  const game = new Game;
  let move: string;
  const [board, setBoard] = useState<Piece[][]>(game.board)
  const [change, setChange] = useState(1)

  const checkAction = (position: string) => {
    let x = parseInt(position[0]);
    let y = parseInt(position[1]);
    let piece = game.board[x][y];

    if(game.ready == false && piece.color == game.turn){
      game.possible = piece.possibleMoves(game.board, position, piece.color);
      game.ready = true;
      move = position;
    }
    else if(game.ready == true){
      if(piece.isValidMove(game.board[parseInt(move[0])][parseInt(move[1])], game.board, move, position, game.board[parseInt(move[0])][parseInt(move[1])].color)){
        game.possible = [];
        game.turn = game.turn == 0 ? 1 : 0
        game.ready = false;
        move = "";
      }
    }
    console.log(game.ready)
    console.log(game.possible);
    console.table(game.board);
    setBoard(game.board)
    setChange(change + 1)
  }


  return (
    <div>
      <div id='board'> {board.map((arr, i) => {
        // intercalate background color
        let bool = i % 2 == 0 ? 1 : 0;
        return (
        <div className='row'> {arr.map((it, j) => {
          // set square background color
          let classs = j % 2 == bool ? "square s1" : "square s2"
          if(game.possible.includes(`${i}${j}`)){
            classs += 'possible'
            console.log('aaaaaaaa')
          }
          let item: String = it.called()
          let dataID = `${i}${j}`

          return (
          <div className={classs} key={dataID} onClick={() => {checkAction(dataID)}}>
            <Pieces name={item[0]} color={item[1]}></Pieces>
          </div>)})}
        </div>)})}
      </div>
      </div>
    )
}


export default Board