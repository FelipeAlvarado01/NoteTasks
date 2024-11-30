import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons"; // Importa el icono necesario
import { useState } from "react";

import TaskComponents from "./TaskComponets";

let nextId = 1;
function CardTask({ cardTaskName }) {
  const [noteTask, setNoteTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputValue = (e) => {
    setNoteTask(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { id: nextId++, noteTask: noteTask }]);
  };

  return (
    <>
      <figure className=" bg-sky-400 w-96 h-96 px-1 shadow-lg rounded-xl ">
        {/* Encabezado de la tarea */}

        <header className="flex flex-wrap items-center justify-stretch border-b-2 py-1">
          <div className="flex-1">
            <h1 className="text-2xl text-center text-black font-sans">
              {cardTaskName}
            </h1>
          </div>
          <div className="cursor-pointer bg-sky-500 px-1 py-3 rounded-tr-lg shadow-inner">
            <FontAwesomeIcon
              icon={faGear}
              aria-label="Configuración"
              className="w-14"
            />
          </div>
        </header>

        {/* Detalles de la tarea */}
        <main className="content-between h-5/6 py-3 px-2">
          <ul className="overflow-y-auto h-5/6">
            {tasks.map((task) => (
              <TaskComponents
                key={task.id}
                index={task.id}
                notes={task.noteTask}
              />
            ))}
          </ul>
          {/* Botón para adicionar tareas */}
          <input onChange={inputValue} />

          <button onClick={addTask}>
            <div className="cursor-pointer bg-sky-500 rounded-full shadow-lg py-2 px-3">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </button>
        </main>
      </figure>
    </>
  );
}

export default CardTask;
