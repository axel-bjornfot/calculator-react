import Display from "../components/Display"
import { calculator } from "../css/Calculator.module.css";

function Calculator () {
    return (
        <div className={calculator}>
<Display />
        </div>
    )
}

export default Calculator;