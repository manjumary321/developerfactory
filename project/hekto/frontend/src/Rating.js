import './Rating.css';
import Rating_Star4 from './Images/Rating_Star4.png';


function Rating(){
    return(
        <>
        {/* <div className="Rating_outer"> */}
            <div className="Rating_outer_container">
                <div className="Rating_inner_container">
                    <div className="Rating_inncont_row1">
                        <div className="Rating_inncont_row1_row1">
                            <label>Rate Us</label>
                        </div>
                        <div className="Rating_inncont_row1_row2">
                            <img src={Rating_Star4}></img>
                            <img src={Rating_Star4}></img>
                            <img src={Rating_Star4}></img>
                            <img src={Rating_Star4}></img>
                            <img src={Rating_Star4}></img>
                        </div>

                    </div>
                    <div className="Rating_inncont_row2">
                        <div className="Rating_inncont_row2_row1">
                            <label>Comments</label>
                        </div>
                        <div className="Rating_inncont_row2_row2">
                            <input type="comments"/>
                        </div>

                    </div>
                    <div className="Rating_inncont_row3">
                        <button>Submit</button>

                    </div>
                </div>
            </div>
            
        {/* </div> */}
    </>    
    )
}
export default Rating;