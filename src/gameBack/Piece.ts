function checkDiag(board: Piece[][], start: string, color: number){ // ok
    let possible: string[] = []

    var x: number
    var y: number

    x = parseInt(start[0])
    y = parseInt(start[1])
    while(x != -1 || y != -1){
        x--
        y--
        if(x == -1 || y == -1){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    x = parseInt(start[0])
    y = parseInt(start[1])

    while(x != -1 || y != 8){
        x--
        y++
        if(y == 8 || x == -1){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    x = parseInt(start[0])
    y = parseInt(start[1])

    while(x != 8 || y != -1){
        x++
        y--
        if(x == 8 || y == -1){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    x = parseInt(start[0])
    y = parseInt(start[1])

    while(x != 8 || y != 8){
        x++
        y++
        if(x == 8 || y == 8){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    return possible
}

function checkLine(board: Piece[][], start: string, color: number){ // ok
    let possible: string[] = []
    var x: number
    var y: number

    x = parseInt(start[0])
    y = parseInt(start[1])

    while(x != -1){
        x--
        if(x == -1){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    x = parseInt(start[0])
    y = parseInt(start[1])

    while(x != 8){
        x++
        if(x == 8){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    x = parseInt(start[0])
    y = parseInt(start[1])

    while(y != -1){
        y--
        if(y == -1){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }
    x = parseInt(start[0])
    y = parseInt(start[1])

    while(y != 8){
        y++
        if(y == 8){
            break
        }
        if(board[x][y] instanceof NoPiece){
            possible.push(`${x}${y}`)
        }
        else if(board[x][y].color != color){
            possible.push(`${x}${y}`)
            break
        }
        else{
            break
        }
    }

    return possible
}

export class Piece{ // ok
    color: number
    name: string
    stMove: boolean
    constructor(color: number){
        this.color = color
        this.name = ''
        this.stMove = true
    }
    possibleMoves(board: Piece[][], start: string, color: number): string[]{
        return []
    }
    called(): string{
        return `${this.name}${this.color}`
    }
    isValidMove(self: Piece, board: Piece[][], start: string, to: string, color: number){
        let possible: string[] = self.possibleMoves(board, start, color)
        console.log(start)
        console.log(possible)
        console.log(to)
        if(possible.includes(to)){
            board[parseInt(to[0])][parseInt(to[1])] = self
            board[parseInt(start[0])][parseInt(start[1])] = new NoPiece(2)
            self.stMove = false
            return true
        }
        return false
    }
}

export class King extends Piece{
    constructor(color: number){
        super(color)
        this.name = 'k'
    }

    possibleMoves(){
        return []
    }

    castle(){

    }
}

export class Queen extends Piece{ // ok
    constructor(color: number){
        super(color)
        this.name = 'q'
    }

    possibleMoves(board: Piece[][], start: string, color: number){
        let possible: string[] = []
        possible = possible.concat(checkDiag(board, start, color))
        possible = possible.concat(checkLine(board, start, color))
        return possible
    }
}

export class Rook extends Piece{ // ok
    constructor(color: number){
        super(color)
        this.name = 'r'
    }

    possibleMoves(board: Piece[][], start: string, color: number){
        let possible: string[] = checkLine(board, start, color)
        return possible
    }
}

export class Knight extends Piece{
    constructor(color: number){
        super(color)
        this.name = 'n'
    }

    possibleMoves(board: Piece[][], start: string, color: number){
        let possible: string[] = []

        let x = parseInt(start[0])
        let y = parseInt(start[1])
        if(x < 6 && y < 7){
            if(board[x + 2][y + 1].color != color){
                possible.push(`${x + 2}${y + 1}`)
            }
        }
        if(x < 6 && y > 0){
            if(board[x + 2][y - 1] instanceof NoPiece || board[x + 2][y - 1].color != color){
                possible.push(`${x + 2}${y - 1}`)
            }
        }
        if(x > 1 && y < 7){
            if(board[x - 2][y + 1] instanceof NoPiece || board[x - 2][y + 1].color != color){
                possible.push(`${x - 2}${y + 1}`)
            }
        }
        if(x > 1 && y > 0){
            if(board[x - 2][y - 1] instanceof NoPiece || board[x - 2][y - 1].color != color){
                possible.push(`${x - 2}${y - 1}`)
            }
        }
        if(x < 7 && y < 6){
            if(board[x + 1][y + 2] instanceof NoPiece || board[x + 1][y + 2].color != color){
                possible.push(`${x + 1}${y + 2}`)
            }
        }
        if(x < 7 && y > 1){
            if(board[x + 1][y - 2] instanceof NoPiece || board[x + 1][y - 2].color != color){
                possible.push(`${x + 1}${y - 2}`)
            }
        }
        if(x > 0 && y < 6){
            if(board[x - 1][y + 2] instanceof NoPiece || board[x - 1][y + 2].color != color){
                possible.push(`${x - 1}${y + 2}`)
            }
        }
        if(x > 0 && y > 1){
            if(board[x - 1][y - 2] instanceof NoPiece || board[x - 1][y - 2].color != color){
                possible.push(`${x - 1}${y - 2}`)
            }
        }
        return possible
    }
}

export class Bishop extends Piece{ // ok
    constructor(color: number){
        super(color)
        this.name = 'b'
    }

    possibleMoves(board: Piece[][], start: string, color: number){
        let possible: string[] = checkDiag(board, start, color)
        return possible
    }
}

export class Pawn extends Piece{ // promote, en passant
    constructor(color: number){
        super(color)
        this.name = 'p'
    }

    promote(){
        return false
    }

    possibleMoves(board: Piece[][], start: string, color: number){
        let possible: string[] = []
        let x = parseInt(start[0])
        let y = parseInt(start[1])
        let vx =  this.color == 1 ? x - 1 : x + 1
        let vx2 =  this.color == 1 ? x - 2 : x + 2
        // big jump
        if(this.stMove == true && board[vx2][y] instanceof NoPiece){
            possible.push(`${vx2}${y}`)
        }
        // normal move
        if(board[vx][y] instanceof NoPiece){
            possible.push(`${vx}${y}`)
        }
        // kill
        if(board[vx][y + 1] instanceof Piece){
            if(!(board[vx][y + 1] instanceof NoPiece) && board[vx][y + 1].color != this.color){
                possible.push(`${vx}${y + 1}`)
            }
        }
        // kill other side
        if(board[vx][y - 1] instanceof Piece){
            if(!(board[vx][y - 1] instanceof NoPiece) && board[vx][y - 1].color != this.color){
                possible.push(`${vx}${y - 1}`)
            }
        }
        // en passant
        if(board[vx][y + 1] instanceof NoPiece && board[x][y + 1] instanceof Pawn && board[x][y + 1].stMove == true){
            if(board[vx][y + 1] instanceof NoPiece && board[x][y + 1].color != this.color){
                possible.push(`${vx}${y + 1}`)
            }
        }

        
        return possible
    }
}

export class NoPiece extends Piece{ // ok
    constructor(color: number){
        super(color)
        this.name = 'z'
    }
}