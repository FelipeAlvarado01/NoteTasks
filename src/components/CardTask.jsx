import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons"; // Importa el icono necesario
import TaskComponents from "./TaskComponets";
function CardTask({ cardTaskName, notes, index }) {
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
          <section className="h-5/6">
            <TaskComponents notes={notes} index={index} />
            <TaskComponents notes={notes} index={index} />
          </section>
          {/* Botón para adicionar tareas */}
          <div className="flex justify-center">
            <button
              type="button"
              aria-label="Agregar tarea"
              className="cursor-pointer bg-sky-500 rounded-full shadow-lg py-2 px-3"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </main>
      </figure>
    </>
  );
}

export default CardTask;
