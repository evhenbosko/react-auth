
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Me from'./components/Me'
import { BrowserRouter ,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
<BrowserRouter>
  <NavBar/>
    <main className="form-signin">
      <Route path='/' exact component={Me}/>
      <Route path='/login'component={Login}/>
      <Route path='/SignUp'component={SignUp}/>
     
    </main>    
</BrowserRouter>





    </div>
  );
}

export default App;
