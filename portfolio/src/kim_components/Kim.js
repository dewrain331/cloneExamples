import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Menu from './Menu'
import {Route, Routes} from 'react-router-dom'
import '../kim_styles/css/Kim.css'

const Kim = () => {
    return (
            <div className='contents'>
                <Menu />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </div>
    )
}

export default Kim