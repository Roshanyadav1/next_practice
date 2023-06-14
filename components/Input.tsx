import styles from "../app/page.module.css";

type InputProps = {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  addTodo: () => void;
};

const Input = (props: InputProps) => {
  return (
    <form>
      <input
        required
        className={styles.input}
        type="text"
        placeholder="Add a todo"
        onChange={props.inputChange}
        value={props.inputValue}
      />
      <button className={styles.button} type="submit" onClick={props.addTodo}>
        Add
      </button>
    </form>
  );
};

export default Input;
