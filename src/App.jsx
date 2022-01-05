import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Mein from './components/Mein'
import MeinHeader from './components/MeinList/MeinHeader'
import CarsCard from './components/MeinList/CarsCard'
import AboutList from "./components/MeinList/AboutList"
import AreaInfarmationList from "./components/MeinList/AreaInfarmationList"
import SearchBoxItem from "./components/MeinList/SearchBoxItem"
import StoreList from "./components/MeinList/StoreList"
import informationList from "./components/Admin/informationList"
import AddPost from "./components/Admin/AddPost"
import Profile from "./components/MeinList/Profile"
import Dashbord from "./components/Admin/Dashbord"
import Products from "./components/Admin/Products"
import UserInfoCar from "./components/MeinList/UserInfoCar"
import "./App.css"
import ClientsInfo from "./components/Admin/ClientsInfo"
import Carouselinfo from "./components/Admin/Carouselinfo"
function App() {

  return (
     <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact  component={Mein}/>
        <Route path="/MeinHeader" component={MeinHeader}/>
        <Route path="/cars" component={CarsCard} />
        <Route path="/Area" component={AreaInfarmationList} />
        <Route path="/AboutList" component={AboutList} />
        <Route path="/StoreList" component={StoreList} />
        <Route path="/Saarch" component={SearchBoxItem} />
        <Route path="/info/:id" component={informationList} />
        <Route path='/userInfo/:id' component={ UserInfoCar} />
        <Route path='/clientsinfo/:id'  component={ClientsInfo} />
        <Route path='/carouselinfo/:id' component={Carouselinfo} />
        <Route path="/add"  ccomponent={AddPost} />
        <Route path="/profile" component={() => <Profile authorized={true} /> } />
        <Route path='/dashbort' component={Dashbord} />
        <Route path='/product' component={Products} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
