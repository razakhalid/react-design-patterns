import {Layers} from '../layers-pattern/start';
import {InlineBundle} from "../inline-bundle-pattern/start";
import {Button} from "../pad-pattern/component";
import {styled} from "styled-components";
import {spaceSchema} from "../common/spaces";
import { Pad } from "../pad-pattern/start";

const Cover = styled.div.attrs(({ children, top, bottom }) => {
    return {
        children: (
            <>
                { top && <div>{top}</div> }
                <div data-cover-child>{children}</div>
                { bottom && <div>{bottom}</div> }
            </>
        )
    }
})`
    display: grid;
    gap: ${ (props) => spaceSchema[props.gutter] ?? spaceSchema.l };
    min-block-size: ${ (props) => props.minHeight ?? "100vh" };
    min-height: 100vh;
    grid-template-rows: ${ ({ top, bottom }) => {
        return (top && bottom) 
                ? "auto 1fr auto"
                : top
                ? "auto 1fr"
                : bottom
                ? "1fr auto"
                : "1fr"
    } };
    > [data-cover-child] {
        align-self: center;
    }
    
`;

const Top = () => {
    return (
        <InlineBundle gutter="xl" justify="end">
                <span>Home</span>
                <span>Products</span>
                <span>Blog</span>
                <span>Contact</span>
            </InlineBundle>
    )
}

const Bottom = () => {
    return (
        <InlineBundle gutter="xl" justify="center">
            <a href="/#">Terms and Conditions</a>
        </InlineBundle>
    )
}

export const HeroPage = () => {
    return (
        <Cover top={<Top></Top>} bottom={<Bottom></Bottom>} as={Pad} padding="l">
            <Layers gutter="l">
                <h1>CodeLicks</h1>
                <span>Learn and grow</span>
                <InlineBundle gutter="l">
                    <Button primary>Enroll Now</Button>
                    <Button>Register</Button>
                </InlineBundle>
            </Layers>
        </Cover>
    )
}