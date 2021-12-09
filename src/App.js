import Products from './Components/Products';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './Components/Checkout';
import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar';
import History from './Components/History';

function App() {
	const user = useSelector((state) => state.user);
	const products = useSelector((state) => state.allProducts);
	return (
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Products />} />
					{user.loggedIn ? (
						<>
						<Route path="login" element={<Navigate to="/" />} />
						<Route path="register" element={<Navigate to="/" />} />
						<Route path="history" element={<History />} />
						{products.products.length > 0 ? <Route path="checkout" element={<Checkout />} /> : <Route path="checkout" element={<Navigate to="/" />} />}
						</>

					) : (
						<>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="checkout" element={<Navigate to="/" />} />
						<Route path="history" element={<Navigate to="/" />} />
						</>	)		
			}				
				</Route>
			</Routes>
	
	);
}

export default App;
