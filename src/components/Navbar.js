import { Link } from "react-router-dom"


const Navbar = () => {
    return ( 
        <div>

            <nav>
                <div className="logo">

                    <h2>BORING</h2>

                </div>

                <div className="links">

                    <Link to="/">Home</Link>
                    <Link to="/Like">Liked</Link>

                </div>

            </nav>
            
        </div>
     );
}
 
export default Navbar;