import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    if(params.id){
      dispatch(editTask(task))
    }else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };
  
  useEffect(() => {
    // console.log(params)
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={hanldeSubmit} className="bg-zinc-700 max-w-sm p-4 mb-2">
      <label htmlFor="title" className="block text-sm font-bold">Task:</label>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-500 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">Descripción:</label>
      <textarea
        name="description"
        placeholder="Descripción"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-500 mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-2 py-2 rounded-md text-sm">Guardar</button>
    </form>
  );
}

export default TaskForm;
