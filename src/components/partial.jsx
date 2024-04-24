export const partialComponent = (Component, partialProps) => {
    return props => <Component {...partialProps} {...props}/>;
}

export const Button = ({ size, color, text, ...props}) => {
    return (
        <button
            style={{
                fontSize: size === 'small' ? '8px' : '32px',
                backgroundColor: color
            }}
        >
            {text}
        </button>
    )
}

export const PartialRedButton = partialComponent(Button, {color: 'crimson'});
export const PartialSmallRedButton = partialComponent(PartialRedButton, {size: 'small'});