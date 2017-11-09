// @flow

import React from "react";
import { help } from "../../src";

type Props = {
  help?: string
};

export default class Helped extends React.Component<Props> {
  render() {
    const helpProps = help(this);

    return (
      <div>
        <div>Help text: {helpProps.text}</div>
        <div>Help id: {helpProps.id}</div>
      </div>
    );
  }
}
