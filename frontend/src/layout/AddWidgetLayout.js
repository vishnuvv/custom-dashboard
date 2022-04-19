import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { Button } from "semantic-ui-react";
import WidgetComponent from "./WidgetComponent.js";
import { connect } from "react-redux";
const ReactGridLayout = WidthProvider(RGL);

class AddWidgetLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 1,
    rowHeight: 30,
    onLayoutChange: function () {},
    cols: 12,
  };

  constructor(props) {
    super(props);
    const layout = this.generateLayout();
    this.state = { layout, items: 0 };
    this.onAddItem = this.onAddItem.bind(this);
  }
  generateDOM() {
    const customWidgets = this?.props?.customWidgets;
    return _.map(_.range(this.state.items), function (i) {
      return (
        <div key={i}>
          <span>
            <WidgetComponent index={i} customWidgets={customWidgets} />
          </span>
        </div>
      );
    });
  }

  onAddItem() {
    localStorage.removeItem("createCustomWidget.stepOne");
    localStorage.removeItem("createCustomWidget.stepTwo");
    /*eslint no-console: 0*/
    //console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      // items: this.state.items.concat({
      //   i: "n" + this.state.newCounter,
      //   x: (this.state.items.length * 2) % (this.state.cols || 12),
      //   y: Infinity, // puts it at the bottom
      //   w: 2,
      //   h: 2,
      // }),
      // Increment the counter to ensure key is always unique.
      items: this.state.items + 1,
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function (item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 12,
        h: y,
        i: i.toString(),
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <>
        <Button
          onClick={this.onAddItem}
          style={{ margin: "0 auto", display: "block" }}
        >
          Add Item
        </Button>
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { customWidgets } = state;
  return { customWidgets };
}

export default connect(mapStateToProps)(AddWidgetLayout);
