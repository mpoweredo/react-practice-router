import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import FastFood from "./components/dishes/menu/FastFood";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import Menu from "./Pages/Menu";
import NotFound from "./Pages/NotFound";
import Producers from "./Pages/Producers";

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact>
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
					<Route path="/menu/fast-food">
						<FastFood />
					</Route>
					<Route path="/menu/protein">
						<FastFood />
					</Route>
					<Route path="/menu/vege">
						<FastFood />
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
