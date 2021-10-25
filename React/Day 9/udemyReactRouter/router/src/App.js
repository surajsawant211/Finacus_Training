import { Route, Switch,Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome' component={Welcome}>
            {/* <Welcome /> */}
          </Route>
          <Route exact path='/products' component={Products}>
            {/* <Products /> */}
          </Route>
          <Route path='/products/:productId' component={ProductDetail}>
            {/* <ProductDetail /> */}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;