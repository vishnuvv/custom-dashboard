import React, { useState } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";

const yAxisOrientationOptions = [
  { key: "bottom", text: "bottom", value: "bottom" },
  { key: "left", text: "left", value: "left" },
];

const yAxisScaleOptions = [
  { key: "linear", value: "linear", text: "linear" },
  { key: "logarithmic", value: "logarithmic", text: "logarithmic" },
];

const noOfTicksOptions = [
  { key: "5", value: "5", text: "5" },
  { key: "6", value: "6", text: "6" },
  { key: "7", value: "7", text: "7" },
  { key: "8", value: "8", text: "8" },
  { key: "9", value: "9", text: "9" },
  { key: "10", value: "10", text: "10" },
];

const legendOrientationOptions = [
  { key: "legendOne", value: "legendOne", text: "legendOne" },
  { key: "legendTwo", value: "legendTwo", text: "legendTwo" },
  { key: "legendThree", value: "legendThree", text: "legendThree" },
];

const CreateWidgetStepTwo = ({
  setCurrentStep,
  setShowCreateCustomWidgetModal,
}) => {
  const dispatch = useDispatch();
  const createCustomWidgetStepTwoData = JSON.parse(
    window.localStorage.getItem("createCustomWidget.stepTwo")
  );
  const createCustomWidgetStepOneData = JSON.parse(
    window.localStorage.getItem("createCustomWidget.stepOne")
  );
  const [yAxisOrientation, setYAxisOrientation] = useState(
    createCustomWidgetStepTwoData?.chartConfig?.yAxisOrientation || ""
  );
  const [yAxisScale, setYAxisScale] = useState(
    createCustomWidgetStepTwoData?.chartConfig?.yAxisScale || ""
  );
  const [noOfSticks, setNoOfSticks] = useState(
    createCustomWidgetStepTwoData?.chartConfig?.noOfSticks || ""
  );
  const [legendOrientation, setLegendOrientation] = useState(
    createCustomWidgetStepTwoData?.chartConfig?.legendOrientation || ""
  );

  function handleCreateWidgetStepTwoData(e) {
    e.preventDefault();
    window.localStorage.setItem(
      "createCustomWidget.stepTwo",
      JSON.stringify({
        chartConfig: {
          yAxisOrientation,
          yAxisScale,
          noOfSticks,
          legendOrientation,
        },
      })
    );
    const createCustomWidgetStepTwoData = JSON.parse(
      window.localStorage.getItem("createCustomWidget.stepTwo")
    );
    dispatch({
      type: "CUSTOM_WIDGET_CREATE",
      payload: {
        ...createCustomWidgetStepOneData,
        ...createCustomWidgetStepTwoData,
      },
    });
    setShowCreateCustomWidgetModal(false);
  }
  return (
    <Form>
      <Form.Field required>
        <label>Y-Axis Orientation</label>
        <Dropdown
          value={yAxisOrientation}
          onChange={(e, { value }) => setYAxisOrientation(value)}
          placeholder="Select your Y-Axis orientation"
          options={yAxisOrientationOptions}
          selection
        />
      </Form.Field>
      <Form.Field required>
        <label>Y-Axis Scale</label>
        <Dropdown
          value={yAxisScale}
          onChange={(e, { value }) => setYAxisScale(value)}
          placeholder="Select your Y-Axis Scale"
          options={yAxisScaleOptions}
          selection
        />
      </Form.Field>
      <Form.Field required>
        <label>No of ticks</label>
        <Dropdown
          value={noOfSticks}
          onChange={(e, { value }) => setNoOfSticks(value)}
          placeholder="Select your No of ticks"
          options={noOfTicksOptions}
          selection
        />
      </Form.Field>
      <Form.Field>
        <label>Legend orientation</label>
        <Dropdown
          value={legendOrientation}
          onChange={(e, { value }) => setLegendOrientation(value)}
          placeholder="Select your Legend Orientation"
          options={legendOrientationOptions}
          selection
        />
      </Form.Field>
      <Button
        className="ui primary button"
        onClick={() => setCurrentStep("stepOne")}
        disabled={!yAxisOrientation || !yAxisScale || !noOfSticks}
      >
        Previous
      </Button>
      <Button
        className="ui primary button"
        onClick={handleCreateWidgetStepTwoData}
      >
        Submit
      </Button>
    </Form>
  );
};

export default CreateWidgetStepTwo;
