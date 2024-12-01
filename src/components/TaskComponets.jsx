import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/duotone-light-svg-icons";

function TaskComponents({ index, notes }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Actualiza el estado con el valor del checkbox
  };
  return (
    <>
      <div className="flex flex-row items-stretch text-lg gap-x-2">
        <div className="content-center cursor-pointer w-3 bg-sky-500 px-1 py-1 rounded shadow-inner ">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className="flex-none w-5 ">
          <span>{index}. </span>
        </div>
        <div className="grow max-w-50">
          <span>{notes}</span>
        </div>
        <div className="flex-none w-14 ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="cursor-pointer w-14 h-4 "
          />
        </div>
      </div>
    </>
  );
}
export default TaskComponents;
