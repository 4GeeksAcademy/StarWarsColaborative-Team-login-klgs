import React ,{useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext"; 


import { AiFillDingtalkSquare } from 'react-icons/ai';
import { SiStarship } from 'react-icons/si';
// CARD + MAP

const Vehiculos =()=> {
    const { store, actions } = useContext(Context);

    console.log("probando en Vehiculos: ", store)




    return(
        <div>
            <AiFillDingtalkSquare style={{color:"red", fontSize:"100px"}} />
            <SiStarship style={{color:"red", fontSize:"100px"}} />

            {/* 
            "name": "Sand Crawler"
            "model": "Digger Crawler"
            "vehicle_class": "wheeled"
            "manufacturer": "Corellia Mining Corporation"
            "crew": "46"
            "cargo_capacity": "50000" 
            */}

            <div className="row">
                <div className="col-12">
                    
                {store.vehicles.map((item, index) => (  
                    <div key={index} className="card mx-3" style={{ width: "400px", minWidth: "300px", display: "inline-block" }} >
                            <div className="bg-secondary d-flex flex-row justify-content-center align-items-center" style={{ width: "100%", height: "200px" }}>
                                <p style={{ fontWeight: "bold", fontSize: "25px" }} className="text-light">400x200</p>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text p-0 m-1 col-12">{item.model}</p>
                                <p className="card-text p-0 m-1 col-12">{item.vehicle_class}</p>
                                <p className="card-text p-0 m-1 col-12">{item.crew}</p>
                                <p className="card-text p-0 m-1 col-12">{item.cargo_capacity}</p>
                                <p className="card-text p-0 m-1 col-12">{item.manufacturer}</p>
                                <div className="d-flex flex-row justify-content-between">

                                <a href="#" className="btn btn-primary">
                                 Ir a Detalles
                                </a>
                                {/* <a onClick={ShowInfo} href="#" className="btn btn-outline-primary">Learn More</a>
                                <button onClick={()=>guardarFavoritos(info.name)} className="btn btn-outline-warning ml-auto">
                                    <AiOutlineHeart  />
                                </button> */}

                                </div>
                            </div>
                    </div>

                ))} 
                </div>
            </div>

            {/* {store.vehicles.map((item, index) => (
            <div key={index} className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.model}</p>
                <p className="card-text">{item.vehicle_class}</p>
                <p className="card-text">{item.crew}</p>
                <p className="card-text">{item.cargo_capacity}</p>
                <p className="card-text">{item.manufacturer}</p>

                <a href="#" className="btn btn-primary">
                    Ir a Detalles
                </a>
                </div>
            </div>

            ))} 
            */}

            {/* // EJEMPLO de CONCATS:
            // {store.contacts.map((item, index) => (
			// 				<ContactCard
			// 					key={index}
			// 					contactito={item}
			// 					onDelete={() => setState({ showModal: true, id: item.id })}
			// 					handleModify={() => setModifyState({ showModalModify: true, object: item })}
			// 				/>
            // ))} */}


        </div>
    )
}


export default Vehiculos