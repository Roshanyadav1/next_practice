"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/Input";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    inputValue && setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTodo = (ele: number) => {
    const newTodos = todos.filter((todo, index) => index !== ele);
    setTodos(newTodos);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.container}>
        <Input
          inputChange={onInputChange}
          inputValue={inputValue}
          addTodo={addTodo}
        />
        <div>
          {todos.map((todo, index) => (
            <div key={index} className={styles.list}>
              <p className={styles.item}>{todo}</p>
              <button className={styles.removeBtn} onClick={() => removeTodo(index)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


