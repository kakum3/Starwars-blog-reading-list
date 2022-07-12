import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Personajes = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getPersonajes();
    },[]);
    return(
      <div className="row d-flex flex-column" style={{height: "32rem", overflowX:"auto"}}>
        {store.Personaje.map((value, i) =>(
           <div 
           key={i}
           className="card" style={{width:"15rem"}}>
           <img src={"https://starwars-visualguide.com/assets/img/characters/"+value.uid+ ".jpg"} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{value.name}</h5>
             <div className="cardbuttons">
              <Link
                className="btn btn-primary ms-2"
                to={"detallesPersonajes/" + value.uid}
              >
                INF
              </Link>
              <button
                type="button"
                className="btn btn-outline-warning "
                onClick={() => actions.addFavoritos(value.name)}
              >
                <i className="far fa-heart"></i>
              </button>
            </div>
           </div>
         </div>
        )
        )
        
        }
        </div>
    );
};