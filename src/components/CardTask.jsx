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
        <main className="flex flex-col content-between h-5/6 py-3 px-2 gap-2 	">
          <ul className="flex flex-col overflow-y-auto h-5/6 gap-y-2">
            {tasks.map((task) => (
              <TaskComponents
                key={task.id}
                index={task.id}
                notes={task.noteTask}
              />
            ))}
          </ul>
          <TextareaTasks inputValue={inputValue} />
          {/* Botón para adicionar tareas */}

          <div onClick={addTask} className="flex flex-roñw justify-end">
            <FontAwesomeIcon
              icon={faPlus}
              className="cursor-pointer justify-end bg-sky-500 rounded-full shadow-lg p-4  max-w-10"
            />
          </div>
        </main>
      </figure>
    </>
  );
}

function TextareaTasks(inputValue) {
  return (
    <textarea
      type="text"
      placeholder="Añade una nueva tarea a tu lista"
      onChange={inputValue}
      required
      className="block bg-sky-200 white	rounded p-1 text-xs text-zinc-800 placeholder-gray-500	focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-sm"
    />
  );
}
export default CardTask;
