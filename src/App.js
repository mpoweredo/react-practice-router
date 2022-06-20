import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import FastFood from "./Pages/menu/FastFood";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import Menu from "./Pages/Menu";
import NotFound from "./Pages/NotFound";
import Producers from "./Pages/Producers";
import AddDish from "./Pages/AddDish";
import DishDetail from "./Pages/DishDetail";
import Protein from "./Pages/menu/Protein";

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/landing-page' />
					</Route>
					<Route path='/react-practice-router' exact>
						<Redirect to='/landing-page' />
					</Route>
					<Route path="/menu" exact>
						<Menu />
					</Route>
					<Route path="/landing-page" exact>
						<LandingPage />
					</Route>
					<Route path="/about-us">
						<AboutUs />
					</Route>
					<Route path="/producers">
						<Producers />
					</Route>
					<Route path="/menu/fast-food" exact>
						<FastFood />
					</Route>
					<Route path="/menu/protein" exact>
						<Protein />
					</Route>
					{/* <Route path='/menu/protein/:dishId'>
						<DishDetail />
					</Route> */}
					<Route path="/menu/vege" exact>
						<FastFood />
					</Route>
					{/* <Route path='/menu/vege/:dishId'>
						<DishDetail />
					</Route> */}
					<Route path='/menu/fast-food/add-dish' exact>
						<AddDish />
					</Route>
					<Route path='/menu/protein/add-dish' exact>
						<AddDish />
					</Route>
					<Route path='/menu/vege/add-dish' exact>
						<AddDish />
					</Route>
					<Route path='/menu/fast-food/:dishId'>
						<DishDetail />
					</Route>
					<Route path='/menu/protein/:dishId'>
						<DishDetail />
					</Route>
					<Route path='/menu/vege/:dishId'>
						<DishDetail />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
