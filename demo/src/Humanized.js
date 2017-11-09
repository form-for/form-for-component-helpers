// @flow

import React from "react";
import { humanized } from "../../src";

type Props = {
  name: string
};

export default class Humanized extends React.Component<Props> {
  render() {
    const label = humanized(this);

    return (
      <div>
        <div>Humanized label: {label}</div>
      </div>
    );
  }
}
