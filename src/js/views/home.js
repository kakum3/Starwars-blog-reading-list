import React from "react";

import { Personajes } from "../component/Personajes";
import { Planetas } from "../component/Planetas";

export const Home = () => {
	return (
	  <>
		<div className="container ">
		  <div className="div_text_home w-100 mt-5">
			<h1 className="text_home text-dark">Personajes</h1>
		  </div>
		  <div className="row scrollpersonaje">
			<Personajes className="mt-5" />
		  </div>
		  
		  
		</div>
		<div className="container ">
		  <div className="div_text_home w-100 mt-5">
			<h1 className="text_home text-dark">Planetas</h1>
		  </div>
		  <div className="row scrollpersonaje">
			<Planetas className="mt-5" />
		  </div>
		  
		  
		</div>
	  </>
	);
  };