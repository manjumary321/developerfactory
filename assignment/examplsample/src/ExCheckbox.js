import "./ExCheckbox.css";

function ExCheckbox() {
    return (
        <>
            <div className="outer1">
                <div className="check_wrapper">
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="checkmark" ></label>

                </div>
            </div>

            <div>
                <label className="checkboxx">
                    <input type="checkebox" id="check"/>
                    <span className='checkb'>Checkmark</span>
                </label>

            </div>
        </>
    )
}
export default ExCheckbox;