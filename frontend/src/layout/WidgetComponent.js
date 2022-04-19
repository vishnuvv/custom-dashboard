import React from "react";
import {
  Accordion,
  Button,
  Header,
  Segment
} from 'semantic-ui-react'

function configureWidgetHandler () {
  console.log("Configure Widget Clicked");
}

export default function WidgetComponent (props) {
  return (
    <Accordion>
      <Accordion.Title
        index={props.index}
        size={'tiny'}
        as={Header}
        attached="top"
        block
        // {...rest}
        // onClick={click}
      >
        Accordion Title {props.index}
      </Accordion.Title>
      <Accordion.Content
        as={Segment}
        // active={active.includes(props.index)}
        attached
        // {...obj.contentProps}
      >
        <button onClick={configureWidgetHandler}>
          Configure
        </button>
      </Accordion.Content>
    </Accordion>
  );
}