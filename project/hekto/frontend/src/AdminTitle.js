import './AdminTitle.css';
import { MdShoppingBasket } from "react-icons/md";
import { MdAddCircle } from "react-icons/md"

function AdminTitle() {
    return (
        <>
            <div className="AdminTitle_Titlemenu">
                <div className="AdminTitle_Titlemenu_col1">
                    <div className="AdminTitle_Titmenu_col1_col1">
                        <label><MdShoppingBasket style={{ color: '#C3CAD9', fontsize: 70, width: 25, height: 25, textAlign: 'center' }} /></label>
                    </div>
                    <div className="AdminTitle_Titmenu_col1_col2">
                        <label>Products</label>
                    </div>
                </div>
                <div className="AdminTitle_Titlemenu_col2">
                    <label className="AdminTitle_Titmenu_col2_co1">Active</label>
                    <label className="AdminTitle_Titmenu_col2_co1">Draft</label>
                    <label className="AdminTitle_Titmenu_col2_co1">Assembly</label>
                </div>
                <div className="AdminTitle_Titlemenu_col3">
                    <button> <MdAddCircle style={{ color: '#C499FF', fontsize: 60, width: 25, height: 25,marginRight:10 }} />
                    Add Product</button>
                </div>
            </div>
        </>
    )
}
export default AdminTitle;