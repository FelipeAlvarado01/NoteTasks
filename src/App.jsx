import "./App.css";
import CardTask from "./components/CardTask";

function App() {
  return (
    <>
      <section className="flex w-full h-screen justify-center items-center">
        <CardTask
          cardTaskName="My Fisrts Card"
          notes="Realizar tarjetas en react"
          index={1}
        />
      </section>
    </>
  );
}

export default App;
