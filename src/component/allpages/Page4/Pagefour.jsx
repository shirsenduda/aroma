/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Pagefour.css";
import Services from "../../allServices/servi/Services";
import Servicestwo from "../../allServices/servitwo/Servicestwo";
import Servicesthree from "../../allServices/servithree/Servicesthree";
import Servicesfour from "../../allServices/servifour/Servicesfour";
import Servicesfive from "../../allServices/servifive/Servicesfive";

const Page4 = () => {
  const servicedata = [
    {
      idd:0,
      servicedataimg : "./img/serone.svg",
      servicedatatext : "Vending Machine",
    },
    {
      idd:0,
      servicedataimg : "./img/sertwo.svg",
      servicedatatext : "Take A Way",
    },
  ]
  const servicedatatwo = [
    {
      idd:3,
      servicedataimgtwo : "./img/serthree.svg",
      servicedatatexttwo : "Type of Coffee",
    },
    {
      idd:4,
      servicedataimgtwo : "./img/serfour.svg",
      servicedatatexttwo : "Beans Variant",
    },
    
  ]
  const servicedatathree = [
    {
      idd:5,
      servicedataimgthree : "./img/serfive.svg",
      servicedatatextthree : "Pastry",
    },
  ]
  return (
    <>
      <div className="page4">
      
        <div className="partonedi">
          {servicedata.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <Services passservicedata={item} />
          ))}
          
          
        </div>
        <div className="partonedii">
        {servicedatatwo.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <Servicesthree passservicedatatwo={item} />
          ))}
        </div>
        <div className="partonediii">
        {servicedatathree.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <Servicesfive passservicedatathree={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page4;
