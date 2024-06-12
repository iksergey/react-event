import { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
    const [textTask, setTextTask] = useState("");
    const [titleTask, setTitleTask] = useState("");
    const [taskImageUrl, setTaskImageUrl] = useState("");
    const [tasks, setTasks] = useState([
        { taskTitle: "Заголовок", taskText: "Еженедельное собрание с командой для обсуждения текущих задач", taskImageUrl: "https://placehold.co/150" },
        { taskTitle: "Заголовок", taskText: "Разработка и тестирование новой функции для продукта", taskImageUrl: "https://placehold.co/150" },
        { taskTitle: "Заголовок", taskText: "Проведение обзора кода для улучшения качества и устранения ошибок", taskImageUrl: "https://placehold.co/150" },
        { taskTitle: "Заголовок", taskText: "Встреча с клиентом для обсуждения требований и получения обратной связи", taskImageUrl: "https://placehold.co/150" },
        { taskTitle: "Заголовок", taskText: "Посещение тренинга или вебинара для повышения квалификации", taskImageUrl: "https://placehold.co/150" },
    ]);

    const addTaskBtn = () => {
        if (textTask.trim() !== "" && titleTask.trim() !== "") {
            const newTask = {
                taskTitle: titleTask,
                taskText: textTask,
                taskImageUrl: taskImageUrl || "https://placehold.co/150"
            };
            setTasks([newTask, ...tasks]);
            setTextTask("");
            setTitleTask("");
            setTaskImageUrl("");
        }
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Список дел</h1>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    value={titleTask}
                    onChange={(e) => setTitleTask(e.target.value)}
                    type="text"
                    placeholder="Заголовок задания" />
                <input
                    className="form-control"
                    value={textTask}
                    onChange={(arg) => { setTextTask(arg.target.value); }}
                    type="text"
                    placeholder="Текст нового задания" />
                <input
                    className="form-control"
                    value={taskImageUrl}
                    onChange={(arg) => { setTaskImageUrl(arg.target.value); }}
                    type="text"
                    placeholder="URL изображения (необязательно)" />
                <button
                    className="btn btn-primary"
                    onClick={addTaskBtn}>
                    Добавить
                </button>
            </div>
            <div>
                {
                    tasks.map((item, index) =>
                    (
                        <ToDoItem key={index} taskItem={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
