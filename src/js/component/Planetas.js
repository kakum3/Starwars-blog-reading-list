import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planetas = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getPlanetas();
    },[]);
    return(
      <div className="row d-flex flex-column" style={{height: "32rem", overflowX:"auto"}}>
        {store.Planeta.map((value, i) =>(
           <div 
           key={i}
           className="card" style={{width:"18rem",overflowX: "auto"}}>
           <img src={"https://starwars-visualguide.com/assets/img/planets/"+ value.uid + ".jpg"}className="card-img-top"style={{height: '14rem', width:"100%", objectFit:"cover"}} alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{value.name}</h5>
             <div className="cardbuttons">
              <Link
                className="btn btn-primary ms-2"
                to={"detallesPlanetas/" + value.uid}
              >
                +Info
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