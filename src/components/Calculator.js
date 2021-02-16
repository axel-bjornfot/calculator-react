import Display from "../components/Display"
import ButtonsContainer from "./ButtonsContainer";
import { calculator } from "../css/Calculator.module.css";



function Calculator () {
    return (
        <div className={calculator}>
<Display />
<ButtonsContainer />

        </div>
    )
}

export default Calculator;