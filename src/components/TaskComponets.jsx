import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faCheck,
  faXmark,
} from "@fortawesome/duotone-light-svg-icons";

function TaskComponents({ index, notes }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditableTask, setIsEditableTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);
  const [taskNote, setTaskNote] = useState(notes);
  const modalRef = useRef(null);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };

  const editableTask = () => {
    setIsEditableTask(!isEditableTask);
  };

  const editTask = () => {
    setIsEditTask(!isEditTask);
  };

  {
    /*Funciones que cierran la venta de editar y borrar cuando se preciona por fuera del contenedor */
  }
  const handleOutsideClick = (event) => {
    // Comprueba si el clic ocurrió fuera del modal
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsEditableTask(false);
    } else {
      console.log("click dentro del modal");
    }
  };

  useEffect(() => {
    if (isEditableTask) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      // Limpia el evento al cerrar el modal
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEditableTask]);

  return (
    <>
      <div className="flex flex-row align-middle text-base gap-x-2 max-w-90 ">
        <div className="flex-none w-5 ">
          <span>{index}. </span>
        </div>
        <div className="grow ">
          {isEditTask ? (
            <>
              <div className="bg-sky-500 flex flex-row rounded">
                <textarea
                  type="text"
                  defaultValue={taskNote}
                  placeholder="Añade una nueva tarea a tu lista"
                  className="w-full bg-sky-500 white rounded p-1 text-xs text-zinc-800 placeholder-gray-500	focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                />
                <div className="m-2">
                  <button className="flex justify-center bg-lime-600 rounded-full shadow-lg p-1 ">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className="flex justify-center bg-red-400	 rounded-full shadow-lg p-1 ">
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="break-all "> {taskNote}</p>
          )}
        </div>
        <div className="flex-none ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="cursor-pointer w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2 checked:bg-blue-500 checked:border-blue-500"
          />
        </div>

        <section>
          <div
            className="content-center cursor-pointer w-3 bg-sky-500 px-1 py-1 rounded shadow-inner "
            onClick={editableTask}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div
            ref={modalRef}
            className={` bg-white	px-1 my-1 text-sm rounded absolute shadow-lg transform transition-all duration-300 ease-in-out ${
              isEditableTask
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10 pointer-events-none"
            }`}
          >
            <ul className="cursor-pointer ">
              <li onClick={editTask}>Editar</li>
              <li>Eliminar</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
export default TaskComponents;
