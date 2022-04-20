import React, { useState } from "react";
import embed from "vega-embed";
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
import { render } from "../utils";
import linechartSpec from "../chartpecs/linechartSpec";
import barchartSpec from "../chartpecs/barchartSpec";

function WidgetComponent(props) {
  const { customWidgets, index } = props;
  const [currentStep, setCurrentStep] = useState("stepOne");
  const [showCreateCustomWidgetModal, setShowCreateCustomWidgetModal] =
    useState(false);
  const config = customWidgets?.[index];
  const updateConfigAndRender = (config) => {
    const xAxisParam = config?.dataConfig?.xAxisParameter;
    const yAxisParam = config?.dataConfig?.yAxisParameter;
    const ticks = config?.chartConfig?.noOfSticks;
    const chartType = config?.chartConfig?.chatType;
    let updatedSpec;
    if (chartType == "linechat") {
      updatedSpec = linechartSpec;
    } else if (chartType == "barchat") {
      updatedSpec = barchartSpec;
    }
    //updatedSpec.encoding.x.axis.tickCount = ticks;
    updatedSpec.encoding.y.axis.tickCount = parseInt(ticks);
    setTimeout(() => embed(`#${config?.title}`, updatedSpec), 1000);
    //render(updatedSpec, config?.title);
  };
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
            : `Title ${props?.index}`}
        </Accordion.Title>
        <Accordion.Content as={Segment} attached active={true}>
          <div id={config?.title}></div>
          {props?.customWidgets[`${props?.index}`]?.title ? (
            updateConfigAndRender(config)
          ) : (
            <Button onClick={() => setShowCreateCustomWidgetModal(true)}>
              Configure Widget
            </Button>
          )}
          {/* <Button onClick={() => setShowCreateCustomWidgetModal(true)}>
            Create Custom Widget
          </Button> */}
        </Accordion.Content>
      </Accordion>
      <Modal
        size="medium"
        style={{ maxHeight: "90vh", overflow: "auto" }}
        open={showCreateCustomWidgetModal}
      >
        <Modal.Header>
          <h2>Create Custom Widget</h2>
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
export default React.memo(WidgetComponent);
