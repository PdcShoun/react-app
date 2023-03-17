import { useState } from 'react'
import './App.css'
import Paper from './components/Paper'
import Header from './components/Header'
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" Component={Paper} />
          <Route path="/home" element={<Paper/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
