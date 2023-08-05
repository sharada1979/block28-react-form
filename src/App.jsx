import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Navbar from './components/Navbar'
import Home from './components/Home'
function App(){
    const [count, setCount] = useState(0)
    return (
<div id="container">
<Navbar />
<div id="navbar">{/* navigation here */}</div>
<div id="main-section">
    <Routes>
    <Route path='/' element={<Home />} /> 
        <Route path='/blue' element={<Blue />} />
        <Route path='/red' element={ <Red />} />
    </Routes>
</div>
</div>
    )
}
export default App
