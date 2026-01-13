import Calculator from "./components/Calculator/Calculator";

import "./App.css";
import DataGrid from "./components/TableWithFilter/DataGrid";
import WindowSizeWatcher from "./components/WindowSize/WindowSizeWatcher";
import DebounceSearch from "./components/DebounceSearch/DebounceSearch";

function App() {
  return (
    <>
      <Calculator />
		<DataGrid/>
		<WindowSizeWatcher/>
		<DebounceSearch/>
    </>
  );
}

export default App;
