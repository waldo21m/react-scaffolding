import reactLogo from '../../assets/react.svg';
import { incrementByAmount, useMainSelector } from './slice/mainSlice';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import viteLogo from '/vite.svg';
import './Main.css';

function Main() {
	const dispatch = useDispatch();
	const { count } = useMainSelector();

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank' rel='noreferrer'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<Button
					variant='contained'
					onClick={() => dispatch(incrementByAmount(1))}
				>
					count is {count}
				</Button>
				<p>
					Edit <code>src/Main.page.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default Main;
