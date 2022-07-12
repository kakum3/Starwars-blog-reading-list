export const getPersonaje =() =>{
    try{
        return fetch("https://www.swapi.tech/api/people", {
            method: "GET",
            
        })
        .then(response => response.json())
        .then(respuesta=> respuesta.results);
    }catch (error){
        console.error(err);
        return[];
    }
};

export const getDetallesPersonajes =  id => {
    try{
        return fetch(`https://www.swapi.tech/api/people/${id}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(respuesta => respuesta.result);
    }catch(error){
        console.error(err);
        return {};
    }
};
export const getPlaneta =() =>{
    try{
        return fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
            redirect: "follow"
        })
        .then(response => response.json())
        .then(respuesta=> respuesta.results);
    }catch(error){
        console.error(err);
        return[];
    }
};

export const getDetallesPlanetas =  id => {
    try{
        return fetch(`https://www.swapi.tech/api/planets/${id}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(respuesta => respuesta.result);
    }catch(error){
        console.error(err);
        return {};
    }
};