import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import WidgetComponent from "./WidgetComponent.js";
import { connect } from "react-redux";
const ReactGridLayout = WidthProvider(RGL);

class AddWidgetLayout extends React.Component {
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
    this.state = { layout };
  }
  generateDOM() {
    const customWidgets = this?.props?.customWidgets;
    return _.map(
      _.range(this?.props?.customWidgets.length || this.props.items),
      function (i) {
        return (
          <div key={i}>
            <span>
              <WidgetComponent index={i} customWidgets={customWidgets} />
            </span>
          </div>
        );
      }
    );
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
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

function mapStateToProps(state) {
  const { customWidgets } = state;
  return { customWidgets };
}

export default connect(mapStateToProps)(AddWidgetLayout);
