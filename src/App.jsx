import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

const App = () => {
	const [view, setView] = useState(false);
	return (
		<>
			<Header />
			{view ? (
				<CreateCourse setView={setView} />
			) : (
				<Courses setView={setView} />
			)}
		</>
	);
};
export default App;
