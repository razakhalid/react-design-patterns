import {styled} from "styled-components";
import {Logo} from "./logo";
import {Pad} from "../pad-pattern/start";
import {Layers} from "../layers-pattern/start";
import {Split} from "../split-pattern/start";
import {Column, Columns} from "../columns-pattern/start";
import { Buttons } from "./buttons";

const Form = styled.div`
    border-inline-start: 1px solid lightgrey;
    > * + * {
        border-block-start: 1px solid lightgrey;
    }
`;

const Inputs = ({ label, children }) => {
    return (
        <Layers as="label" gutter="s">
            {label}
            {children}
        </Layers>
    )
}

const Input = styled.input`
    border-radius: 0.25rem;
    border: 1px solid lightgrey;
    color: #303030;
    height: 30px;
`

const SubLabel = styled.span`
    color: grey;
`;

export const RightSide = () => {
    return (
        <Form>
            <Pad as="section" padding="l">
                <Layers as="header" gutter="l">
                    <Layers gutter="l">
                        <h2>General Information</h2>
                        <SubLabel>Information required for verification</SubLabel>
                    </Layers>
                    <div>
                        <Split gutter="l" fraction="auto-end">
                            <Layers gutter="l">
                                <Inputs label="Username">
                                    <Input type="text"/>
                                </Inputs>
                                <Inputs label="About">
                                    <Input as="textarea"/>
                                    <SubLabel>Introduce yourself</SubLabel>
                                </Inputs>
                            </Layers>
                            <Inputs label="Image">
                                <Logo inverse size="10rem"/>
                            </Inputs>
                        </Split>
                    </div>
                    <Columns gutter="l" columns={2}>

                        <Inputs label="First Name">
                            <Input type="text"/>
                        </Inputs>
                        <Inputs label="Last Name">
                            <Input type="text"/>
                        </Inputs>
                        <Inputs label="Linkedin">
                                <Input type="text"/>
                            </Inputs>
                        <Inputs label="Employer">
                            <Input type="text"/>
                        </Inputs>
                    </Columns>
                </Layers>
            </Pad>
            <Buttons></Buttons>
        </Form>
    )
}