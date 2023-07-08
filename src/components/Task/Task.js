import { useDispatch, useSelector } from "react-redux";
import css from "./Task.module.css";
import { getTask } from "redux/selectors";
import { deleteTask, toggleCompleted } from "redux/actions";

export const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <div className={css.wrapper}>
            <input
                type="checkbox"
                className={css.checkbox}
                checked={task.completed}
                onChange={handleToggle}
            />
            <p className={css.text}>{task.text}</p>
            <button className={css.btn} onClick={handleDelete}>
               Close
            </button>
        </div>
    );
};