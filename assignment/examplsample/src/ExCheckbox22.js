import './ExCheckbox22.css';

function ExCheckbox22(){
    return (
    <div className="ExCheckbox22_outer">
        <h1>Qualification</h1>
        <label class="container">MCA
            <input type="checkbox"/>
                <span class="mark"></span>
        </label>
        <label class="container">BCA
            <input type="checkbox"/>
                <span class="mark"></span>
        </label>
        <label class="container">12th
            <input type="checkbox"/>
                <span class="mark"></span>
        </label>
        <label class="container">10th
            <input type="checkbox" checked="check"/>
                <span class="mark"></span>
        </label>
    </div>
)
    }
export default ExCheckbox22;