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
      key:0,
      servicedataimg : "./img/serone.svg",
      servicedatatext : "Vending Machine",
    },
    {
      key:1,
      servicedataimg : "./img/sertwo.svg",
      servicedatatext : "Take A Way",
    },
  ]
  const servicedatatwo = [
    {
      key:3,
      servicedataimgtwo : "./img/serthree.svg",
      servicedatatexttwo : "Type of Coffee",
    },
    {
      key:4,
      servicedataimgtwo : "./img/serfour.svg",
      servicedatatexttwo : "Beans Variant",
    },
    
  ]
  const servicedatathree = [
    {
      key:5,
      servicedataimgthree : "./img/serfive.svg",
      servicedatatextthree : "Pastry",
    },
  ]
  return (
    <>
      <div className="page4">
      
        <div className="partonedi">
          {servicedata.map((item,key)=>(
            // eslint-disable-next-line react/jsx-key
            <Services passservicedata={item} Key={key} />
          ))}
          
          
        </div>
        <div className="partonedii">
        {servicedatatwo.map((item,key)=>(
            // eslint-disable-next-line react/jsx-key
            <Servicesthree passservicedatatwo={item} Key={key} />
          ))}
        </div>
        <div className="partonediii">
        {servicedatathree.map((item,key)=>(
            // eslint-disable-next-line react/jsx-key
            <Servicesfive passservicedatathree={item} Key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page4;
