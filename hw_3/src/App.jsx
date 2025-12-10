import "./App.css";
import Competition from "./components/task_1/Competition.jsx";
import Temperature from "./components/task_2/Temperature.jsx";

import sportsmansList from "./components/data/sportsmensList.js";

function App() {
  return (
    <>
      <Competition sportsmansList={sportsmansList} />
      <Temperature />
    </>
  );
}

export default App;
