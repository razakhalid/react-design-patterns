import { styled, css } from "styled-components";
import {spaceSchema} from "../common/spaces";
import { Logo, MenuWrapper } from '../inline-bundle-pattern/menu';
import { Button } from "../button";
import {InlineBundle} from "../inline-bundle-pattern/start";

const stretchSchema = {
    all: `> * {flex: 1}`,
    start: `> :first-child { flex: 1 }`,
    end: `> :last-child { flex: 1 }`
}

const responsive = css`
    --switchAt: ${({ switchAt }) => {
        return typeof switchAt === 'string' ? switchAt : `${switchAt}px`
    }};
    flex-wrap: wrap;
  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`

export const Inline = styled(InlineBundle)`
  flex-wrap: nowrap;
  ${ ({ stretch }) => {
      if (typeof stretch === 'number') {
        return `> :nth-child(${stretch + 1}) { flex: 1 }`;
      } 
      return stretchSchema[stretch] || ""; 
  } }
  
  > * {
    min-width: fit-content;
  }
  
  ${({switchAt}) => switchAt && responsive}
`;

const Menu = () => {
    return (
        <MenuWrapper>
            <Inline stretch={1} align="center" switchAt="40rem">
                <div>
                    <Logo/>
                </div>
                <InlineBundle justify="end" align="center" gutter="m">
                    <span>Books</span>
                    <span>Authors</span>
                    <span>Deals</span>
                    <span>About Us</span>
                    <span>Sign-in</span>
                </InlineBundle>
            </Inline>
            <Inline justify="end" align="center">
                <span>Login</span>
                <Button>Register</Button>
            </Inline>
        </MenuWrapper>
    )
}

export default Menu;