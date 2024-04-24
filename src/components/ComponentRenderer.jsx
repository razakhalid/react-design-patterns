import {SplitScreen} from "./SplitScreen";
import {RegularList} from "./lists/Regular";
import {NumberedList} from "./lists/Numbered";
import {authors} from "../data/authors";
import {SmallAuthorListItems} from "./authors/SmallListItems";
import {LargeAuthorListItems} from "./authors/LargeListItems";
import {SmallBookListItem} from "./books/SmallListItems";
import {LargeBookListItem} from "./books/LargeListItems";
import {Modal} from "./Modal";
import {books} from "../data/books";
import {CurrentUserLoader} from "./CurrentUserLoader";
import {UserLoader} from "./UserLoader";
import {UserInfo} from "./UserInfo";
import {ResourceLoader} from "./ResourceLoader";
import {DataSource} from "./DataSource";
import axios from "axios";
import {DataSourceWithRender} from "./DataSourceWithRender";
import {UncontrolledForm} from "./UncontrolledForm";
import {ControlledForm} from "./ControlledForm";
import {useState} from "react";
import {ControlledModal} from "./ControlledModal";
import {UncontrolledFlow} from "./UncontrolledFlow";
import {ControlledFlow} from "./ControlledFlow";
import {logProps} from "./logProps";
import {includeUser} from "./include-user";
import {UserInfoForm} from "./user-form";

// LAYOUT COMPONENT PATTERNS
const LeftSideComp = ({ title }) => {
    return (
        <h2 style={{backgroundColor: 'crimson'}}>I am {title}</h2>
    );
}

const RightSideComp = ({ title }) => {
    return (
        <h2 style={{backgroundColor: 'burlywood'}}>I am {title}</h2>
    );
}

function ScreenSplitterPattern() {
    return (
        <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComp title={'Left'}/>
            <RightSideComp title={'Right'}/>
        </SplitScreen>
    );
}

function ListPattern() {
    return (
        <>
            <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItems}></RegularList>
            <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItems}></RegularList>
            <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem}></RegularList>
            <RegularList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}></RegularList>
            <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}></NumberedList>
        </>
    )
}

function ModalPattern() {
    return (
        <>
            <Modal>
                <RegularList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}></RegularList>
            </Modal>
        </>
    );
}

async function fetchData(url) {
    const response = await axios.get(url);
    return response.data;
}

function ContainerComponentPattern() {
    return (
        <>
            <p>Not Generic:</p>
            <CurrentUserLoader>
                <UserInfo/>
            </CurrentUserLoader>

            <p>Slightly Generic:</p>
            <UserLoader userId={"3"}>
                <UserInfo/>
            </UserLoader>

            <p>Generic:</p>
            <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
                <UserInfo/>
            </ResourceLoader>

            <p>More Generic:</p>
            <DataSource
                getData={ () => fetchData('/users/3') }
                resourceName={"user"}
            >
                <UserInfo/>
            </DataSource>

            <p>With Render Function:</p>
            <DataSourceWithRender
                getData={ () => fetchData('/users/3') }
                resourceName={"user"}
                render={(resource) => <UserInfo user={resource} />}
            />
        </>
    );
}

const StepOne = ({goNext}) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goNext({ name: 'Raza Khalid' })}>Next</button>
    </>
);
const StepTwo = ({goNext}) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goNext({ age: 26 })}>Next</button>
    </>
);
const StepThree = ({goNext}) => (
    <>
        <h1>Step 3</h1>
        <button onClick={() => goNext({ country: 'Pakistan' })}>Next</button>
    </>
);

function ControlledComponentPattern() {
    const [show, setShow] = useState(false);

    return (
        <>
            <UncontrolledForm></UncontrolledForm>
            <ControlledForm></ControlledForm>
            <button onClick={() => setShow(true)}>Show Modal</button>
            <ControlledModal
                show={show}
                onClose={() => setShow(false)}
            ></ControlledModal>
            <UncontrolledFlow
                onComplete={(data) => {
                    console.log(data);
                }
            }>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
            </UncontrolledFlow>
        </>
    );
}

function ControlledFlowPattern() {
    const [data, setData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const goNext = (dataFromStep) => {
        const nextIndex = currentIndex + 1;
        const newData = {
            ...data,
            ...dataFromStep
        }

        setData(newData);
        setCurrentIndex(nextIndex);
    }
    return (
        <>
            <ControlledFlow
                currentIndex={currentIndex}
                onNext={goNext}
            >
                <StepOne/>
                <StepTwo/>
                <StepThree/>
            </ControlledFlow>
        </>
    )
}

function HigherOrderComponentPattern() {
    const UserInfoWithData = includeUser(UserInfo, "3");
    return (
        <>
            <UserInfoWithData/>
            <UserInfoForm/>
        </>
    );
}

export function ComponentRenderer() {
    return (
        <>
            {/* LAYOUT COMPONENT PATTERNS */}
            {/*<ScreenSplitterPattern/>*/}
            {/*<ListPattern/>*/}

            {/* CONTAINER COMPONENT PATTERNS */}
            {/*<ContainerComponentPattern/>*/}

            {/* CONTROLLED COMPONENT PATTERNS */}
            {/*<ControlledComponentPattern/>*/}

            {/*  CONTROLLED FLOW  */}
            {/*<ControlledFlowPattern/>*/}

            {/*  HIGHER ORDER COMPONENT PATTERN  */}
            <HigherOrderComponentPattern/>
        </>
    );
}