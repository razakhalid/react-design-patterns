import {Buttons} from "./buttons";
import {Counter} from "./counter";
import mitt from "mitt";
export const emitter = mitt();
export const Subscriber = () => {
    return (
        <>
            <Buttons/>
            <Counter/>
        </>
    )
}