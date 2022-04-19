import React, { useState } from "react";
import {
  Accordion,
  Button,
  Header,
  Segment,
  Modal,
  ModalContent,
} from "semantic-ui-react";
import StepOrdered from "../components/stepOrdered";
import CreateWidgetStepOne from "../components/lineBarChats/createWidgetStepOne";
import CreateWidgetStepTwo from "../components/lineBarChats/createWidgetStepTwo";

export default function WidgetComponent(props) {
  const [currentStep, setCurrentStep] = useState("stepOne");
  const [showCreateCustomWidgetModal, setShowCreateCustomWidgetModal] =
    useState(false);
  return (
    <>
      <Accordion>
        <Accordion.Title
          index={props?.index}
          size={"tiny"}
          as={Header}
          attached="top"
          block
        >
          {props?.customWidgets[`${props?.index}`]?.title
            ? props?.customWidgets[`${props?.index}`]?.title
            : `Accordion Title ${props?.index}`}
        </Accordion.Title>
        <Accordion.Content as={Segment} attached style={{ display: "block" }}>
          {props?.customWidgets[`${props?.index}`]?.title ? (
            <p>chat data goes here</p>
          ) : (
            <Button onClick={() => setShowCreateCustomWidgetModal(true)}>
              Create Custom Widget
            </Button>
          )}
          {/* <Button onClick={() => setShowCreateCustomWidgetModal(true)}>
            Create Custom Widget
          </Button> */}
        </Accordion.Content>
      </Accordion>
      <Modal size="large" open={showCreateCustomWidgetModal}>
        <Modal.Header>
          <h1>Create Custom Widget</h1>
          <Button
            circular
            icon="close"
            title="Close"
            onClick={() => setShowCreateCustomWidgetModal(false)}
            floated="right"
            style={{ top: "-60px", position: "relative", right: "-10px" }}
          />
        </Modal.Header>
        <ModalContent>
          <StepOrdered currentStep={currentStep} />
          {currentStep === "stepOne" && (
            <CreateWidgetStepOne setCurrentStep={setCurrentStep} />
          )}
          {currentStep === "stepTwo" && (
            <CreateWidgetStepTwo
              setCurrentStep={setCurrentStep}
              setShowCreateCustomWidgetModal={setShowCreateCustomWidgetModal}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
