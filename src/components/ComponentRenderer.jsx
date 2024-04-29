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
import {useCurrentUser} from "./current-user.hook";
import {useResource} from "./resource.hook";
import {useDataSource} from "./data-source.hook";
import {RecursiveComponent} from "./RecursiveComponent";
import {GreenSmallButton, RedButton} from "./composition";
import {PartialSmallRedButton, PartialRedButton } from "./partial";
import {GlobalStyles} from "../utils/index";
import {Button, PrimaryButton} from './button';
import DSModal from './DSModal';
import SubscribeForm from "./layers-pattern/start";
import InfoForm from "./split-pattern/start";
import {InfoFormWithColumns} from "./columns-pattern/start";
import {Cards} from "./grid-pattern/start";
import BundledMenu from "./inline-bundle-pattern/start";

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

function CustomHookPattern() {
    const currentUser = useCurrentUser();
    const user = useCurrentUser("3");
    const resource = useResource("/users/2");
    const userData = useDataSource(async () => {
        const response = await axios.get('/users/1');
        return response;
    })
    console.log(resource)
    return (
        <>
            <UserInfo user={currentUser}/>
            <UserInfo user={user}/>
            <UserInfo user={resource}/>
            <UserInfo user={userData}/>
        </>
    );
}

function RecursiveComponentPattern() {
    const data = {
        key1: "value1",
        key2: {
            innerKey1: "innerValue1",
            innerKey2: {
                innerInnerKey1: "innerInnerValue1",
                innerInnerKey2: "innerInnerValue2"
            }
        },
        key3: "value3"
    }

    return (
      <>
          <RecursiveComponent data={data}/>
      </>
    );
}

function ComponentCompositionPattern() {
    return (
        <>
            <RedButton text={"I am red"}></RedButton>
            <GreenSmallButton text={"I am small and green"}/>
            <PartialRedButton text={"I am partial and red"}/>
            <PartialSmallRedButton text={"I am partial, small and red"}/>
        </>
    )
}

function DesignSystemButtons() {
    return (
        <>
            <Button>Click Me</Button>
            <Button disabled>Click Me</Button>
            <PrimaryButton>Click Me</PrimaryButton>
            <PrimaryButton disabled>Click Me</PrimaryButton>
            <PrimaryButton className="large">Click Me</PrimaryButton>
            <PrimaryButton className="small">Click Me</PrimaryButton>
            <PrimaryButton className="warning">Click Me</PrimaryButton>
            <GlobalStyles/>
        </>
    )
}

function DesignSystemModal() {
    return (
        <DSModal></DSModal>
    )
}

function PatternComponents() {
    return (
        <>
            <SubscribeForm/>
            <InfoForm/>
        </>
    )
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
            {/*<HigherOrderComponentPattern/>*/}

            {/*  CUSTOM HOOK PATTERN  */}
            {/*<CustomHookPattern/>*/}

            {/*  RECURSIVE COMPONENT PATTERN  */}
            {/*<RecursiveComponentPattern/>*/}

            {/*  COMPONENT COMPOSITION PATTERN  */}
            {/*<ComponentCompositionPattern/>*/}

            {/*<DesignSystemButtons/>*/}
            {/*<DesignSystemModal/>*/}

            {/*<PatternComponents/>*/}
            {/*<InfoFormWithColumns/>*/}
            {/*<Cards></Cards>*/}
            <BundledMenu></BundledMenu>
        </>
    );
}