const Header = ({ children }) => {
    return (
        <div style={{
            borderBottom: "1px solid black",
            padding: "0.5rem",
            marginBottom: "0.5rem"
        }}>
            {children}
        </div>
    )
}

const Footer = ({ children }) => {
    return (
        <div style={{
            borderTop: "1px solid black",
            padding: "0.5rem",
            marginTop: "0.5rem"
        }}>
            {children}
        </div>
    )
}

export const Card = ({ children }) => {
    return (
        <div style={{border: "1px solid black"}}>
            {children}
        </div>
    )
}

const Body = ({ children }) => {
    return <div style={{ border: "1px solid black"}}>{children}</div>
}

Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;