import styles from "./ShipInfo.module.css";
import { Header } from "../../../UI/Header";
import { easeIn, motion } from "framer-motion";
import Opacity from "../../../framer/Opacity";
import { Check } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addShip } from "../../../../features/orders/orderSlice";
import SpinnerFullPage from "../../../UI/SpinnerFullPage";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StepConnector } from '@mui/material';


export default () => {
  const [imageData, setImageData] = useState([]);
  const [shipDetails, setShipDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  console.log(id);
  useEffect(() => {
    async function getShips() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/api/ships/getships",
          {
            cache: "no-store", // Disable caching
            mode: "cors", // Enable cross-origin resource sharing
            headers:{
              shipID:id
            }
          }
        );
        const data = await response.json();
        console.log(data);
        const { image } = data;
        setShipDetails((state) => data);

        const uint8Array = new Uint8Array(image.data);

        const blob = new Blob([uint8Array], { type: "image/jpg" }); // or 'image/jpeg'

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setImageData(base64Data);
        };
        reader.readAsDataURL(blob);
        setIsLoading(false);
      } catch (Err) {
        console.error("error occured ",Err.message);
      }
    }

    getShips();
  }, []);
  const navigate = useNavigate();
  const dispacth = useDispatch();
 

  function onConfirmShip() {
    console.log(shipDetails);

    dispacth(addShip({ shipId: shipDetails.ship_id }));

    navigate("/neworder/checkout");
  }

  return (
    <>
      {isLoading ? (
        <SpinnerFullPage />
      ) : (
        <div className={styles.container}>
          <Header />
          <div className={styles.innercontainer}>
            <div className={styles.shipdetails}>
              <div className={styles.box}>
                <div className={styles.image}>
                  <Opacity time={1}>
                    <img src={imageData} alt="Uploaded" />
                  </Opacity>
                </div>
              </div>

              <div className={styles.box}>
                <Opacity time={2}>
                  <div style={{ borderRadius: "1.5rem" }}>
                    {" "}
                    <h2 className={styles.bar}>Voyage Information</h2>
                  </div>

                  <VoyageDetails />
                </Opacity>
              </div>
            </div>
            <div className={styles.shipdetails}>
              <div className={styles.box}>
                <Opacity time={2}>
                  <div>
                    {" "}
                    <h2 className={styles.bar}>Ship Information</h2>
                  </div>
                  <div class="flx flex2">
                    <table class="aparams">
                      <tbody>
                        <tr>
                          <td className="n3">IMO</td>
                          <td className="v3">9993433</td>
                        </tr>
                        <tr>
                          <td className="n3">Vessel Name</td>
                          <td className="v3">EVERACNE</td>
                        </tr>
                        <tr>
                          <td className="n3">Ship Type</td>
                          <td className="v3" id="spv0">
                            Container Ship
                          </td>
                        </tr>
                        <tr>
                          <td className="n3">Flag</td>
                          <td className="v3">Singapore</td>
                        </tr>
                        <tr>
                          <td className="n3">Home Port</td>
                          <td className="v3">
                            <span className="ttt0" data-title="At anchor">
                              India
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td class="n3">Gross Tonnage </td>
                          <td class="v3 v3np">236000</td>
                        </tr>
                        <tr>
                          <td class="n3">Length Overall</td>
                          <td class="v3">400m</td>
                        </tr>
                        <tr>
                          <td class="n3">Year of Build</td>
                          <td class="v3">2022</td>
                        </tr>
                        <tr>
                          <td class="n3">Company Name</td>
                          <td class="v3">Forex Shippers</td>
                        </tr>
                        <tr>
                          <td class="n3">Manager mail</td>
                          <td class="v3">alinaqi@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Opacity>
              </div>
              <div className={styles.box}>
                <Opacity time={2}>
                  <div>
                    {" "}
                    <h2 className={styles.bar}>Route Information</h2>
                  </div>
                 < VerticalLinearStepper/>
                </Opacity>
              </div>
            </div>

            <button className={styles.butt} onClick={onConfirmShip}>
              Confirm Ship <Check size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const VoyageDetails = () => {
  return (
    <div className="flx flex2">
      <table className="aparams">
        <tbody>
          <tr>
            <td className="n3">Predicted ETA</td>
            <td className="v3">-</td>
          </tr>
          <tr>
            <td className="n3">Distance / Time</td>
            <td className="v3">-</td>
          </tr>
          <tr>
            <td className="n3">Course / Speed</td>
            <td className="v3" id="spv0">
              76.5° / 0.0 kn
            </td>
          </tr>
          <tr>
            <td className="n3">Current draught</td>
            <td className="v3">13.6 m</td>
          </tr>
          <tr>
            <td className="n3">Navigation Status</td>
            <td className="v3">
              <span className="ttt0" data-title="At anchor">
                At anchor
              </span>
            </td>
          </tr>

          <tr>
            <td className="n3">IMO / MMSI</td>
            <td className="v3 v3np">9943267 / 563176600</td>
          </tr>
          <tr>
            <td className="n3">Callsign</td>
            <td className="v3">9V7305</td>
          </tr>
          <tr>
            <td className="n3">Flag</td>
            <td className="v3">Singapore</td>
          </tr>
          <tr>
            <td className="n3">Length / Beam</td>
            <td className="v3">400 / 62 m</td>
          </tr>
          <tr>
            <td className="n3">Current Port</td>
            <td className="v3">India</td>
          </tr>
          <tr>
            <td className="n3">Next Port</td>
            <td className="v3">Iran</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
  function VerticalLinearStepper() {
  
  const steps = [
    {
      label: 'Pakistan',
    
    },
    {
      label: 'China',
      
    },
    {
      label: 'Russia',
     
    },
    {
      label: 'Ukraine',
     
    },
  ];
    const [activeStep, setActiveStep] = useState(0);
  
    return (
      <Box sx={{ maxWidth: 400,fontSize:'28px' }}>
    <Stepper activeStep={activeStep} orientation="vertical"
    connector={<StepConnector style={{ height: '20px' }} />}
    >
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel
            
            StepIconProps={{
              style: {
                color: "#00c46a",
                 // Set your desired icon color
              },
            }}
          >
            <Typography style={{ color: '#d6dee0' }}>{step.label}</Typography>
          </StepLabel>
          <StepContent>
            <Typography>{step.description}</Typography>
           
          </StepContent>
        </Step>
      ))}
    </Stepper>
    
  </Box>
  
    
    );
  }
  