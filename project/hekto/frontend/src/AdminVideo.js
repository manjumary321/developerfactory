import './AdminVideo.css';
import AdminUserProfile_Women1 from './Images/AdminUserProfile_Women1.png';
import { BiDotsHorizontalRounded } from "react-icons/bi";
// import AdminVideo_1 from './Images/AdminVideo_1.mp4'


function AdminVideo() {
    return (
        <>
            <div className="AdminVideo_outer">
                <div className="AdminVideo_continer">
                    <div className="AdminVideo_inner_cont">
                        <div className="AdminVideo_inner_cont_row1">
                                <div className="AdminVideo_inner_cont_row1_col1">
                                    <label>Pro Display XDR Video Review</label>
                                </div>
                                <div className="AdminVideo_inner_cont_row1_col2">
                                    <BiDotsHorizontalRounded style={{ color: '#C3CAD9', fontsize: 50,width:20,height:20 }} />
                                </div>
                        </div>
                        <div className="AdminVideo_inner_cont_row2">
                            <img src={AdminUserProfile_Women1} className="photo"></img>
                            {/* <video src={AdminVideo_1}></video> */}
                            {/* <video autoplay="autoplay" loop="true" autoPlay muted>
                                        <source src={require("../src/Images/AdminVideo_1")} type="AdminVideo_1/mp4" />
                                            Your browser does not support HTML video.
                                </video> */}
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
} export default AdminVideo;
