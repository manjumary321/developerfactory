import "./ExmReapeatCom11.css";
import LatestProducts_chair1 from './Images/LatestProducts_chair1.png'
import LatestProducts_chair2 from './Images/LatestProducts_chair2.png'
import LatestProducts_chair3 from './Images/LatestProducts_chair3.png'
import LatestProducts_chair4 from './Images/LatestProducts_chair4.png'
import LatestProducts_chair5 from './Images/LatestProducts_chair5.png'
import LatestProducts_chair6 from './Images/LatestProducts_chair6.png'
import LatestProducts_icons1 from './Images/LatestProducts_icons1.png'
import LatestProducts_icons2 from './Images/LatestProducts_icons2.png';
import LatestProducts_icons3 from './Images/LatestProducts_icons3.png'
import LatestProducts_icons4 from './Images/LatestProducts_icons4.png'

function ReapeatComponent({ image }) {
    return <>
        <div className="LatestProducts_container">
        <div className="LatestProducts_inner_inner_imagefull">  

            <div className="LatestProducts_inner_top_image_row1">
                <div className="LatestProducts_icons_row1_col1">
                    <div className="LatestProducts_icon_imgsale_col1_row1">
                        <img src={LatestProducts_icons1}></img>

                    </div>
                    <div className="LatestProducts_icons_col1_row2">
                        <div className="LatestProducts_imageicons1"><img src={LatestProducts_icons2}></img></div>
                        <div className="LatestProducts_imageicons2"><img src={LatestProducts_icons3}></img></div>
                        <div className="LatestProducts_imageicons2"><img src={LatestProducts_icons4}></img></div>
                    </div>
                </div>
                <div className="LatestProducts_imgchair_col2" >
                    <img src={image}></img>
                </div>
            </div>
            <div className="LatestProducts_bottom_imgchair_text_row2">
                <div className="LatestProducts_bottom_imgchair_lefttext_row2">
                    <label>Comfort Handy Craft</label>
                </div>
                <div className="LatestProducts_bottom_imgchair_righttext_row2">
                    <label>$42.00</label>
                    <span>$65.00</span>
                </div>
            </div>
          </div>
        </div>

    </>

}

function ExmReapeatCom11() {
    return (
        <>
            <div className="LatestProducts_outer"> 
                <ReapeatComponent image={LatestProducts_chair1} />
                <ReapeatComponent image={LatestProducts_chair2} />
                <ReapeatComponent image={LatestProducts_chair3} />
                {/* <ReapeatComponent image={LatestProduct_chair1} />
                <ReapeatComponent image={LatestProducts_chair2} />
                <ReapeatComponent image={LatestProducts_chair3} /> */}
 
                <ReapeatComponent image={LatestProducts_chair4} />
                <ReapeatComponent image={LatestProducts_chair5} />
                <ReapeatComponent image={LatestProducts_chair6} />
            

            </div>
        </>
    )
}
export default ExmReapeatCom11;
