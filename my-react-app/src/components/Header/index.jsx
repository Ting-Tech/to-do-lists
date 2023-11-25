import styles from './header.module.css';
import ToDoLogo from '../../assets/ToDoLogo.svg';
import { LiaPlusCircleSolid } from "react-icons/lia";


export function Header() {
    return (
        <header className={styles.header}>
            <img src={ToDoLogo} />

            <form className={styles.newTaskForm}>
                <input placeholder="add a new task" type="text" />
                <button>
                    Create
                    <LiaPlusCircleSolid size={20} />
                </button>
            </form>
        </header>
    )
}