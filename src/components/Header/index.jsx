import styles from './header.module.css';
import ToDoLogo from '../../assets/ToDoLogo.svg';
import { LiaPlusCircleSolid } from "react-icons/lia";
import { useState } from 'react';


export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={ToDoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder="Add a new task" type="text" value={title} onChange={onChangeTitle} />
                <button>
                    Create
                    <LiaPlusCircleSolid size={20} />
                </button>
            </form>
        </header>
    )
}