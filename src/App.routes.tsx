import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <h1>Ups</h1>,
	},
]);

export { router };
