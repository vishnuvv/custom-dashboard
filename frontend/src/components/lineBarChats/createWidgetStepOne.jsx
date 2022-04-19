import React, { useState } from "react";
import { Dropdown, Form, Input, TextArea, Button } from "semantic-ui-react";
import { alarms } from "../../hardcoded/alarms";

const xyAxisParameterOptions = [];

const uniqueAlaramTypes = new Set();

for (let alaram of alarms) {
  uniqueAlaramTypes.add(alaram.type);
}
for (let item of uniqueAlaramTypes) {
  xyAxisParameterOptions.push({
    key: item,
    value: item,
    text: item,
  });
}

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
          options={xyAxisParameterOptions}
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
          options={xyAxisParameterOptions}
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
