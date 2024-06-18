import {Inline} from "../inline-pattern/start";
import {Pad} from "../pad-pattern/start";
import {styled} from "styled-components";
import {Logo} from "./logo";

const Menu = styled(Inline).attrs(() => ({
    as: Pad,
    padding: ["l", "xl"],
    gutter: "l",
    align: "center",
    stretch: 1
}))`
    background: #0F1623;
    color: white;
    border-block-end: 1px solid #303030;
`;

const Item = styled(Pad).attrs(() => ({
    padding: ["s", "l"],
    as: "li"
}))`
    background: ${ props => (props.active ? "#1f2937" : "transparent")};
    list-style-type: none;
    border-radius: 0.25rem;
`;

const SearchBar = styled(Pad).attrs(() => ({
    as: "input",
    padding: ["s", "l"]
}))`
    border-radius: 0.25rem;
    background: #1F2937;
    border: none;
    color: white;
`;

export const MenuBar = () => {
    return (
       <div>
           <Menu>
               <Logo size="2.5rem"/>
               <nav>
                   <Inline as="ul" gutter="s">
                       <Item active>Overview</Item>
                       <Item>Position</Item>
                       <Item>Candidates</Item>
                       <Item>Employer</Item>
                   </Inline>
               </nav>
               <SearchBar placeholder="Search" type="text"/>
               <Logo square size="1.5rem"/>
               <Logo size="2rem"/>
           </Menu>
       </div>
    )
}