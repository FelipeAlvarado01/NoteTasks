import "./App.css";
import CardTask from "./components/CardTask";

function App() {
  return (
    <CardTask
      taskName="My Fisrts Card"
      notes="Realizar tarjetas en react"
      index={1}
    />
  );
}

export default App;
