import { Logo } from "../common/Logo"
import { Link } from "react-router-dom"
import { useSelector} from "react-redux";

export const Nav = (props) => {
    const count = useSelector(state=>state.countReducer.count);
    return<>
        <nav>
            <div class="logo-area">
                <Logo/>
                HD movies at the smallest file size. {count}
            </div>
            <div className="nav-items">
                <div className="search">
                    <div>
                        <i class="material-icons">search</i>
                    </div>
                    <input type="text" placeholder={"Quick search"} onChange={props.changeKeyword}/>
                </div>
                <div className="nav-item"><Link to="/home">Home</Link></div>
                <div className="nav-item">4K</div>
                <div className="nav-item">Trending</div>
                <div className="nav-item">Browse Movies</div>
                <div className="nav-item-login">Login</div>
                <div className="nav-item-login">Register</div>
            </div>
            
        </nav>
        </>
}