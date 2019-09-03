import { useState } from 'react';
import Button from '@app/Button';

const App = () => {
	const [value, setValue] = useState(0);
	const setWith = nextValue => () => setValue(nextValue);

	return (
		<>
			<Button onClick={setWith(value - 1)}>decrement</Button>
			<strong>{value}</strong>
			<Button onClick={setWith(value + 1)}>increment</Button>
		</>
	);
};

export default App;
