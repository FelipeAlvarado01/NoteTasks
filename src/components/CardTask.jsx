import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons"; // Importa el icono necesario
import { useState } from "react";

function CardTask({ cardTaskName, notes, index }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };

  return (
    <>
      <figure className=" bg-sky-200 w-96 h-96 p-2 border-2 shadow-lg rounded-xl ">
        {/* Encabezado de la tarea */}

        <header className="flex flex-wrap items-center justify-stretch">
          <div className="flex-1">
            <h1 className="right text-2xl  text-black">{cardTaskName}</h1>
          </div>
          <div className="flex-none w-14 place-self-center">
            <FontAwesomeIcon icon={faGear} aria-label="Configuración" />
          </div>
        </header>

        {/* Detalles de la tarea */}
        <section className="flex items-stretch flex-row border-t-2 py-2">
          <div className="flex-none w-5 h-14">
            <span>{index}.</span>
          </div>
          <div className="grow h-14">
            <span>{notes}</span>
          </div>
          <div className="flex-none w-14 h-14 self-center place-self-center">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
        </section>

        {/* Botón para adicionar tareas */}
        <div className="task-footer">
          <button type="button" aria-label="Agregar tarea">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </figure>
    </>
  );
}

export default CardTask;
