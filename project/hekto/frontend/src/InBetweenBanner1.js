import "./InBetweenBanner1.css";
import InBetweenBanner1_sofa from './Images/InBetweenBanner1_sofa.png'
// import Ellipse63 from './images/Ellipse63.png'
// import SofaArmchairwithGoldenLegs1 from './images/SofaArmchairwithGoldenLegs1.png'
 
function InBetweenBanner1() {
    return (
        <>
        <div className="InBetweenBanner1_outer">
            <div className="InBetweenBanner1_container">
                <div className="InBetweenBanner1_leftimg_col1">
                    <img src={InBetweenBanner1_sofa}></img>
                </div>
                <div className="InBetweenBanner1_righttext_col2">
                    <div className="InBetweenBanner1_righttext_col2_row1">
                        <label>Unique Features Of leatest & Trending Poducts</label>
                    </div>
                    <div className="InBetweenBanner1_righttext_col2_row2">
                        <div className="InBetweenBanner1_circle1_col2_row2"></div>
                          <label>All frames constructed with hardwood solids and laminates</label>
                    </div>    
                    <div className="InBetweenBanner1_righttext_col2_row2">
                        <div className="InBetweenBanner1_circle2_col2_row2"></div>
                             <label>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</label>
                        </div>
                    <div className="InBetweenBanner1_righttext_col2_row2">
                        <div className="InBetweenBanner1_circle3_col2_row2"></div>
                        <label>Arms, backs and seats are structurally reinforced</label>
                    </div>
                    <div className="InBetweenBanner1_right_button_col2_row3">
                        <div className="InBetweenBanner1_right_leftbutton_col2_row3">
                            <button>Add to Cart</button>
                        </div>
                        <div className="InBetweenBanner1_right_right_textbutton_col2_row3">
                            <label className="InBetweenBanner1_right_right_textbutton_col2_row3_label1">B&B Italian Sofa</label>
                            <label className="InBetweenBanner1_right_right_textbutton_col2_row3_label2">$32.00</label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
    )
}
export default InBetweenBanner1;