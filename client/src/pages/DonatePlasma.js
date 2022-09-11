import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/DonatePlasma.css";
import { BsPersonSquare,BsTelephoneFill,BsGlobe,BsBuilding,BsFillHouseFill,BsDropletHalf, BsCalendarDate } from 'react-icons/bs';
import {MdOutlinePersonPinCircle} from 'react-icons/md'

function DonatePlasma() {

	@@ -15,7 +16,8 @@ function DonatePlasma() {
    const [city, setCity] = useState();
    const [pincode, setPincode] = useState();

    function handleSubmit(e){
        e.preventDefault();
        const request = {
            method:'POST',
            mode:'cors',
	@@ -35,6 +37,15 @@ function DonatePlasma() {
        }).catch(function (e) {
            console.log(e);
        });

        // Condition for appropriate mobile number
        let NumberValidation = document.getElementById("numberInput").value;
        if (NumberValidation.length < 10 || NumberValidation < 1){
            alert("Not a Valid Number");
        }
        else{
            alert("Correct Number");
        }
    };

    useEffect(()=>{
	@@ -50,49 +61,56 @@ function DonatePlasma() {
    },[name,phone,bloodGroup,cDate,address,city,pincode]);

    return (
        <>
        <Navbar/>
        <div className='donate-plasma'>
            <h2 className='heading'>Add Yourself as Plasma Donor</h2>
            <form onSubmit={handleSubmit} className='donate-plasma-form'>
                <div className="input-field">
                    <div className="input-image">
                    <BsPersonSquare size={40} color="#0603E6"/>
                    </div>
                    <input value={name} type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Name' required/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsTelephoneFill size={40} color="#0603E6"/>
                    </div>
                    <input value={phone} type="number" onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone' id="numberInput" required/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsBuilding size={40} color="#0603E6"/>
                    </div>
                    <input value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder='City' required/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsFillHouseFill size={40} color="#0603E6"/>

                    </div>
                    <input value={address} type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address' required/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsDropletHalf size={40} color="#0603E6"/>
                    </div>
                    <input value={bloodGroup} type="text" onChange={(e)=>{setBloodGroup(e.target.value)}} placeholder='Blood Group' required/>
                </div>
                <div className="input-field">
                <div className="input-image">
                    <BsCalendarDate size={40} color="#0603E6"/>
                    </div>
                    <input value={cDate} type="text" onChange={(e)=>{setCDate(e.target.value)}}  placeholder='Date' required/>
                </div>
                <div className="input-field">
                <div className="input-image">
                    <MdOutlinePersonPinCircle size={40} color="#0603E6"/>
                    </div>
                    <input value={pincode} type="text" onChange={(e)=>{setPincode(e.target.value)}}  placeholder='Pincode' required/>
                </div>
                <div className="btn-field">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
        <Footer/>
    </>
)
};
export default DonatePlasma