import './AdminFilterSelection.css';
import { AiOutlineDown } from "react-icons/ai";

function AdminFilterSelection() {
    return (
        <>
            <div className="AdminFilterSelection_outer">
                <div className="AdminFilterSelection_inner">
                    <div className="AdminFilterSelection_inner_row1">
                        <div className="AdminFilterSelection_inner_row1_left">
                            <label>Product Manufacturer</label>
                        </div>
                        <div className="AdminFilterSelection_inner_row1_right">
                            <button>
                                <AiOutlineDown style={{ color: '#C3CAD9', fontsize: 70 }} />
                            </button>
                        </div>
                    </div>
                    <div className="AdminFilterSelection_inner_row2">
                        <div className="AdminFilterSelection_inner_row2_container">
                            <table className="AdminFilterSelection_table">
                                <thead>
                                    <tr className="AdminFilterSelection_tr">
                                        <th className="AdminFilterSelection_th_col1">
                                            <label></label>
                                            <input type="checkbox" name="check" />
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
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>Samsung</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>4</label>
                                        </td>
                                    </tr>
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>Vivo</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>14</label>
                                        </td>
                                    </tr>
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>OnePlus</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>12</label>
                                        </td>
                                    </tr>
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>Oppo</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>12</label>
                                        </td>
                                    </tr>

                                    {/* ------- */}
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
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>Samsung</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>4</label>
                                        </td>
                                    </tr>
                                    <tr className="AdminFilterSelection_tr">
                                        <td className="AdminFilterSelection_td_col1">
                                            <input type="checkbox" name="check" />
                                        </td>
                                        <td className="AdminFilterSelection_td_col2">
                                            <label>Vivo</label>
                                        </td>
                                        <td className="AdminFilterSelection_td_col3">
                                            <label>14</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
export default AdminFilterSelection;