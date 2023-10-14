
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import UseReducerQuestionTwo from './components/UseReducerQuestionTwo';
import Todo from './components/Todo';
import RegisterPage from './components/RegisterPage';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/UseReducer' element={<UseReducerQuestionTwo/>}/>
      <Route path='/Todo' element= {<Todo/>}/>
      <Route path='/RegisterPage' element= {<RegisterPage/>}/>
      <Route path='/products' element = {<Products/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
