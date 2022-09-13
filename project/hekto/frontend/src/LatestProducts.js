import "./style.css";
import image1166 from './images/image1166.png'
import image15 from './images/image15.png'
import image1168 from './images/image1168.png'
import image23 from './images/image23.png'
import image32 from './images/image32.png'
import image3 from './images/image3.png'
import Group27 from './images/Group27.png'
import Groupcart2 from './images/Groupcart2.png';
import Vector from './images/Vector.png'
import uil_search_plus from './images/uil_search_plus.png'
function LatestProducts() {
    return (
        <div className="LatestProducts_outer">
            <div className="LatestProducts_header">
                <label>Leatest Products</label>
            </div>
            <div className="LatestProducts_secondmenu">

                <label className="LatestProducts_secondmenu_col">New Arrival</label>
                <label className="LatestProducts_secondmenu_col">Best Seller</label>
                <label className="LatestProducts_secondmenu_col">Featured</label>
                <label className="LatestProducts_secondmenu_col">Special Offer</label>

            </div>
            <div className="LatestProducts_outerimage">
                <div className="LatestProducts_inneroutimage1">
                    <div className="LatestProducts_inninnerimage">
                        <div className="LatestProducts_inninnerimage_row">
                            <div className="LatestProducts_imagecol1">
                                <div className="LatestProducts_imagecol1row1">
                                    <img src={Group27}></img>

                                </div>
                                <div className="LatestProducts_imagecol1row2">
                                    <div className="LatestProducts_imageicons1"><img src={Groupcart2}></img></div>
                                    <div className="LatestProducts_imageicons2"><img src={Vector}></img></div>
                                    <div className="LatestProducts_imageicons2"><img src={uil_search_plus}></img></div>
                                </div>
                            </div>
                            <div className="LatestProducts_imagecol2" >
                                <img src={image1166}></img>
                            </div>
                        </div>
                        <div className="LatestProducts_bottomimagecol">
                            <div className="LatestProducts_botlftimagecol">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimagecol">
                                <label>$42.00</label>
                                <span>$65.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="LatestProducts_inninnerimage">
                        <div className="LatestProducts_inninnerimage_row">
                            <div className="LatestProducts_imagecol2" >
                                <img src={image15}></img>
                            </div>
                        </div>
                        <div className="LatestProducts_bottomimagecol">
                            <div className="LatestProducts_botlftimagecol">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimagecol">
                                <label>$42.00</label>
                                <span>$65.00</span>
                            </div>
                        </div>

                    </div>
                    <div className="LatestProducts_inninnerimage">
                        <div className="LatestProducts_inninnerimage_row">
                            <div className="LatestProducts_imagecol2" >
                                <img src={image1168}></img>
                            </div>
                        </div>
                        <div className="LatestProducts_bottomimagecol">
                            <div className="LatestProducts_botlftimagecol">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimagecol">
                                <label>$42.00</label>
                                <span>$65.00</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="LatestProducts_inneroutimage2">
                    <div className="LatestProducts_inninnerimage">
                    <div className="LatestProducts_inninnerimage_row">  
                        <div className="LatestProducts_imagecol" >
                            <img src={image23}></img>
                        </div>
                      </div>  
                        <div className="LatestProducts_bottomimagecol">
                            <div className="LatestProducts_botlftimagecol">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimagecol">
                                <label>$42.00</label>
                                <span>$65.00</span>
                            </div>
                        </div>


                    </div>
                    <div className="LatestProducts_inninnerimage">
                    <div className="LatestProducts_inninnerimage_row">
                        <div className="LatestProducts_imagecol2" >
                            <img src={image32}></img>
                        </div>
                        </div>
                        <div className="LatestProducts_bottomimagecol">
                            <div className="LatestProducts_botlftimagecol">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimagecol">
                                <label>$42.00</label>
                                <span>$65.00</span>
                            </div>
                        </div>

                    </div>
                    <div className="LatestProducts_inninnerimage">
                    <div className="LatestProducts_inninnerimage_row">
                        <div className="LatestProducts_imagecol2" >
                            <img src={image3}></img>
                        </div>
                        </div>
                        <div className="LatestProducts_bottomimagecol">
                            <div className="LatestProducts_botlftimagecol">
                                <label>Comfort Handy Craft</label>
                            </div>
                            <div className="LatestProducts_botrgtimagecol">
                                <label>$42.00</label>
                                <span>$65.00</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestProducts;
