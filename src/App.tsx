import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './App.store';
import { router } from './App.routes';

const App: React.FC = () => {
	return (
		<Provider store={appStore}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default App;
