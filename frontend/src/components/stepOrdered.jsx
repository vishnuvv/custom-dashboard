import React from "react";
import { Step } from "semantic-ui-react";

const StepOrdered = ({ currentStep }) => (
  <Step.Group ordered>
    <Step
      active={currentStep === "stepOne"}
      completed={currentStep === "stepTwo"}
    >
      <Step.Content>
        <Step.Title>dataConfig</Step.Title>
        <Step.Description>Enter data config information</Step.Description>
      </Step.Content>
    </Step>

    <Step active={currentStep === "stepTwo"}>
      <Step.Content>
        <Step.Title>chartConfig</Step.Title>
        <Step.Description>Enter chart config information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default StepOrdered;
