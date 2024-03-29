import "./LatestProducts11.css";
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

function LatestProduct11_chair({images}){
return <>
    <div className="LatestProducts11_inner_outerimage1_container1_row1">
        <div className="LatestProducts11_inner_inner_imagefull">
            <div className="LatestProducts11_inner_top_image_row1">
                <div className="LatestProducts11_icons_row1_col1">
                    <div className="LatestProducts11_icon_imgsale_col1_row1">
                        <img src={LatestProducts_icons1}></img>

                    </div>
                    <div className="LatestProducts11_icons_col1_row2">
                        <div className="LatestProducts_imageicons1"><img src={LatestProducts_icons2}></img></div>
                        <div className="LatestProducts_imageicons2"><img src={LatestProducts_icons3}></img></div>
                        <div className="LatestProducts_imageicons2"><img src={LatestProducts_icons4}></img></div>
                    </div>
                </div>
                <div className="LatestProducts11_imgchair_col2" >
                    <img src={images}></img>
                </div>
            </div>
            <div className="LatestProducts11_bottom_imgchair_text_row2">
                <div className="LatestProducts11_bottom_imgchair_lefttext_row2">
                    <label>Comfort Handy Craft</label>
                </div>
                <div className="LatestProducts11_bottom_imgchair_righttext_row2">
                    <label>$42.00</label>
                    <span>$65.00</span>
                </div>
            </div>
        </div>

    </div>

</>
}



function LatestProducts11() {
    return (
        <>
            <div className="LatestProducts11_outer">
                <div className="LatestProducts11_header">
                    <label>Leatest Products</label>
                </div>
                <div className="LatestProducts11_menu">

                    <label className="LatestProducts11_menu_col">New Arrival</label>
                    <label className="LatestProducts11_menu_col">Best Seller</label>
                    <label className="LatestProducts11_menu_col">Featured</label>
                    <label className="LatestProducts11_menu_col">Special Offer</label>

                </div>
                {/* ----------------------------container--outer---------------------- */}
                <div className="LatestProducts11_outerimage_container">
                    <LatestProduct11_chair images={LatestProducts_chair1}/>
                    <LatestProduct11_chair images={LatestProducts_chair2}/>
                    <LatestProduct11_chair images={LatestProducts_chair3}/>
                    <LatestProduct11_chair images={LatestProducts_chair4}/>
                    <LatestProduct11_chair images={LatestProducts_chair5}/>
                    <LatestProduct11_chair images={LatestProducts_chair6}/>
                    
                   
                   
                </div>  
                {/* ------------end---------container--outer----------------------- */}
            </div>
        </>
    )
}
export default LatestProducts11;
