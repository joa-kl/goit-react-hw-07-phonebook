import { useSelector } from "react-redux"
import { Task } from "../Task/Task";
import { getStatusFilter, getTask } from "redux/selectors";
import { statusFilters } from "redux/constans";
import css from "./TaskList.module.css";



const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

export const TaskList = () => {
    const tasks = useSelector(getTask);
    const statusFilter = useSelector(getStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul className={css.list}>
            {visibleTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
