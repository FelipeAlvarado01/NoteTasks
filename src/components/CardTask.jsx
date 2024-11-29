import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons"; // Importa el icono necesario
import { useState } from "react";

function CardTask({ taskName, notes, index }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };

  return (
    <>
      <section className="flex flex-col ...">
        <nav className="flex flex-row">
          <div className="basis-1/2">
            <h1>{taskName}</h1>
          </div>
          <div className="basis-1/4">
            <FontAwesomeIcon icon={faGear} />
          </div>
        </nav>
        <section className="flex flex-row">
          <div className="basis-1/4">
            <span>{index}.</span>
          </div>
          <div className="basis-1/2">
            <span>{notes}</span>
          </div>
          <div className="basis-1/4">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        </section>
        <div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </section>
    </>
  );
}

export default CardTask;
