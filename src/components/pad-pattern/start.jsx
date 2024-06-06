import {
    Card,
    Top,
    Bottom,
    Name,
    Description,
    Price
} from "./component";
import { Grid } from "../grid-pattern/start";
import {InlineBundle} from "../inline-bundle-pattern/start";
import {styled} from "styled-components";
import {Layers} from "../layers-pattern/start";
import {spaceSchema} from "../common/spaces";

export const Pad = styled.div`
    padding: ${ (props) => {
        return []
                .concat(props.padding)
                .map((padKey) => spaceSchema[padKey])
                .join(" ");
    } };
`;

const Button = styled(Pad).attrs(() => ({
    as: "button",
    padding: ["s", "l"]
}))`
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 4px;
`;

const GiftCard = () => {
    return (
        <Card>
            <Top>
                <Pad padding="l">
                    <Name>Gift Card</Name>
                    <Description>This is one of our gift cards you can buy</Description>
                    <Price>$25.99</Price>
                    <InlineBundle>
                        <Button>Buy</Button>
                    </InlineBundle>
                </Pad>
            </Top>
            <Bottom>
                <Pad padding="l">
                    <Layers gutter="m">
                        <span>Includes:</span>
                        <ul>
                            <li>Inclusion # 1</li>
                            <li>Inclusion # 2</li>
                            <li>Inclusion # 3</li>
                        </ul>
                    </Layers>
                </Pad>
            </Bottom>
        </Card>
    )
};

export const GiftCardList = () => {
    return (
        <Grid gutter="xl" minItemWidth="16rem">
            <GiftCard></GiftCard>
            <GiftCard></GiftCard>
            <GiftCard></GiftCard>
            <GiftCard></GiftCard>
        </Grid>
    )
}