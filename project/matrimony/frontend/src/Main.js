import "./newstyle.css";
import bg from "./image/bg.webp";
export default function App() {
  return (
    <>
      <div className="row1">
        <label>Christian matrimony</label>
      </div>
      <div className="row2" style={{ backgroundImage: `url(${bg})` }}>
        <div className="inner">
          <label>Test</label>
        </div>
      </div>
      <div className="row3">Three</div>
    </>
  );
}
