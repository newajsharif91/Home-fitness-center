import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Question.css";

const Question = () => {
  return (
    <div className="question">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How does react work ?</Accordion.Header>
          <Accordion.Body>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces, developed by Facebook, which allows
            developers to easily create fast user interfaces for websites and
            applications alike. The main concept of React.js is virtual DOM
            through which React allows to re-construct DOM in JavaScript and
            push only those changes to the DOM which have actually occurred.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Difference between props and state.
          </Accordion.Header>
          <Accordion.Body>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. Props are immutable but state
            is mutable. Props can be used with state and functional components.
            State can be used only with the state components. Props are
            read-only but State is both read and write.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What are the uses of 'useEffect hook' except data load ?
          </Accordion.Header>
          <Accordion.Body>
            The useEffect Hook allows to perform side effects in the components.
            Except fetching data there are some other examples of side effects
            like directly updating the DOM, and timers. UseEffect accepts two
            arguments. The second argument is optional. The useEffect hook
            allows components to react to lifecycle events such as mounting to
            the DOM, re-rendering, and unmounting.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;
