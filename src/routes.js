import { BrowserRouter, Route } from 'react-router-dom'
import MapMarket from './pages/MapMarket'
import Landing from './pages/Landing/index'
import ViewMarket from './pages/ViewMarket'
import Createmarket from './pages/CreateMarket'


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/map" component={MapMarket} />
      <Route path="/view/:id" component={ViewMarket} />
      <Route path="/create" component={Createmarket} />
    </BrowserRouter>
  )
}

export default Routes