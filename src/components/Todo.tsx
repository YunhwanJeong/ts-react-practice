import React from "react";

interface Props {
	key: number;
	text: string;
}

const Todo = ({ text }: Props) => {
	return (
		<>
			<li>{text}</li>
		</>
	);
};

export default Todo;
