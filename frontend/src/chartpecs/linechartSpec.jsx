const linechartSpec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Stock prices of 5 Tech Companies over Time.",
  width: "600",
  height: "600",
  data: {
    name: "alarms",
    values: [
      {
        type: "Minor",
        count: 18,
        Time: 1650182400000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650182400000,
      },
      {
        type: "Critical",
        count: 2,
        Time: 1650182400000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650186000000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650186000000,
      },
      {
        type: "Critical",
        count: 2,
        Time: 1650186000000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650189600000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650189600000,
      },
      {
        type: "Critical",
        count: 2,
        Time: 1650189600000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650193200000,
      },
      {
        type: "Major",
        count: 73,
        Time: 1650193200000,
      },
      {
        type: "Critical",
        count: 23,
        Time: 1650193200000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650196800000,
      },
      {
        type: "Major",
        count: 72,
        Time: 1650196800000,
      },
      {
        type: "Critical",
        count: 2,
        Time: 1650196800000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650200400000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650200400000,
      },
      {
        type: "Critical",
        count: 250,
        Time: 1650200400000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650207600000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650207600000,
      },
      {
        type: "Critical",
        count: 2,
        Time: 1650207600000,
      },
      {
        type: "Minor",
        count: 18,
        Time: 1650211200000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650211200000,
      },
      {
        type: "Critical",
        count: 2,
        Time: 1650211200000,
      },
      {
        type: "Minor",
        count: 180,
        Time: 1650214800000,
      },
      {
        type: "Major",
        count: 723,
        Time: 1650214800000,
      },
      {
        type: "Critical",
        count: 200,
        Time: 1650214800000,
      },
    ],
  },
  mark: {
    type: "line",
    point: true,
  },
  encoding: {
    x: { timeUnit: "dayhours", field: "Time" },
    y: { field: "count", type: "quantitative" },
    color: { field: "type", type: "nominal" },
  },
};

export default linechartSpec;
