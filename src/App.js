import { Routes, Route } from 'react-router-dom'
import {Home, Error, About, Project, Contact} from './pages'
function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/projects" element={<Project/>}/>
            <Route path="/about-me" element={<About/>}/>
            <Route path="/contact-me" element={<Contact/>}/>
        </Routes>
        </>
    )
}
export default App;
