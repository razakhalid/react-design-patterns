import React, {useState} from "react";

export const UncontrolledFlow = ({ children, onComplete }) => {
    const [ data, setData ] = useState({});
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const currentChild = React.Children.toArray(children)[currentIndex];
    const goNext = (dataFromStep) => {
        const nextIndex = currentIndex + 1;
        const newData = {
            ...data,
            ...dataFromStep
        }

        if (nextIndex < children.length) {
            setCurrentIndex(nextIndex);
        } else {
            onComplete(newData);
        }

        setData(newData);
        setCurrentIndex(currentIndex + 1);
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {
            goNext
        })
    }
}