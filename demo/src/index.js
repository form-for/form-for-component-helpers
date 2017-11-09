// @flow

import React from "react";
import { render } from "react-dom";
import Help from "./Help";
import UniqueId from "./UniqueId";
import Humanized from "./Humanized";

class Demo extends React.Component<any> {
  render() {
    return (
      <div>
        <section>
          <h1>Help</h1>

          <Help help="Test" />
        </section>

        <section>
          <h1>Humanize</h1>

          <Humanized name="first_name" />
          <Humanized name="user[middle_name]" />
          <Humanized name="lastName" />
        </section>

        <section>
          <h1>UniqueId</h1>

          <UniqueId />
          <UniqueId />
          <UniqueId id="does not get overridden" />
        </section>
      </div>
    );
  }
}

render(<Demo />, window.document.querySelector("#demo"));
