import React, { useRef, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
	const [todos, setTodos] = useState<string[]>([]);
	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTodos([...todos, inputRef.current!.value]);
		inputRef.current!.value = "";
	};

	return (
		<>
			<h1>ToDo</h1>
			<form ref={formRef} onSubmit={onSubmit}>
				<input ref={inputRef} type="text"></input>
				<button>add</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<Todo key={index} text={todo}></Todo>
				))}
			</ul>
		</>
	);
};

export default App;
