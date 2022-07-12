import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const DetallesPersonajes = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"
    useEffect(() => {
   
      actions.getDetallesPersonaje(id);
    },[]);
    if (store.DetallesPersonaje) {
        return(
  <div className="container">
      <div className="w-100 mt-4">
          <h1 className="text-dark">{store.DetallesPersonaje.properties.name}</h1>
      </div>
    <div className="card m-2 text-center" style={{ width: "80rem" }}>
    <div className="row g-0">
          <div className="col-md-4">
            <img src={urlImage} className="img-fluid rounded-start" />
          </div>
      <div className="col-md-8">
        <div className="card-body mt-5">
          <h1 className="card-title text-dark fs-1">
            {store.DetallesPersonaje.properties.name}
          </h1>
            <p className="text-dark fs-2">
              <strong>Nacimiento:</strong>{" "}
              {store.DetallesPersonaje.properties.birth_year}
            </p>
            <p className="text-dark fs-2">
              <strong>Altura:</strong>{" "}
              {store.DetallesPersonaje.properties.height}
            </p>
            <p className="text-dark fs-2">
              <strong>Peso:</strong> {store.DetallesPersonaje.properties.mass}
            </p>
            <p className="text-dark fs-2">
              <strong>Color Pelo:</strong>{" "}
              {store.DetallesPersonaje.properties.hair_color}
            </p>
            <p className="text-dark fs-2">
              <strong>Color Piel:</strong>{" "}
              {store.DetallesPersonaje.properties.skin_color}
            </p>
            <p className="text-dark fs-2">
              <strong>Color Ojos:</strong>{" "}
              {store.DetallesPersonaje.properties.eye_color}
            </p>
            <p className="text-dark fs-2">
              <strong>Genero:</strong>{" "}
              {store.DetallesPersonaje.properties.gender}
            </p>
          </div>
      </div>
    </div>
    </div>
  </div>
        );
    }else{
return<div>Loading...
  
</div>
    }
};