import { RouterProvider } from 'react-router-dom';
import { router } from './App.routes';

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
