// import {Button} from 'react-bootstrap'
import Header from './Header'
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register';
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route path="/login" component={Login}/>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/update">
          <UpdateProduct />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
