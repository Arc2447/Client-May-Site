/*import { useState } from "react";
import donations from './Dash';*/

const Fundraiser_form= ()=>{
/*const initialvalues= {firstname:"",lastname:"",ContactNo:"",email:"",Address:""}
const [formValues, setFormvalues] = useState(initialvalues);
*/

/*const handleChange = (e) =>{
    
    const {name,value}= e.target;
    setFormvalues({...formValues,[name]:value});
}
*/
    return (
    <div /*ref={donations}*/ className=' h-landscape bg-black flex flex-col md:flex-row md:flex-wrap' >
    
        <div className="md:w-1/2 text-white ">
            <h1 className=" text-5xl  font-roxbo text-center" > Sr Reinolda Fundraising</h1>

            <p>Describe your project here. You may talk about the problem , the objective and your ideas.
                Expound a bit on how you solved the challenge and how your work helped your organization
            </p>
        </div>



<div className="md:w-1/2 bg-bgcolor2">
    <form className='px-4  max-w-3xl mx-auto space-y-6'>
   <div> <h1 className="text-3xl font-fira font-semibold ">Donation Form </h1>
    <p className=" text-textcolor"> Some text to motive or bidbdibbdskdnbsndsndosndosndo</p>
    </div>
    <div>
        <label for="firstname">First Name</label>
        <input 
            className="border border-gray-400 block py-2 px-4 w-full rounded" 
            type="text" 
            placeholder="First Name"
            name="txtfirstname" 
            id="firstname" 
           // value={formValues.firstname}
            //onChange={handleChange}
        ></input>
    </div>

    <div>
        <label for="lastname">Last Name</label>
        <input 
            className="border border-gray-400 block py-2 px-4 w-full rounded" 
            type="text" 
            placeholder="Last Name" 
            name="txtlastname" 
           // id="lastname" value={formValues.lastname}
           // onChange={handleChange}
        ></input>
    </div>

    <div>
        <label for="firstname">Contact Number</label>
        <input 
            className="border border-gray-400 block py-2 px-4 w-full rounded" 
            type="number"
            placeholder="1234567890" 
            name="txtnumber"
            id="number" 
           // value={formValues.ContactNo}
           // onChange={handleChange}
        ></input>
    </div>
    <div>
        <label for="email">Email</label>
        <input 
            className="border border-gray-400 block py-2 px-4 w-full rounded" 
            type="email"
            placeholder="Abc123@aaa.com" 
            name="txtemail" 
            id="email" 
           // value={formValues.email}
           // onChange={handleChange}
        ></input>
    </div>

    <div>
        <label for="address">Address</label>
        <input 
            className="border border-gray-400 block py-2 px-4 w-full rounded" 
            type="text" 
            name="txtaddress" placeh
            older="122 Abc Street, Sandton,9090" 
            id="address" 
           // value={formValues.Address}
           // onChange={handleChange}
        ></input>
    </div>
    <div>
        <input type="submit" className="rounded bg-textcolor hover:bg-primary w-20 text-white hover:cursor-pointer" ></input>
    </div>

    </form>
</div>

    </div>
)

}
export default Fundraiser_form;