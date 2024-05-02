import { NavLink } from "react-router-dom";

const Subheader = () => {
    return (
        <div className="subheader-container">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/mens">Men's</NavLink></li>
                <li><NavLink to="/womens">Womens</NavLink></li>
                <li><NavLink to="/kids">Kids</NavLink></li>
                <li><NavLink to="/accessories">Accessories</NavLink></li>
            </ul>
        </div>
    )
}


export default Subheader;