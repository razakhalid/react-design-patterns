import {styled} from "styled-components";
import {Pad} from "../pad-pattern/start";
import {Split} from "../split-pattern/start";
import {Center} from "../center-pattern/start";
import {Layers} from "../layers-pattern/start";
import {SideBar} from "./sidebar";
import {RightSide} from "./right-side";

export const ContentArea = styled(Pad).attrs(() => ({
    padding: "xl"
}))`
    background-image: linear-gradient(to bottom, #0f1623 14rem, rgb(242,242,242) 14rem);
`;

const SettingsHeader = styled.header`
    color: white;
`

const SettingsPane = styled.main`
    background: white;
    border-radius: 0.5rem;
`

export const Content = () => {
    return (
        <ContentArea>
            <Center as={Layers} gutter="l" maxWidth="85rem">
                <SettingsHeader>
                    <h1>Profile Settings</h1>
                </SettingsHeader>
                <SettingsPane>
                    <Split gutter="none" fraction="1/4">
                        <SideBar/>
                        <RightSide/>
                    </Split>
                </SettingsPane>
            </Center>
        </ContentArea>
    )
}