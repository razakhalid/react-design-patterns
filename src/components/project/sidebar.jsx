import {styled} from "styled-components";
import {Layers} from "../layers-pattern/start";
import {Logo} from "./logo";
import {Inline} from "../inline-pattern/start";
import {Pad} from "../pad-pattern/start";

const SideMenu = styled(Layers).attrs(() => ({
    as: "ul",
    gutter: "s"
}))`
    list-style-type: none;
    padding-left: 0;
`;

const SideMenuItem = styled(Inline).attrs(() => ({
    as: Pad,
    gutter: "l",
    padding: ["s", "l"],
    align: "center"
}))`
    border-inline-start-color: #324972;
    ${ props => props.active && `
    background: #1f29371c;`
    }
`;

export const SideBar = () => {
    return (
        <Pad as="nav" padding={["l", "none"]}>
            <SideMenu>
                <SideMenuItem active>
                    <Logo square inverse size="1rem"/>
                    Profile
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem"/>
                    Settings
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem"/>
                    Authentication
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem"/>
                    Email
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem"/>
                    Plans
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem"/>
                    APIs
                </SideMenuItem>
            </SideMenu>
        </Pad>
    )
}