import reactLogo from '../../assets/react.svg';
import Button from '@mui/material/Button';
import { incrementByAmount, useMainSelector } from './slice/mainSlice';
import './Main.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import viteLogo from '/vite.svg';

function Main() {
	const dispatch = useAppDispatch();
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
					color='secondary'
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
