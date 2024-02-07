import {Piece, NoPiece, King, Queen, Rook, Knight, Bishop, Pawn} from "./Piece";

class Game{
    winner: boolean;
    turn: number;
    board: Piece[][]
    ready: boolean
    possible: string[]
    constructor(){
        this.winner = false
        this.turn = 0
        this.board = []
        this.ready = false
        this.possible = []

        for(var i: number = 0; i < 8; i++){
            let arr: Piece[] = []
            for(var j: number = 0; j < 8; j++){
                arr.push(new NoPiece(2))
            }
            this.board.push(arr)
        }
        
        this.board[7][0] = new Rook(1)
        this.board[7][1] = new Knight(1)
        this.board[7][2] = new Bishop(1)
        this.board[7][3] = new Queen(1)
        this.board[7][4] = new King(1)
        this.board[7][5] = new Bishop(1)
        this.board[7][6] = new Knight(1)
        this.board[7][7] = new Rook(1)
        for(var i: number = 0; i < 8; i++){
            this.board[6][i] = new Pawn(1)
        }

        for(var i: number = 0; i < 8; i++){
            this.board[1][i] = new Pawn(0)
        }

        this.board[0][0] = new Rook(0)
        this.board[0][1] = new Knight(0)
        this.board[0][2] = new Bishop(0)
        this.board[0][3] = new Queen(0)
        this.board[0][4] = new King(0)
        this.board[0][5] = new Bishop(0)
        this.board[0][6] = new Knight(0)
        this.board[0][7] = new Rook(0)
    }
}

export default Game