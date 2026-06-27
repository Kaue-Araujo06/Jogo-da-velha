import { Link } from 'react-router-dom'

export default function NavBar({logoUrl, menuList}) {


    return (
        <nav className="navbar">
            <img src="logourl" alt="" /> {/*future icon template*/} 

            <ul className="list">
                
                {
                //render one li for each item in menuList
                menuList.map(option => (
                    <div key={option.name} className={"item-container "+option.name + "-container"}>
                    <li 
                     
                    className={"nav-item " + option.name}
                    > 
                        <p><Link to={option.link} className={'link link-'+option.name}>{option.name}</Link></p>
                    </li>
                    </div>
                ))}

            </ul>
        </nav>
    );
}