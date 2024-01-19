import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main/Main.page';

const App: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			errorElement: <h1>Ups</h1>,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
