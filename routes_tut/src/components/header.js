import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link> 
            <Link to={"/contact"}>Contact</Link> 
        </div>
    )
}   
export default Header;