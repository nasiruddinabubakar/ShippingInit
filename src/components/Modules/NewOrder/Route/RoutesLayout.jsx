// import AppNav from "../components/AppNav";
// import SelectRoutes from "./SelectRoutes";
import { useEffect, useState } from 'react';
import Map from '../Map/Map';
import styles from './RoutesLayout.module.css';
import { SelectRoutes } from './SelectRoutes';
import { useDispatch } from 'react-redux';
import { addDropoff, addPickup } from '../../../../features/orders/orderSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getAllCountries } from '../../../../libs/react-query/api';
import { useQuery } from '@tanstack/react-query';
import { useCountries } from '../../../../libs/react-query/queriesAndMutations';
export default function RoutesLayout() {
  const { data: Countries } = useCountries();
   console.log(Countries);

  const apiKey = 'd7ed84d83e949baab350dff74ab8e51d';
  const [fetchCoordinates, setFetchCoordinates] = useState(null);
  const [dropOff, setDropOff] = useState('Russia');
  const [pickUp, setPickUp] = useState('China');
  const [pickupOrDropOff, setPickupOrDropOff] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let routesArr = [];
  function handlePickupOrDropOff() {
    dispatch(addDropoff({ dropOff: fetchCoordinates }));
    setPickupOrDropOff(true);
  }

  const handleCoordinates = (e) => {
    setTimeout(() => {
      setFetchCoordinates(e.target.value);
      console.log(fetchCoordinates);
    }, 50);
  };

  useEffect(() => {
    async function get_lat_long() {
      try {
        if (!fetchCoordinates) return;
        const req = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${fetchCoordinates}&limit=5&appid=d7ed84d83e949baab350dff74ab8e51d`
        );
        if (!req.ok) {
          throw new Error(`HTTPS Error: ${req.status} - ${req.statusText}`);
        }

        const [data] = await req.json();
        const Location = data;

        if (typeof Location === 'undefined') {
          return;
        }
        if (!pickupOrDropOff) {
          routesArr.push(fetchCoordinates);
          console.log('dropOFF', fetchCoordinates);
          setDropOff(Location);

          return;
        } else {
          setPickUp(Location);

          dispatch(addPickup({ pickUp: fetchCoordinates }));
          console.log(routesArr);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    get_lat_long();
  }, [fetchCoordinates]);

  const dispatchPickUp = () => {
    navigate('/neworder/routes/ships');
  };

  return (
    <div className={styles.app}>
      <ToastContainer />
      <SelectRoutes
        dropOff={dropOff}
        handleCoordinates={handleCoordinates}
        pickUpOrDropOff={pickupOrDropOff}
        handlePickupOrDropOff={handlePickupOrDropOff}
        dispatchPickUp={dispatchPickUp}
        Countries={Countries?.countries}
      />
      {!pickupOrDropOff ? (
        dropOff ? (
          <Map lat={dropOff.lat} lon={dropOff.lon} />
        ) : (
          <Map />
        )
      ) : pickUp ? (
        <Map lat={pickUp.lat} lon={pickUp.lon} />
      ) : (
        <Map />
      )}
      {/* {pickUp?
      <Map lat={pickUp[0].lat} lon={pickUp[0].lon}/>
      :<Map/>
} */}
    </div>
  );
}
