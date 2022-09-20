import './AdminFAQ.css';
import { BiDotsHorizontalRounded } from "react-icons/bi";

function AdminFAQ() {
    return (
        <>
            <div className="AdminFAQ_outer">
                <div className="AdminFAQ_inner">
                    <div className="AdminFAQ_Row1">
                        <div className="AdminFAQ_Row1_col1">
                            <label className="AdminFAQ_Row1_col1_label1">Roxie Howell</label>
                            <label className="AdminFAQ_Row1_col1_label2">January 4,2007</label>
                        </div>
                        <div className="AdminFAQ_Row1_col2">
                            {/* <img></img> */}
                            <BiDotsHorizontalRounded style={{ color: '#C3CAD9', fontsize: 50 }} />
                        </div>

                    </div>
                    <div className="AdminFAQ_Row2">
                        <label>Is it possible to exchange 10.5 inches wi-fi + cellular 2 generations for
                               traid-in iPad Pro for a frameless iPad Pro wi-fi + cellular 12.9 inches
                               with 1 TB memory and how much will the discount be? Hello! Tell Me,
                               can I pay extra with pluses?
                        </label>
                    </div>
                    <div className="AdminFAQ_Row3">
                        <div className="AdminFAQ_Row3_row1">
                            <label>Good day! Detailed information on this program can be clarified by calling the hotline
                                   8-800-700-43-43.Our experts will also help you place your order.|
                            </label>
                        </div>
                        <div className="AdminFAQ_Row3_row2">
                            <button>Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminFAQ;
