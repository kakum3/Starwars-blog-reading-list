import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
	return (
<nav className="navbar bg-light">
  <div className="container-fluid">
    <Link to={"/"}>
    <img src="https://pipedream.com/s.v0/app_mE7hlb/logo/orig" alt="" width="150" height="100" className="d-inline-block align-text-top"/>
    </Link>
     
    <div className="dropdown">
  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favourites<span className="badge">{store.Favoritos.length}</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  {store.Favoritos.map((value, key) => (
								<li><a key={key} className="dropdown-item" href="#/action-4">{value}{" "}
								<i onClick={() => actions.deleteFavoritos(key)} className="fas fa-trash-alt" /></a></li>
							))}

  </ul>
</div>
      
    
  </div>
</nav>
	);
};