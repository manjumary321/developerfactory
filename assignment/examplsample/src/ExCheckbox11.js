import "./ExCheckbox11.css";

function ExCheckbox11() {
    return (
        <>
            <div className="outer1">
                <div className="check_wrapper">
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="checkmark" ></label>

                </div>
            </div>




        {/* ---------------------GeeksforGeeks-------------------- */}
            <div className="GeeksforGeeks">
                <h1>
                    Best Computer Science Platform
                </h1>

                <label class="main">CodeX
                    <input type="checkbox" />
                    <span class="geekmark"></span>
                </label>

                <label class="main">GeeksforGeeks
                    <input type="checkbox" checked="checked" />
                    <span class="geekmark"></span>
                </label>

                <label class="main">CodeY
                    <input type="checkbox" />
                    <span class="geekmark"></span>
                </label>

            </div>



            {/*----------------------------------- */}
<div c>
            <table className="AdminFilterSelection_table">
                                <thead>
                                    <tr className="AdminFilterSelection_tr">
                                        <th className="AdminFilterSelection_th_col1">
                                            <label>
                                            <input type="checkbox" name="check" />
                                            <span classname="checkmark"></span>
                                            </label>
                                            
                                        </th>
                                        <th className="AdminFilterSelection_th_col2">
                                            <label>All Product</label>
                                        </th>
                                        <th className="AdminFilterSelection_th_col3">
                                            <label>10</label>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>Apple</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>2</label>
                                        </td>
    
                                    </tr>
                                </tbody>    
                            </table>    
            </div>
        </>
    )
}
export default ExCheckbox11;