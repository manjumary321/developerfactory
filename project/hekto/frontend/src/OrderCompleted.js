import './OrderCompleted.css';
import OrderCompleted_clock1 from './Images/OrderCompleted_clock1.png';
import OrderCompleted_checklist1 from './Images/OrderCompleted_checklist1.png';
import OrderCompleted_Vector17 from './Images/OrderCompleted_Vector17.png'
// import OrderCompleted_Vector16 from './Images/OrderCompleted_Vector16.png';
// import OrderCompleted_Vector15 from './Images/OrderCompleted_Vector15.png';

function OrderCompleted() {
    return (

        <div className="OrderCompleted_outer">

            <div className="OrderCompleted_outer_container_row">
                {/* <div className="OrderCompleted_topnull_row1">

                </div> */}
                <div className="OrderCompleted_col1">
                    <div className="OrderCompleted_col1_row1">
                        <img src={OrderCompleted_clock1}></img>
                    </div>
                    <div className="OrderCompleted_col1_row2">
                        <div className="OrderCompleted_col1_row2_bordercol1"> 12</div>
                        <div className="OrderCompleted_col1_row2_bordercol2">
                            {/* 44hdjfdkffsdf */}
                        </div>
                    </div>
                </div>
                <div className="OrderCompleted_col2">
                    <div className="OrderCompleted_container_col2_row">
                        <div className="OrderCompleted_innercont_col2_row">

                            <div className="OrderCompleted_cont_col2_row1">
                                     <img src={OrderCompleted_Vector17}></img>
                                
                                {/* <div className="OrderCompleted_cont_col2_row1_img1">
                                    <img src={OrderCompleted_Vector16}></img>
                                </div>
                                <div className="OrderCompleted_cont_col2_row1_img2">
                                   <img src={OrderCompleted_Vector15}></img>
                                </div>     */}
                            </div>
                            <div className="OrderCompleted_cont_col2_row2">
                                <label>Your Order Is Completed! </label>
                            </div>
                            <div className="OrderCompleted_cont_col2_row3">
                                <label>Thank you for your order! Your order is being processed and will be completed within 3-6
                                    hours. You will receive an email confirmation when your order is completed.
                                </label>

                            </div>
                            <div className="OrderCompleted_cont_col2_row4">
                                <button>Continue Shopping</button>
                            </div>
                           
                        </div>
                        <div className="OrderCompleted_container_col2_row2">
                                {/* nn */}
                            </div>

                    </div>
                </div>
                <div className="OrderCompleted_col3">
                    <div className="OrderCompleted_col3_row1">
                          {/* jjj */}
                    </div>
                    <div className="OrderCompleted_col3_row2">
                            <img src={OrderCompleted_checklist1}></img>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default OrderCompleted;
