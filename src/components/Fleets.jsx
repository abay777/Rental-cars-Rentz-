import { useState } from "react";
import FleetPic from "../assets/assets/land rover evoque.png";
import { fleet } from "../resources";


const Fleets = () => {
    const [car,setCar]=useState(fleet);
    const [loading ,setLoading] = useState(false)

   const  handleFilter = (name)=>{
   const  selectedCar =fleet.find(car=> car.name === name)
    setCar(selectedCar);
    setLoading(true)
   }
 
   const handleLoading = ()=>{
    setLoading(false);
   }

   const handleErrorLoading = ()=>{
    setLoading()
   }

   




  return (
    <div>
      <h3 className="fleetHead">Our Available fleets</h3>
      <p className="fleetSubHead">Choose from a variety of our amazing vehicles
        to rent for your next adventure or business trip.</p>
      <section className="carFleets" id="fleet">
        <div className="carModels">
          <span onClick={()=>handleFilter('7 Series m760')}>Bmw</span>
          <span onClick={()=>handleFilter('Thar')}>Thar</span>
          <span onClick={()=>handleFilter('Evoque')}>Land Rover</span>
          <span onClick={()=>handleFilter('Swift')}>Swift</span>
          <span onClick={()=>handleFilter('Polo GT')}>Polo GT</span>
        </div>
        <div className="fleetPicture">
          {loading? 
            (<div className="loader"></div>)
          : null}
          <img src={car.pic||FleetPic} alt="" loading="lazy" onLoad={handleLoading} onError={handleErrorLoading} />
          
          
        </div>

        <div className="fleetDetails">
          <div className="top">
            <span>price</span>
            <span>&#8377;{car.price||2000} / Day</span>
          </div>
          <div className="detail">
            <span>Brand</span>
            <span>{car.company||'Mahindhra'}</span>
          </div>
          <div className="detail">
            <span>name</span>
            <span>{car.name||'Thar2020'}</span>
          </div>
          <div className="detail">
            <span>mileage</span>
            <span>{car.mileage +'/L'||12-14/L}</span>
          </div>
          <div className="detail">
            <span>Type</span>
            <span>{car.type||'Suv'}</span>
          </div>
          <div className="detail">
            <span>model</span>
            <span>{car.model||2021}</span>
          </div>

          <div className="detail">
            <span>Transmission</span>
            <span style={{ marginLeft: '-40px' }}>{car.transmission||'manual'}</span>
          </div>

          <div className="detail">
            <span>Fuel</span>
            <span>{car.fuel||'diesel'}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fleets;
