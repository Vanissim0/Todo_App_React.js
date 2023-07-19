import { Routes, Route, Link } from "react-router-dom";

import { TodoWrapper } from "./components/TodoWrapper/TodoWrapper";
import { SettingsWrapper } from "./components/SettingsWrapper/SettingsWrapper";

function App() {
  return (
    <div className="App">
      <TodoWrapper/>
      {/* <Link to="/">Main</Link> */}
      <Link to="/settings">Settings</Link>
      <Routes>
        {/* <Route path="/" element={<TodoWrapper />} /> */}
        <Route path="/settings" element={<SettingsWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
