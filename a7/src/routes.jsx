import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import App from './App'
import Ex1 from './pages/Ex1'
import Ex2 from './pages/Ex2'

export default function routes() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/ex1' element={<Ex1 />}/>
        <Route path='/ex2' element={<Ex2 />}/>
      </Routes>
    </Router>
  )
}