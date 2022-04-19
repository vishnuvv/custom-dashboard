import "./App.css";
import React, { useState } from "react";
import CreateWidgetStepOne from "./components/lineBarChats/createWidgetStepOne";
import CreateWidgetStepTwo from "./components/lineBarChats/createWidgetStepTwo";
import StepOrdered from "./components/stepOrdered";
import { Modal, ModalContent, Button, Header } from "semantic-ui-react";
import AddWidgetLayout from './layout/AddWidgetLayout.js';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

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
      <AddWidgetLayout />
    </div>
  );
}

export default App;
