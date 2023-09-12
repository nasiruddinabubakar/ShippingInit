// import AppNav from "../components/AppNav";
// import SelectRoutes from "./SelectRoutes";
import { useEffect, useState } from "react";
import Map from "../Map/Map";
import styles from "./RoutesLayout.module.css";
import { SelectRoutes } from "./SelectRoutes";
export default function RoutesLayout() {
  const apiKey = "d7ed84d83e949baab350dff74ab8e51d";
  const [fetchCoordinates, setFetchCoordinates] = useState(null);
  const [dropOff, setDropOff] = useState(null);
  const [pickUp, setPickUp] = useState(null);
  const [pickupOrDropOff, setPickupOrDropOff] = useState(false);
  function handlePickupOrDropOff() {
    setPickupOrDropOff(true);
  }
  //   const debounce = (func, delay) => {
  //     let timeoutId;
  //     return (...args) => {
  //       clearTimeout(timeoutId);
  //       timeoutId = setTimeout(() => func(...args), delay);
  //     };
  //   };

  // Handle coordinates input with debounce
  const handleCoordinates = (e) => {
    setTimeout(() => {
      setFetchCoordinates(e.target.value);
      console.log(fetchCoordinates);
    }, 2000);
  };

  useEffect(() => {
    async function get_lat_long() {
      try {
        if (!fetchCoordinates) return;
        const req = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${fetchCoordinates}&limit=5&appid=${apiKey}`
        );
        console.log(req);
        if (!req.ok) {
          throw new Error(`Failed to fetch data: ${req.statusText}`);
        }
  
        const [data] = await req.json();
        const Location = [data];
        
        if (Array.isArray(Location) && Location.length === 0) {
            console.log('Location is an empty array');
          }
        if (!pickupOrDropOff) {
          console.log(Location[0].lat);
          setDropOff(Location);
          return;
        }
        setPickUp(Location);
      } catch (error) {
        console.error("An error occurred:", error);
        // You can handle the error here, such as displaying an error message to the user
      }
    }
  
    get_lat_long();
  }, [fetchCoordinates]);
  
  return (
    <div className={styles.app}>
      <SelectRoutes
        dropOff={dropOff}
        handleCoordinates={handleCoordinates}
        pickUpOrDropOff={pickupOrDropOff}
        setPickupOrDropOff={setPickupOrDropOff}
      />
      {!pickupOrDropOff ? (
        dropOff ? (
          <Map lat={dropOff[0].lat} lon={dropOff[0].lon} />
        ) : (
          <Map />
        )
      ) : (
         pickUp?<Map lat={pickUp[0].lat} lon={pickUp[0].lon} />:<Map/>
      )}
      {/* {pickUp?
      <Map lat={pickUp[0].lat} lon={pickUp[0].lon}/>
      :<Map/>
} */}
    </div>
  );
}
