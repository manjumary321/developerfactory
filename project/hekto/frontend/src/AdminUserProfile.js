import './AdminUserProfile.css'
import AdminUserProfile_Women1 from './Images/AdminUserProfile_Women1.png';


function AdminUserProfile(){
    return(
        <>
        <div className="AdminUserProfile_outer">
            <div className="AdminUserProfile_container">
                <div className="AdminUserProfile_inner_container">
                    <div className="AdminUserProfile_inn_cont_row1">
                            <img src={AdminUserProfile_Women1}></img>
                    </div>
                    <div className="AdminUserProfile_inn_cont_row2">
                            <label>Nancy Powell</label>
                    </div>
                    <div className="AdminUserProfile_inn_cont_row3">
                            <label>c10001</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AdminUserProfile;