import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
   const cardData = [
      {
         id: 1,
         name: "Opening Hours",
         details: "Open 9.00 AM to 6.00 PM Everyday",
         icon: clock,
         background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
      },
      {
         id: 2,
         name: "Visit Our Location",
         details: "Brooklyn, NY 10036, United States",
         icon: phone,
         background: "bg-primary",
      },
      {
         id: 3,
         name: "Contact us now",
         details: "+008012 35488",
         icon: marker,
         background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
      },
   ];

   return (
      <div>
         {cardData.map((card) => (
            <InfoCard key={card.id} card={card} />
         ))}
      </div>
   );
};

export default InfoCards;
