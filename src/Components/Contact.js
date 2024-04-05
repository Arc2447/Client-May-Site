
import { CiGlobe,CiMail  } from "react-icons/ci";
import { FaFacebook,FaWhatsapp,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
//import contact from './Dash'
const Contact= () =>{
    return (
        <div /*ref={contact} */className="bg-textcolor h-fit">
            <div className="text-white p-2">
                <h3 className="text-3xl font-bold pl-5">Contact US</h3>
            </div>
    
            <div className="text-white p-4 space-y-3 font-semibold">
                <p>
                    <FaWhatsapp className="icon whatsapp inline"/> 
                    <span className=""> 0897273823</span>
                </p>
                <p>
                    <CiMail className="inline"/> 
                    <span>
                        postulator@reinoldamay.org.za
                        <br />
                        fundraising@reinoldamay.org.za
                    </span>
                </p>
                <p>
                    <FaLocationDot className="inline"/> Diocese of Eshowe KwaZulu Natal RSA
                </p>
                <p>
                    <CiGlobe className="inline"/> 
                    <span>www.reinoldamay.org.za</span>  
                    <div className="flex justify-end space-x-2">
                        <span><FaFacebook/></span>
                        <span><FaSquareXTwitter/></span>
                        <span><FaInstagramSquare/></span>
                    </div>
                </p>
            </div>
        </div>
    );
    


}



export default Contact;