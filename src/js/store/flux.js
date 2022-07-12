import { getPersonaje, getDetallesPersonajes, getPlaneta, getDetallesPlanetas } from "../component/apiFetch.js";

const getState = ({ getStore, setStore, getActions }) => {
	return {
			store:{
				Personaje:[],
				DetallesPersonaje:undefined,
				Planeta:[],
				DetallesPlanetas:undefined,
				Favoritos:[]
			},

			actions:{
				getPersonajes: () => {
					getPersonaje()
					.then(value =>{
						setStore({ Personaje:value});
					})
					.catch(error =>{
						setStore({Personaje:undefined});
					});
				},
				getDetallesPersonaje: id =>{
					getDetallesPersonajes(id)
					.then(value => {
						setStore({DetallesPersonaje:value});
					})
					.catch(error => {
						setStore({DetallesPersonaje:{}});
					});
				},
				getPlanetas:()=>{
					getPlaneta()
					.then(value =>{
						setStore({ Planeta:value});
					})
					.catch(error =>{
						setStore({Planeta:undefined});
					});
				},
				getDetallesPlaneta:id =>{
					getDetallesPlanetas(id)
					.then(value => {
						setStore({DetallesPlanetas:value});
					})
					.catch(error => {
						setStore({DetallesPlanetas:{}});
					});
				},
				addFavoritos: dato => {
					const store =getStore();
					setStore({Favoritos:[...store.Favoritos, dato]});
					console.log(store.Favoritos);
				},
				deleteFavoritos: index => {
					const store = getStore();
					store.Favoritos.splice(index,1);
					setStore({Favoritos:[...store.Favoritos]});
				}

			}
	};
};

export default getState;