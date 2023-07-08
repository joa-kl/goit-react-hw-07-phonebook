
import { StatusFilter } from "./StatusFilter";
import { TaskList } from "./TaskList/TaskList";
import css from "./App.module.css";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskCounter } from "./TaskCounter/TaskCounter";

export const App = () => {

  return (
    <div>
      <header className={css.wrapper}>
        <section className={css.section}>
          <h2 className={css.title}>Tasks</h2>
          <TaskCounter />
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
      <TaskForm/>
      <TaskList />
    </div>
    )
};

export default App;
