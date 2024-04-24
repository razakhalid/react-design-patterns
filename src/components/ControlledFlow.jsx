import React from "react";

export const ControlledFlow = ({ children, onComplete, currentIndex, onNext }) => {
    const currentChild = React.Children.toArray(children)[currentIndex];
    const goNext = (dataFromStep) => {
        onNext(dataFromStep);
    };

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext });
    }
}