import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const DetallesPlanetas = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    const urlImage = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"
    useEffect(() => {
        console.log(id);
        actions.getDetallesPlaneta(id);
    },[]);
    if (store.DetallesPlanetas) 
  {
    return(
     <div className="container">

          <div className="w-100 mt-4">
            <h1 className="text-dark">{store.DetallesPlanetas.properties.name}</h1>
          </div>

        <div className="card mb-3 text-center" style={{ width: "65rem" }}>
          <div className="row g-0">
              <div className="col-md-4">
                  <img src= {urlImage}  className="img-fluid rounded-start" />
              </div>
            <div className="col-md-8">
               <div className="card-body mt-5">
                 <h1 className="card-title text-dark fs-1">
                   {store.DetallesPlanetas.properties.name}
                 </h1>
                  <p className="text-dark fs-2">
                   <strong>Diametro:</strong>{" "}
                   {store.DetallesPlanetas.properties.diameter}
                  </p>
                  <p className="text-dark fs-2">
                      <strong>Periodo Rotacional:</strong>{" "}
                      {store.DetallesPlanetas.properties.rotation_period}
                  </p>
                  <p className="text-dark fs-2">
                      <strong>Periodo Orbital:</strong> 
                      {store.DetallesPlanetas.properties.orbital_period}
                  </p>
                  <p className="text-dark fs-2">
                      <strong>Gravedad:</strong>{" "}
                      {store.DetallesPlanetas.properties.gravity}
                  </p>
                  <p className="text-dark fs-2">
                      <strong>Poblacion:</strong>{" "}
                      {store.DetallesPlanetas.properties.population}
                  </p>
                  <p className="text-dark fs-2">
                      <strong>Clima:</strong>{" "}
                      {store.DetallesPlanetas.properties.climate}
                  </p>
                  <p className="text-dark fs-2">
                      <strong>Terreno:</strong>{" "}
                      {store.DetallesPlanetas.properties.terrain}
                  </p>
               </div>
            </div>
          </div>
        </div>
    </div>
    );
  }else{
return<div>Loading...</div>
    }
};