import React, { useState } from "react";
import { Dropdown, Form, Input, TextArea, Button } from "semantic-ui-react";

const xAxisParameterOptions = [
  { key: "option1", value: "option1", text: "option1" },
  { key: "option2", value: "option2", text: "option2" },
];

const yAxisParameterOptions = [
  { key: "option3", value: "option3", text: "option3" },
  { key: "option4", value: "option4", text: "option4" },
];

const CreateWidgetStepOne = ({ setCurrentStep }) => {
  const createCustomWidgetStepOneData = JSON.parse(
    window.localStorage.getItem("createCustomWidget.stepOne")
  );

  const [title, setTitle] = useState(
    createCustomWidgetStepOneData?.title || ""
  );
  const [xAxisParameter, setXAxisParameter] = useState(
    createCustomWidgetStepOneData?.dataConfig?.xAxisParameter || ""
  );
  const [yAxisParameter, setYAxisParameter] = useState(
    createCustomWidgetStepOneData?.dataConfig?.yAxisParameter || ""
  );
  const [xAxisFormatter, setXAxisFormatter] = useState(
    createCustomWidgetStepOneData?.dataConfig?.xAxisFormatter || ""
  );
  const [yAxisFormatter, setYAxisFormatter] = useState(
    createCustomWidgetStepOneData?.dataConfig?.yAxisFormatter || ""
  );

  function handleCreateWidgetStepOneData(e) {
    e.preventDefault();
    window.localStorage.setItem(
      "createCustomWidget.stepOne",
      JSON.stringify({
        title,
        dataConfig: {
          xAxisParameter,
          yAxisParameter,
          xAxisFormatter,
          yAxisFormatter,
        },
      })
    );
    setCurrentStep("stepTwo");
  }

  return (
    <Form>
      <Form.Field required>
        <label>Tittle</label>
        <Input
          placeholder="Tittle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field required>
        <label>X-Axis Parameter</label>
        <Dropdown
          value={xAxisParameter}
          placeholder="Select your X-Axis Parameter"
          options={xAxisParameterOptions}
          onChange={(e, { value }) => setXAxisParameter(value)}
          selection
        />
      </Form.Field>
      <Form.Field required>
        <label>Y-Axis Parameter</label>
        <Dropdown
          value={yAxisParameter}
          onChange={(e, { value }) => setYAxisParameter(value)}
          placeholder="Select your Y-Axis Parameter"
          options={yAxisParameterOptions}
          selection
        />
      </Form.Field>
      <Form.Field>
        <label>X-Axis Formatter</label>
        <TextArea
          placeholder="X-Axis Formatter"
          value={xAxisFormatter}
          onChange={(e) => setXAxisFormatter(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Y-Axis Formatter</label>
        <TextArea
          placeholder="Y-Axis Formatter"
          value={yAxisFormatter}
          onChange={(e) => setYAxisFormatter(e.target.value)}
        />
      </Form.Field>
      <Button
        className="ui primary button"
        onClick={handleCreateWidgetStepOneData}
        disabled={!title || !xAxisParameter || !yAxisParameter}
      >
        Next
      </Button>
    </Form>
  );
};

export default CreateWidgetStepOne;
