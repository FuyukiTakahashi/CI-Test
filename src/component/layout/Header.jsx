import {NavLink} from 'react-router-dom';

export default function Header(){
    const handleActive=(active)=>{
        return active.isActive ? "active" : "inactive"
    } 
    return(
        <div className='header'>
            <p>#todo</p>
            <ul className='navUl'>
                <li><NavLink to='' className={handleActive} >All</NavLink></li>
                <li><NavLink to='active'  className={handleActive} >Active</NavLink></li>
                <li><NavLink to='complete'  className={handleActive}>Complete</NavLink></li>
            </ul>
            <hr />
        </div>
    );
}