import "./FilterBarVertical.css";
import FilterBarVertical_search from './Images/FilterBarVertical_search.png';
import LatestProducts_icons_star1 from './Images/LatestProducts_icons_star1.png';
import LatestProducts_icons_star2 from './Images/LatestProducts_icons_star2.png'

function FilterBarVertical() {
    return (
        <>
            <div className="FilterBarVertical_outer">
                {/* ---------Product Brand--------- */}
                <div className="FilterBarVertical_ProdBrand">
                    <div className="FilterBarVertical_header">
                        <label>Product Brand</label>
                    </div>
                    <div className="FilterBarVertical_ProdBrand_check">
                        <div className="FilterBarVertical_ProdBrand_check_row">
                            <input type="checkbox"></input>
                            <label> Coaster Furniture</label>
                        </div>
                        <div className="FilterBarVertical_ProdBrand_check_row">
                            <input type="checkbox"></input>
                            <label> Fusion Dot High Fashion</label>
                        </div>
                        <div className="FilterBarVertical_ProdBrand_check_row">
                            <input type="checkbox"></input>
                            <label> Unique Furnitture Restor</label>
                        </div>
                        <div className="FilterBarVertical_ProdBrand_check_row">

                            <input type="checkbox"></input>
                            <label> Dream Furnitture Flipping</label>
                        </div>
                        <div className="FilterBarVertical_ProdBrand_check_row">
                            <input type="checkbox"></input>
                            <label> Young Repurposed</label>
                        </div>
                        <div className="FilterBarVertical_ProdBrand_check_row">
                            <input type="checkbox"></input>
                            <label> Green DIY furniture</label>
                        </div>
                    </div>
                </div>
                {/* ---------Discount Offer--------- */}
                <div className="FilterBarVertical_DisOffer">
                    <div className="FilterBarVertical_header">
                        <label>Discount Offer</label>
                    </div>
                    <div className="FilterBarVertical_DisOffer_check">
                        <div className="FilterBarVertical_DisOffer_check_row">
                            <input type="checkbox"></input>
                            <label>20% Cashback</label>
                        </div>
                        <div className="FilterBarVertical_DisOffer_check_row">
                            <input type="checkbox"></input>
                            <label> 5% Cashback Offer</label>
                        </div>
                        <div className="FilterBarVertical_DisOffer_check_row">
                            <input type="checkbox"></input>
                            <label> 25% Discount Offer</label>
                        </div>
                    </div>
                </div>
                {/* ---------Rating Item--------- */}
                <div className="FilterBarVertical_RatItem">
                    <div className="FilterBarVertical_header">
                        <label>Rating Item</label>
                    </div>
                    <div className="FilterBarVertical_RatItem_check">
                        <div className="FilterBarVertical_RatItem_check_row">
                            <input type="checkbox"></input>
                            <div className="FilterBarVertical_RatItem_img_row">
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <label>(2341)</label>
                            </div>
                        </div>
                        <div className="FilterBarVertical_RatItem_check_row">
                            <input type="checkbox"></input>
                            <div className="FilterBarVertical_RatItem_img_row">
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <label>(1726)</label>
                            </div>
                        </div>
                        <div className="FilterBarVertical_RatItem_check_row">
                            <input type="checkbox"></input>
                            <div className="FilterBarVertical_RatItem_img_row">
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <label>(258)</label>
                            </div>
                        </div>
                        <div className="FilterBarVertical_RatItem_check_row">
                            <input type="checkbox"></input>
                            <div className="FilterBarVertical_RatItem_img_row">
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star1}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <img src={LatestProducts_icons_star2}></img>
                                <label>(25)</label>
                            </div>
                        </div>
                        
                    </div>

                </div>
                {/* ---------Categories--------- */}
                <div className="FilterBarVertical_Categories">
                    <div className="FilterBarVertical_header">
                        <label>Categories</label>
                    </div>
                    <div className="FilterBarVertical_Cat_check">
                        <ul>
                            <li>
                                <input type="checkbox"></input>
                                <label> Prestashop</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label> Magento</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label> Bigcommerce</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label> osCommerce</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label> 3dcart</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label> Bags</label>
                                
                            </li>
                                <ul>
                                    <li>
                                    <label>Accessories</label>  
                                    </li>
                                    <li>
                                    <label> Bags</label>  
                                    </li>
                                </ul>
                            <li>
                                <input type="checkbox"></input>
                                <label> Watches</label>
                            </li>
                        </ul>

                    </div>


                </div>
                {/* ---------Price Filter--------- */}
                <div className="FilterBarVertical_PriFilter">
                    <div className="FilterBarVertical_header">
                        <label>Price Filter</label>
                    </div>
                    <div className="FilterBarVertical_PriFilt_check">
                        <div className="FilterBarVertical_PriFilt_check_row">
                            <input type="checkbox" />
                            <span className="geekmark"></span>
                            <label>$0.00 - $150.00</label>
                        </div>
                        <div className="FilterBarVertical_PriFilt_check_row">
                            <input type="checkbox" />
                            <label>$150.00 - $350.00</label>
                        </div>
                        <div className="FilterBarVertical_PriFilt_check_row">
                            <input type="checkbox" />
                            <label> $150.00 - $350.00</label>
                        </div>
                        <div className="FilterBarVertical_PriFilt_check_row">
                        <input type="checkbox" />
                            <label>$450.00 +</label>
                        </div>
                        <div className="FilterBarVertical_PriFilt_search">
                            <input type="name"></input>
                            <img src={FilterBarVertical_search}></img>

                        </div>
                    </div>
                </div>
                {/* ---------Filter By Color--------- */}
                <div className="FilterBarVertical_FilterByColor">
                    <div className="FilterBarVertical_header">
                        <label>Filter By Color</label>
                    </div>
                    <div className="FilterBarVertical_FilByColor_color">
                        <div className="FilterBarVertical_FilByColor_color_row">
                            <div className="FilterBarVertical_FilByColor_color_row_col1">
                                <label>Blue</label>
                            </div>
                            <div className="FilterBarVertical_FilByColor_color_row_col2">
                                <label>Orange</label>
                            </div>
                            <div className="FilterBarVertical_FilByColor_color_row_col3">
                                <label>Brown</label>
                            </div>
                        </div>
                        <div className="FilterBarVertical_FilByColor_color_row">
                            <div className="FilterBarVertical_FilByColor_color_row_col4">
                                <label>Green</label>
                            </div>
                            <div className="FilterBarVertical_FilByColor_color_row_col5">
                                <label>Purple</label>
                            </div>
                            <div className="FilterBarVertical_FilByColor_color_row_col6">
                                <label>Sky</label>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ------------ */}
            </div>

        </>
    );
}
export default FilterBarVertical;