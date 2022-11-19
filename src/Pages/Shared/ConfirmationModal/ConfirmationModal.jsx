import React from "react";

const ConfirmationModal = ({ title, message, confirmDelete, deleteData }) => {
   return (
      <div>
         {/* Put this part before </body> tag */}
         <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg text-center">{title}</h3>
               <div className="divider"></div>
               <p className=" text-md text-center">{message}</p>
               <div className="modal-action flex justify-center">
                  <label
                     onClick={() => confirmDelete(deleteData)}
                     htmlFor="confirmation-modal"
                     className="btn btn-error"
                  >
                     Delete
                  </label>
                  <label htmlFor="confirmation-modal" className="btn btn-primary">
                     Cancel
                  </label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConfirmationModal;
