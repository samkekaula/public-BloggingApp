import {Link} from "react-router-dom"
import Logo from "../imgs/logo.png"

const NavBar = () =>{
    return(
        <nav className="navbar">
            <Link to="/" className=" flex-none w-20">
                <img src={Logo} className="w-full" />
            </Link>

            <div className=" absolute bg-white w-full left-0 top-full mt-0.5
             border-b border-grey">
                <input 
                type="text"
                placeholder="Search..."
                 className=" w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full" 
                />
             </div>

            
        </nav>

        )
}
export default NavBar;