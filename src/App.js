import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);
  const currentDate = new Date().toDateString();
  const addItem = (taskText) => {
    const newItem = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setList([...list, newItem]);
  };
  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  const toggleTask = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    setList(updatedList);
  };
  return (
    <>
      <Header />
      <div className="main">
      <div className="app-container">
        <h3 id="Date">{currentDate}</h3>

        <List
          list={list}
          addItem={addItem}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
    </div>
      
      <Footer />
    </>
  );
}

export default App;
