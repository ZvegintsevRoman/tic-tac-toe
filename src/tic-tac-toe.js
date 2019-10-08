class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.current = 'x';
        this.winCondition = [['00','01','02'],
                            ['10','11','12'],
                            ['20','21','22'],
                            ['00','10','20'],
                            ['01','11','21'],
                            ['02','12','22'],
                            ['00','11','22'],
                            ['20','11','02']];
    } 

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.current;
            this.current === 'x' ? this.current = 'o' : this.current = 'x';
        }
    }

    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        if (this.winCondition.some(cell => cell.every(event => this.field[event[0]][event[1]]  === 'x'))) return 'x';  
        if (this.winCondition.some(cell => cell.every(event => this.field[event[0]][event[1]]  === 'o'))) return 'o'; 
        return null;
    }

    noMoreTurns() {
        return (this.field.every(row => row.every(cell => cell !== null))) ? true : false;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

