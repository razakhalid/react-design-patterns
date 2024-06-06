import { styled } from 'styled-components';
import {Layers} from "../layers-pattern/start";

const Center = styled.div`
    box-sizing: content-box;
    margin-inline-start: auto;
    margin-inline-end: auto;
    max-inline-size: ${(props) => props.maxWidth};
    ${ (props) => props.centerText && `text-align: center;` }
    ${ (props) => props.centerChildren && `
    display: flex;
    flex-direction: column;
    align-items: center;
    ` }
`;

export const Profile = () => {
    return (
        <Center as={Layers} gutter="xs" maxWidth="60ch" centerText centerChildren>
            <h2>Header</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut beatae deleniti distinctio dolores eos id incidunt ipsum, iusto quaerat qui quidem quod repellendus sint ullam vitae voluptatibus. Eligendi maiores mollitia rem repellat tenetur. Aperiam non recusandae reiciendis repellat sequi?</p>
            <div>
                <span>O</span>
                <span>Image</span>
            </div>
        </Center>
    )
}