
import './App.css';
import {Route,Link,Switch} from "react-router-dom"
import { Navbar } from './Components/Navbar';
import { MenProduct } from './Components/MenProduct';
import { MenProductDetaiils } from './Components/MenProductDetail';
import { WoMenProduct } from './Components/WomenProduct';
import { WoMenProductDetaiils } from './Components/WomenProductDetails';
import { Footers } from './Components/Footers';
import { Contact } from './Components/Contact';
import { Banner } from './Components/Banner';
import { FAQ } from './FAQ';
import { Home } from './Home';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <div>
     <Switch >
      <Route exact path="/">
        <Home />
        </Route>
      <Route exact path="/mens">
       <MenProduct />
      </Route>
      <Route  exact path="/women">
        <WoMenProduct />
      </Route>
     
      
      <Route   path="/mens/:id">
       <MenProductDetaiils />
      </Route>
      <Route path="/women/:id">
        <WoMenProductDetaiils />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/faq">
        <FAQ />
      </Route>
      <Route>
        <div><h1>Error Code 404!<br/>No Page Found</h1>
        </div></Route>
      </Switch>
     </div>
     <Footers />
    </div>
  );
}

export default App;
