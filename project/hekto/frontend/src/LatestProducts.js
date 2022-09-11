import "./style.css";
import image1166 from './images/image1166.png'
function LatestProducts(){
    return(
        <div className="LatestProducts_outer">
            <div className="LatestProducts_header">
                <label>Leatest Products</label>
            </div>
            <div className="LatestProducts_secondmenu">
                <div className="LatestProducts_innersecondmenu">
                    <label className="LatestProducts_Arrival">New Arrival</label>
                    <label className="LatestProducts_Seller">Best Seller</label>
                    <label className="LatestProducts_Featured">Featured</label>
                    <label className="LatestProducts_Offer">Special Offer</label>
                </div>
            </div>
            <div className="LatestProducts_outerimage">
                <div className="LatestProducts_inneroutimage1">
                    <div className="LatestProducts_inninnerimage11">
                        <div className="LatestProducts_image1166" >
                            <img src={image1166}></img>
                        </div>  
                        <div className="LatestProducts_bottomimage1166">
                            <div className="LatestProducts_botlftimage1166">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimage1166">
                                <label>$42.00</label>
                                <label>$65.00</label>
                            </div>
                        </div>  
                    </div>
                    <div className="LatestProducts_inninnerimage12">

                    </div>
                    <div className="LatestProducts_inninnerimage13">

                    </div>
                </div>
                <div className="LatestProducts_inneroutimage2">
                    <div className="LatestProducts_inninnerimage21">

                    </div>
                    <div className="LatestProducts_inninnerimage22">

                    </div>
                    <div className="LatestProducts_inninnerimage23">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestProducts;
