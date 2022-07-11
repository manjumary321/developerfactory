import "./style.css";
import logo from "./image/logo.jpg";

function Homepage() {
  return (
    <div class="backgroundimage">
      <div class="homebanner">
        <div class="homebannerrow1">
          <div>
            <img src={logo}></img>
          </div>
          <div class="homelabrow2">
            <label class="homelab1">ChristianMatrimony.com</label>
            <label class="homelab2">From Matrimony.com Group</label>
          </div>
        </div>
        <div class="homebannerrow3">
          <label>Already a member?</label>
          <button>Login</button>
        </div>
        {/* <div class="homebannerrow1">  
                        <img src={logo} ></img>
                </div >  
                <div class="homebannerrow2">   
                        <label class="homelab1">ChristianMatrimony.com</label>
                        <label class="homelab2">From Matrimony.com Group</label>
                </div>    
                <div class="homebannerrow3">
                        <label>Already a member?</label>
                        <button>Login</button>
                    
                </div> */}
      </div>

      <div class="homecontainer">
        <div class="homeinnercontainer">
          <div class="homeinnercontainerrow1">
            <h1>
              No. 1 and official matrimony service exclusively for Christians
            </h1>
            <h2>Meet your Christian soulmate here!</h2>
          </div>
          <div class="homeinnercontainerrow2">
            <div class="matri">
              <label>Matrimony Profile For</label>
              <select>
                <option>Select</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Friend</option>
              </select>
            </div>
            <div class="name">
              <label>Name</label>
              <input type="text" placeholder="Name"></input>
            </div>
            <div class="mobile">
              <label>Mobile Number</label>
              <input type="number" placeholder="Mobile Number"></input>
            </div>
            <div class="register">
              <button>Register Free</button>
            </div>
          </div>
          <div class="homeinnercontainerrow3">
            <label>By clicking on Register Free, you agree to</label>
            <label class="bluetext">Terms & Conditions </label>
            <label> and</label>
            <label class="bluetext"> Privacy Policy</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
