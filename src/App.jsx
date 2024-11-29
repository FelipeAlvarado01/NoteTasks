import "./App.css";
import CardTask from "./components/CardTask";

function App() {
  return (
    <CardTask
      cardTaskName="My Fisrts Card"
      notes="Esto es un texto muy largo para una prueba de tamaño. Realizar tarjetas en react"
      index={1}
    />
  );
}

export default App;
