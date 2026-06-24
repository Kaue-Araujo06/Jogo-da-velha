export default function NavBar({logoUrl, menuList}) {


    return (
        <nav className="navbar">
            <img src="logourl" alt="" /> {/*future icon template*/} 

            <ul className="list">
                
                {
                //render one li for each item in menuList
                menuList.map(option => (
                    <div className={"item-container "+option.name + "-container"}>
                    <li 
                    key={option.name} 
                    className={"nav-item " + option.name}
                    > 
                        <p>{option.name}</p>
                    </li>
                    </div>
                ))}

            </ul>
        </nav>
    );
}