import "./App.css";
import React, { useState } from "react";
import CreateWidgetStepOne from "./components/lineBarChats/createWidgetStepOne";
import CreateWidgetStepTwo from "./components/lineBarChats/createWidgetStepTwo";
import StepOrdered from "./components/stepOrdered";
import { Modal, ModalContent, Button } from "semantic-ui-react";
function App() {
  const [currentStep, setCurrentStep] = useState("stepOne");
  const [showCreateCustomWidgetModal, setShowCreateCustomWidgetModal] =
    useState(false);
  return (
    <div className="App">
      <Button onClick={() => setShowCreateCustomWidgetModal(true)}>
        Create Custom Widget
      </Button>
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
            <CreateWidgetStepTwo setCurrentStep={setCurrentStep} />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
