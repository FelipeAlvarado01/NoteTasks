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
      <section className="my-cardTask">
        <nav>
          <div className="my-titleTask">
            <h1>{taskName}</h1>
          </div>
          <div className="my-settingsTask">
            <FontAwesomeIcon icon={faGear} />
          </div>
        </nav>
        <section className="my-taskSection">
          <div>
            <span>{index}.</span>
          </div>
          <div>
            <span>{notes}</span>
          </div>
          <div>
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
