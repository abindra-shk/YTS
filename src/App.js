import logo from './logo.svg';
import './App.scss';
import { HomeLayout } from './layouts/HomeLayout';
import { Route, Routes} from 'react-router';
import { MovieDetails } from './pages/MovieDetails';

function App() {
  const routes = [
    {path:'', element: <HomeLayout/>},
    {path:'movie/:id',element:<MovieDetails/>},
    {path:'home', element: <HomeLayout/>},
  ]
  
  return (
    <div className="App">
      <Routes>
          {routes.map((v,key)=>(
              <Route  path={v.path} element={v.element} key={key}/>
          ))}
      </Routes>
    </div>
  );
}

export default App;
