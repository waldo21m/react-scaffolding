import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './App.store';
import { router } from './App.routes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: React.FC = () => {
	return (
		<Provider store={appStore}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default App;
