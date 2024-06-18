import { emitter } from "./parent";

export const Buttons = () => {
    const onIncrementCounter = () => {
        emitter.emit("inc");
    }
    const onDecrementCounter = () => {
        emitter.emit("dec");
    }
    return (
        <div>
            <button onClick={onIncrementCounter}>+</button>
            <button onClick={onDecrementCounter}>-</button>
        </div>
    )
}