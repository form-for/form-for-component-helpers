// @flow

import React from "react";
import { uniqueId } from "../../src";

export default class UniqueId extends React.Component<*> {
  render() {
    const id = uniqueId(this);

    return <div>Unique Id: {id}</div>;
  }
}
