import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Vehiculos from "../component/vehiculos";
import Planetas from "../component/planetas";
import Personas from "../component/personas";
import Peliculas from "../component/peliculas";
import Naves from "../component/naves";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
        actions.get_perfil()

    }, [])

	return(
		
		<div className="container">
			
			<Vehiculos/>
			<Planetas/>
			<Personas/>
			<Peliculas/>
			<Naves/>

		</div>
	)
}
