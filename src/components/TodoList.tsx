import React from "react";
import {IItem} from '../types/todo'

interface IProps {
    todos: IItem[],
    onRemove: (id:string) => void,
}

// interface IState {
//     count: number
// }

// class TodoList extends React.Component<IProps, IState> {
//     handleState() {
//         this.setState(({count})=> console.log(count))
//     }
    
//     render() {
//         return <p>This is a Class Component</p>
//     }

// }

const TodoList: React.FC<IProps> = ({todos,onRemove}) => {
    return (
        <ul>
            {todos.map(({ id, title }) => {
                return (
                    <li key={id}>
                         <p>{id}</p>
                        <p>{title}</p>
                        <button onClick={onRemove.bind(this,id)}>Remove</button>
                    </li>
               )
            })}
        </ul>
    )
}

export default TodoList;