import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * 클래스 컴포넌트가 아닌 함수 컴포넌트
 * 더 간단히 컴포넌트를 작성하는 방법.
 * state 없이 render 함수만 갖음.
 */
function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0, // history에서 몇번째 단계인지
            xIsNext: true, // 플레이어의 순서, X의 차례 여부
        }
    }

    handleClick(i) {
        /*
        .slice() 를 호출하는 것으로 기존 배열을 수정하지 않고, 복사본을 생성하여 수정

        이렇게 사본을 만들어 사용하는 이유는 불변성 때문
        1. 복잡한 특징들을 단순하게 만듦
           이전의 상태들로 돌아가는 히스토리와 같은 기능의 구현에 용이하다.
        2. 변화를 감지
           데이터가 직접 수정되는 것이 아니라 사본을 만들어 수정하는 것이기에 이전 데이터와 비교하여 변화를 감지하기 쉽다.
        3. React에서 다시 렌더링하는 시기를 결정함함
           React에서 순수 컴포넌트를 만드는 데 도움을 준다
           변하지 않는 데이터는 변경이 이루어졌는지 쉽게 판단할 수 있으며 이를 바탕으로 컴포넌트의 재 렌더링을 결정할 수 있다.
        */
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (calcuateWinner(squares) || squares[i]) {
            return
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calcuateWinner(current.squares)
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to move start'

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

// 승자 계산 함수
function calcuateWinner(squares) {
    // 승리하는 경우에 대한 배열
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let length = lines.length
    for (let i = 0; i < length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
