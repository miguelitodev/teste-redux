import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { sum } from "./store/Calculator/Calculator.actions";

const App = () => {
	const [a, setA] = React.useState("");
	const [b, setB] = React.useState("");

	const dispatch = useDispatch();
	const result = useSelector((state) => state.calculator);

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
				<h1>Teste Redux</h1>

				<input
					placeholder="A"
					type="text"
					value={a}
					onChange={(e) => setA(Number(e.target.value))}
				/>
				<input
					placeholder="B"
					type="text"
					value={b}
					onChange={(e) => setB(Number(e.target.value))}
				/>

				<button
					onClick={() => {
						dispatch(sum(a, b));
					}}
				>
					SOMAR
				</button>
				<button>SUBTRAIR</button>

				<div>Resultado: {result}</div>
			</div>
		</>
	);
};

export default App;
