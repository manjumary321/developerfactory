import "./Profile.css";
import logo from "./images/logo.jpg";
import userpic from "./images/userpic.jpg";
import imageprofile from "./images/ezgif.com-gif-maker.jpg";
function Profile() {
  return (
    // <div>Profile</div>
    <div class="outer">
      <div class="row1">
        <div class="menu">
          <div class="pic">
            <img src={logo}></img>
          </div>
          <div class="menuul">
            <ul>
              <li>My Home</li>
              <li>Search</li>
              <li>Matches</li>
              <li>Mailbox</li>
              <li>Upgrade Now</li>
            </ul>
          </div>
          <div class="userpic">
            <img scr={userpic}></img>
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="profile">
          <div class="rowcolumn1">
            <img src={imageprofile}></img>
          </div>
          <div class="rowcolumn2">
            <div class="pro1">
              <h1>Aswathy AB</h1>
            </div>
            <div class="pro2">
              <label class="created">
                E5939741 | Profile created by Self | Active - 1 week ago
              </label>
            </div>
            <div class="pro3">
              <label class="Verified">Verified</label>
            </div>
            <div class="menuprofile">
                <div class="menuprofile1">
                    <ul>
                        <li>27 years and 9 months, 4'7"</li>
                        <li>Mother Tongue is Malayalam</li>
                     <li>24 Manai Telugu Chettiyar</li>
                    </ul>

                 </div>
                 <div class="menuprofile2">
                    <ul>
                        <li>Lives in Rangat</li>
                        <li>Studied in B.A. Degree</li>
                        <li>Not working</li>
                    </ul>

                 </div>
            </div>     
            {/* <div class="pro4">
              <div>
                <label class="lab">27 years and 9 months, 4'7"</label>
              </div>
              <div>
                <label class="lab2">Lives in Rangat</label>
              </div>
            </div>
            <div class="pro5">
              <div>
                <label class="lab">Mother Tongue is Malayalam</label>
              </div>
              <div>
                <label class="lab2">Studied in B.A. Degree</label>
              </div>
            </div>
            <div class="pro6">
              <div>
                <label class="lab">24 Manai Telugu Chettiyar</label>
              </div>
              <div>
                <label class="lab2">Not working</label>
              </div> 
            </div>*/}
          </div>
        </div>
        <div class="profile2">
          <div>
            <h1>About Her</h1>
          </div>
          <div>
            <label>
              I belong to a middle class family with moderate values
            </label>
          </div>
          <div>
            <label>27 years and 9 months, 4'7"</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
