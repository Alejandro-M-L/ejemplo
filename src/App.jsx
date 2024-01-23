// import {useSelector} from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  // const tasksState = useSelector(state => state.tasks)
  // console.log(tasksState)
  return (
    <div className="bg-zinc-800 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

// https://redux-toolkit.js.org/
// https://redux-toolkit.js.org/tutorials/quick-start
// npm install @reduxjs/toolkit react-redux

// Agregar ID: genera id unicos
// npm i uuid

// npm i react-router-dom@6

// https://tailwindcss.com/docs/guides/vite
// npm install -D tailwindcss postcss autoprefixer
