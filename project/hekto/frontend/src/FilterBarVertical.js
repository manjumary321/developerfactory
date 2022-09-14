import "./FilterBarVertical.css";
import FilterBarVertical_search from './Images/FilterBarVertical_search.png';

function FilterBarVertical() {
    return (
        <>
            <div className="FilterBarVertical_outer">
                {/* ---------Product Brand--------- */}
                <div className=".FilterBarVertical_ProdBrand">
                    <div className="FilterBarVertical_header">
                        <label>Product Brand</label>
                    </div>
                    <div className="FilterBarVertical_prodcheck">
                        <div className="FilterBarVertical_prodcheckrow">
                            <input type="checkbox"></input>
                            <label> Coaster Furniture</label>
                        </div>
                        <div className="FilterBarVertical_prodcheckrow">
                            <input type="checkbox"></input>
                            <label> Fusion Dot High Fashion</label>
                        </div>
                        <div className="FilterBarVertical_prodcheckrow">
                            <input type="checkbox"></input>
                            <label> Unique Furnitture Restor</label>
                        </div>
                        <div className="FilterBarVertical_prodcheckrow">

                            <input type="checkbox"></input>
                            <label> Dream Furnitture Flipping</label>
                        </div>
                        <div className="FilterBarVertical_prodcheckrow">
                            <input type="checkbox"></input>
                            <label> Young Repurposed</label>
                        </div>
                        <div className="FilterBarVertical_prodcheckrow">
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
                    <div className="FilterBarVertical_DisOffercheck">
                        <div className="FilterBarVertical_DisOffercheckrow">
                            <input type="checkbox"></input>
                            <label>20% Cashback</label>
                        </div>
                        <div className="FilterBarVertical_DisOffercheckrow">
                            <input type="checkbox"></input>
                            <label> 5% Cashback Offer</label>
                        </div>
                        <div className="FilterBarVertical_DisOffercheckrow">
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
                </div>
                {/* ---------Categories--------- */}
                <div className="FilterBarVertical_Categories">
                    <div className="FilterBarVertical_header">
                        <label>Categories</label>
                    </div>

                </div>
                {/* ---------Price Filter--------- */}
                <div className="FilterBarVertical_PriFilter">
                    <div className="FilterBarVertical_header">
                        <label>Price Filter</label>
                    </div>
                    <div className="FilterBarVertical_PriFiltercheck">
                        <div className="FilterBarVertical_PriFiltercheckrow">
                            <input type="checkbox" />
                            <span className="geekmark"></span>
                            <label>$0.00 - $150.00</label>
                        </div>
                        <div className="FilterBarVertical_PriFiltercheckrow">
                            <input type="checkbox" />
                            <label>$150.00 - $350.00</label>
                        </div>
                        <div className="FilterBarVertical_PriFiltercheckrow">
                            <input type="checkbox" />
                            <label> $150.00 - $350.00</label>
                        </div>
                        <div className="FilterBarVertical_PriFiltercheckrow">
                        <input type="checkbox" />
                            <label>$450.00 +</label>
                        </div>
                        <div className="FilterBarVertical_PriFiltersearch">
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
                    <div className="FilterBarVertical_color">
                        <div className="FilterBarVertical_colorrow">
                            <div className="FilterBarVertical_colorrow_col1">
                                <label>Blue</label>
                            </div>
                            <div className="FilterBarVertical_colorrow_col2">
                                <label>Orange</label>
                            </div>
                            <div className="FilterBarVertical_colorrow_col3">
                                <label>Brown</label>
                            </div>
                        </div>
                        <div className="FilterBarVertical_colorrow">
                            <div className="FilterBarVertical_colorrow_col4">
                                <label>Green</label>
                            </div>
                            <div className="FilterBarVertical_colorrow_col5">
                                <label>Purple</label>
                            </div>
                            <div className="FilterBarVertical_colorrow_col6">
                                <label>Sky</label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default FilterBarVertical;