import { Description } from "../pad-pattern/component";
import {Grid} from "../grid-pattern/start";
import {styled} from "styled-components";

const MediaWrapper = styled.div`
    --n: ${ (props) => props.ratio ? props.ratio[0] : 1 };
    --d: ${ (props) => props.ratio ? props.ratio[1] : 1 };
    aspect-ratio: var(--n) / var(--d);
    @supports not (aspect-ratio: 1/1) {
        padding-bottom: calc(var(--d) / var(--n) * 100%);
    }
    position: relative;
    width: 18rem;
    height: 18rem;
    > * {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > img, > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const NewProducts = () => {
    return (
        <div>
            <MediaWrapper ratio={[1,1]}>
                <img
                    src="https://i.ebayimg.com/images/g/6CAAAOSwz-dgfGWl/s-l960.webp"
                    alt=""
                />
                <Description>Yellow Shirt - $ 19.99</Description>
            </MediaWrapper>
        </div>
    )
}

export const NewProductsList = () => {
    return (
        <>
            <Grid gutter="xl" minItemWidth="18rem">
                <NewProducts/>
                <NewProducts/>
                <NewProducts/>
                <NewProducts/>
            </Grid>
        </>
    )
}