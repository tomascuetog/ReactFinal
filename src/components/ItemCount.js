import "./styles/ItemCount.css"
import React , { useState } from 'react';

function ItemCount({ stock, initial }) {
	const [counterValue, setCounterValue] = useState(initial);
	const sum = () => {
		counterValue < stock
			? setCounterValue(counterValue + 1)
			: console.log('No hay stock');
	};
	const substract = () => {
		counterValue > 0
			? setCounterValue(counterValue - 1)
			: console.log('El número debe ser mayor a cero');
	};
	return (
		<div >
			<button  onClick={substract}>
				-
			</button>
			<span >{counterValue}</span>
			<button onClick={sum}>
				+
			</button>
		</div>
	);
}

export default ItemCount;