import React, { Suspense, lazy, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Demo = lazy(() => import('../pages/Demo'))
const Test = lazy(() => import('../pages/Test'))

class routes extends React.Component{
	render() {	
		return (
			<Fragment>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path="/" component={Demo}></Route>
                            <Route exact path="/test" component={Test}></Route>
						</Switch>
					</Suspense>
				</Router>
			</Fragment>
		)
	}
}

export default routes;