import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/duotone-light-svg-icons";

function TaskComponents({ index, notes }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditableTask, setIsEditableTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);
  const [taskNote, setTaskNote] = useState(notes);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };

  const editableTask = () => {
    setIsEditableTask(!isEditableTask);
  };

  const editTask = () => {
    setIsEditTask(!isEditTask);
  };

  return (
    <>
      <div className="flex flex-row items-baseline text-base gap-x-2 max-w-90 ">
        <section>
          <div
            className="content-center cursor-pointer w-3 bg-sky-500 px-1 py-1 rounded shadow-inner "
            onClick={editableTask}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div
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

        <div className="flex-none w-5 ">
          <span>{index}. </span>
        </div>
        <div className="grow ">
          {isEditTask ? (
            <textarea
              type="text"
              value={taskNote}
              placeholder="Añade una nueva tarea a tu lista"
              className="w-full h-70 bg-sky-200 white	rounded p-1 text-xs text-zinc-800 placeholder-gray-500	focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
            />
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
      </div>
    </>
  );
}
export default TaskComponents;
