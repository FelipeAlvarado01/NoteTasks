import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons"; // Importa el icono necesario
import { useState } from "react";

function CardTask({ taskName, notes, index }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };

  return (
    <>
      <header>
        <nav>
          <div>
            <h1>{taskName}</h1>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
          </div>
        </nav>
      </header>
      <section>
        <span>{index}.</span>
        <span>{notes}</span>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </section>
    </>
  );
}

export default CardTask;
