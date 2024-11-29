import { useState } from "react";

function TaskComponents({ notes, index }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };
  return (
    <>
      <div className="flex flex-row items-stretch text-lg">
        <div className="flex-none w-5 ">
          <span>{index}.</span>
        </div>
        <div className="grow">
          <span>{notes}</span>
        </div>
        <div className="flex-none w-14 ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-14 h-4 "
          />
        </div>
      </div>
    </>
  );
}
export default TaskComponents;
