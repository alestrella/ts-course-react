import React, { useState } from "react";
import { IItem } from '../types/todo'

interface IProps{
    onAdd: (todo: IItem) => void,
}

type OnlyTitle = Pick<IItem, 'title'>;

const AddTodo: React.FC<IProps> = ({onAdd}) => {
    // const titleInputRef = useRef<HTMLInputElement>(null);
    const [todo, setTodo] = useState<Partial<OnlyTitle>>({});
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ title: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(titleInputRef.current?.value)
        if (!todo.title) {
            return;
        }
        onAdd(todo as IItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add title
                <input type="text" name='title' onChange={handleChange}/>
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;