import React, { useState } from "react";

function Heading(){


  const [agree, setAgree] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);
  const [tips, setTips] = useState(false);
  const [tailor, setTailor] = useState(false);
  const [enrich, setEnrich] = useState(false);



  // useState(()=>{
  //   setCheckAgree(true);
  // },[])

  const handleAgreeChange = () => {
    if (!checkAgree) {
      
      setTips(true);
      setTailor(true);
      setAgree(true)
      setEnrich(true);
      


      
      
      // setTips("Yes");
      // setTailor("Yes");
      // setAgree("Yes")
      // setEnrich("Yes");
      setCheckAgree(true);
    }else{
      console.log("wapas")
      setAgree(!agree);
      

    }
  };

  const handleOptionChange = (option) => {
    if (!agree) return; // If not agreed, do nothing

    switch (option) {
      case 'tips':
        setTips(!tips);
        break;
      case 'tailor':
        setTailor(!tailor);
        break;
      case 'enrich':
        setEnrich(!enrich);
        break;
      default:
        break;
    }
  };

  return (
    <div className="headings">
      <h1>
        <b>Coming Soon...</b>
      </h1>
      <h2>Website under Maintence</h2>
      <h3>It will be live by 18 April.</h3>
      {/* <div className="contactus">
        <h5>Contact Us:</h5>
         <a href="mailto:bikanercentralacademy@gmail.com" target="_blank" style={{ cursor: "pointer" }}>bikanercentralacademy@gmail.com</a>
        <h6 style={{ cursor: "pointer" }}>📞 0151-252252737  , 0151-2252737</h6>
        <div> */}
      {/* <label>
        <input type="checkbox" checked={agree} onChange={handleAgreeChange} />
        I agree to Typeform’s Terms of Service, Privacy Policy and Data Processing Agreement.
      </label>
      <br />
      <br />
      <label>
        <input type="checkbox" checked={tips} onChange={() => handleOptionChange('tips')} disabled={!agree} />
        Get useful tips, inspiration, and offers via e-communication.
      </label>
      <br />
      <label>
        <input type="checkbox" checked={tailor} onChange={() => handleOptionChange('tailor')} disabled={!agree} />
        Tailor Typeform to my needs based on my activity.
      </label>
      <br />
      <label>
        <input type="checkbox" checked={enrich} onChange={() => handleOptionChange('enrich')} disabled={!agree} />
        Enrich my data with select third parties for more relevant content.
      </label>
      <br />
      <br />
      <p>You can update your preferences in your Profile at any time.</p> */}
    </div>
    
  );
}

export default Heading;
