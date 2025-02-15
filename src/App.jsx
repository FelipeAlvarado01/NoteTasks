import "./App.css";
import CardTask from "./components/CardTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

let cardId = 0;
function App() {
  const [myCards, setMyCard] = useState([]);

  const addNewCardTask = () => {
    setMyCard([...myCards, { id: cardId++ }]);
    console.log("agregando nueva tarea");
  };

  return (
    <>
      <main className="flex flex-row w-full h-screen justify-center gap-1 items-center">
        <section className="flex gap-2 relative top-0">
          {myCards.map((card, index) => (
            <>
              <div
                className="absolute"
                style={{ right: `${-index * 10}px`, top: `${index * 10}px` }}
              >
                <CardTask key={card.id} />
              </div>
            </>
          ))}
        </section>

        <section>
          <button
            onClick={addNewCardTask}
            className=" bg-slate-200/50 p-4 rounded-md px-10 py-16  hover:bg-slate-300 shadow-2xl"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
