import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faPlus,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"; // Importa el icono necesario
import { useState } from "react";

import TaskComponents from "./TaskComponets";

let nextId = 1;
function CardTask() {
  const [addTitle, setAddTitle] = useState(false);
  const [titleCard, setTitleCard] = useState("");

  const [noteTask, setNoteTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [showTextarea, setShowTextarea] = useState(false);

  {
    /*Se agrega el titulo al la carta */
  }
  const showInputAddTitle = () => {
    setAddTitle(!addTitle);
    console.log("titulo: " + titleCard);
  };
  const addTitleCard = (e) => {
    setTitleCard(e.target.value);
  };

  {
    /* Se muestra el textarea al dar click en el boton + */
  }
  const showTextareaClick = () => {
    setShowTextarea(!showTextarea);
  };

  {
    /* Se guarda el texto que se haya introducido en el textarea*/
  }
  const inputValue = (e) => {
    setNoteTask(e.target.value);
  };

  {
    /* Se guarda inserta la nueva tarea en el array nombrado como "tasks" para posteriormente ser renderizado*/
  }
  const addTask = () => {
    setTasks([...tasks, { id: nextId++, noteTask: noteTask }]);
  };

  return (
    <>
      <figure className=" bg-sky-400 min-w-96 h-96 px-1 shadow-lg rounded-xl ">
        {/* Encabezado de la tarea */}

        <header className="flex flex-wrap w-full items-center justify-stretch border-b-2 py-1">
          <div className="flex-1">
            {addTitle ? (
              <h1 className="text-2xl text-center text-black font-sans">
                {titleCard}
              </h1>
            ) : (
              <>
                <div className="flex gap-0.5 mx-2 p-1 py-3 rounded bg-sky-200 white">
                  <input
                    type="text"
                    onChange={addTitleCard}
                    placeholder="Ingrese el título del bloc de tareas."
                    className="w-full bg-sky-200 white	rounded text-base text-zinc-800 placeholder-gray-500	focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></input>
                  <button
                    onClick={showInputAddTitle}
                    className="flex justify-center bg-lime-600 rounded-full shadow-lg p-1 "
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
              </>
            )}
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
        <div className="flex flex-col content-between h-5/6 py-3 px-2 gap-2 	">
          <ul className="flex flex-col overflow-y-auto h-5/6 gap-y-2">
            {tasks.map((task) => (
              <TaskComponents
                key={task.id}
                index={task.id}
                notes={task.noteTask}
              />
            ))}
          </ul>

          <div>
            {showTextarea ? (
              <textarea
                type="text"
                placeholder="Añade una nueva tarea a tu lista"
                onChange={inputValue}
                required
                className="w-full h-70 bg-sky-200 white	rounded p-1 text-xs text-zinc-800 placeholder-gray-500	focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
              />
            ) : (
              ""
            )}
          </div>

          {/* Botón para adicionar tareas */}

          <div className="flex flex-row justify-between ">
            <div>
              {showTextarea ? (
                <button
                  onClick={showTextareaClick}
                  className="flex justify-center bg-sky-700 rounded-full shadow-lg p-4"
                >
                  <FontAwesomeIcon icon={faXmark} className="max-w-3" />
                </button>
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                onClick={showTextarea ? addTask : showTextareaClick}
                className={`flex justify-center rounded-full shadow-lg p-4  ${
                  showTextarea ? "bg-sky-600	" : "bg-sky-500"
                }`}
              >
                <FontAwesomeIcon
                  icon={showTextarea ? faCheck : faPlus}
                  className="max-w-3"
                />
              </button>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
}
export default CardTask;
