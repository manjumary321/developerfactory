import './style.css';

export default function Test() {

    return (
        <div>
            <Modal/>
            <div className='test_outer'>
                <p className='test_outer_1'>Thus absjbkSDJBflsjdbfkjabsdjfbSJDBF</p>
                <p className='test_outer_1'>jsbdfbsbjdbjbkjdhbgkljdfgjdgiadg</p>
                <p className="test_outer_2">shdbfjsdjhfjshdfkhjasdfjhkasdvfjhasdvfhj</p>

            </div>
        </div>)
        function Modal() {
            return <div >
              <div className="modalinner">
              <div class="logincontainter">
                      <div class="loginheader">
                          <label>Login</label>
                          <button >X</button>
                      </div>
                      <div class="loginbody">
                          <div class="logininnerbody">
                              <label class ="loginlabel">Matrimony Id/Mobile No./E-mail</label>
                              <input class="logininput"    type="text"  placeholder='MatrimonyID'></input>
                              <label class ="loginlabel">Password</label>
                              <input class="logininput"   type="text"  placeholder='Password'></input>
                          </div>
                          <div class="logincheck">
                              <input   type="checkbox" placeholder=''></input> 
                              <label>Keep me logged in</label>
                          </div>
                          <div class="loginbutton">
                              <button >LOGIN</button>
                          </div>
                          <div class="loginforget">
                              <label>Forgot Password? </label>
                              <label > | </label>
                              <label> Login Via OTP</label>
                          </div>
          
                      </div>
                      <div class="loginfooter">
          
                      </div>
                  </div>
              </div>
            </div>

}}