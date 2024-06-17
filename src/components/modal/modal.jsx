import { styled } from 'styled-components';
import { Cover } from '../cover-pattern/start';
import { Center } from '../center-pattern/start';
import {Layers} from "../layers-pattern/start";
import {Pad} from "../pad-pattern/start";
import {Inline} from "../inline-pattern/start";

const ContentArea = styled(Layers).attrs(() => ({
    as: Pad,
    padding: "l",
    gutter: "s"
}))`
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
`;

const StyledImg = styled(Center).attrs(() => ({
    as: "div"
}))`
    max-width: ${ (props) => props.maxWidth };
`;

const Text = styled(Center).attrs(() => ({
    as: 'span'
}))`
    font-size: ${ props => props.fontSize };
`;

const Button = styled(Center).attrs(() => ({
    as: "button"
}))`
    border-radius: 5px;
    cursor: pointer;
    background: #03045e;
    color: white;
    border: 3px solid transparent;
    font-size: 18px;
`;

export const Modal21 = () => {
    return (
        <Cover as={Center} maxWidth="50rem">
            <ContentArea>
                <Inline justify="end">
                    <span>X</span>
                </Inline>
                <StyledImg
                    maxWidth="30rem"
                >
                    [image]
                </StyledImg>
                <Layers gutter="l">
                    <Layers gutter="s">
                        <Text fontSize="2rem">Heading</Text>
                        <Text fontSize="1.2rem">Description</Text>
                    </Layers>
                    <Button>
                        <Pad padding={["s", "l"]}>
                            Register
                        </Pad>
                    </Button>
                </Layers>
            </ContentArea>
        </Cover>
    )
}