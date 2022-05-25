import '../kim_styles/css/Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div className='menuBody'>
                <div className='profiles'>
                    <h1>Kim KeeDong</h1>
                    Isacc / <a>A Newbie Developer</a>
                </div>

                <ul>
                    <li><Link to='/kim'>ABOUT</Link></li>
                    <li><Link to='/kim/skills'>SKILLS</Link></li>
                    <li><Link to='/kim/projects'>PROJECTS</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu