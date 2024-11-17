import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import GenerateWorkoutPage from "./components/GenerateWorkoutPage/GenerateWorkoutPage.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/generate-workout"
            element={<GenerateWorkoutPage />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
