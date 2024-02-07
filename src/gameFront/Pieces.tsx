interface Ipieces {
    [key: string]: Function
}

const pieces: Ipieces = {
    k: (color: string)=>{
        let classs = `piece c${color}`
        return <span className={classs}>King</span>
    },
    q: (color: string)=>{
        let classs = `piece c${color}`
        return <span className={classs}>Queen</span>
    },
    r: (color: string)=>{
        let classs = `piece c${color}`
        return <span className={classs}>Rook</span>
    },
    n: (color: string)=>{
        let classs = `piece c${color}`
        return <span className={classs}>Knight</span>
    },
    b: (color: string)=>{
        let classs = `piece c${color}`
        return <span className={classs}>Bishop</span>
    },
    p: (color: string)=>{
        let classs = `piece c${color}`
        return <span className={classs}>Pawn</span>
    },
    z: ()=>{
        return <span className="piece nopiece"></span>
    }
}


function Pieces(props: any){
    const piece: string = props.name;
    const color: string = props.color
    return pieces[piece](color)
}

export default Pieces