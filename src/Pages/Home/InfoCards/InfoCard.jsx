import React from "react";

const InfoCard = ({ card }) => {
   const { name, details, icon, background } = card;
   return (
      <div>
         <div className={`card card-side bg-base-100 shadow-xl ${background}`}>
            <figure>
               <img src={icon} alt="icon" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">New movie is released!</h2>
               <p>Click the button to watch on Jetflix app.</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InfoCard;
