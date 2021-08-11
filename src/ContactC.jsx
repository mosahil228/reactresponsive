import React from "react";
const ContactC = (props) => {
  return (
    <>
      
        <div className="input-data ">
          <input type="text " required />
          <div className="underline "></div>
          <label for=" ">{props.name}</label>
        </div>
       
     
     
    </>
  );
};

export default ContactC;
