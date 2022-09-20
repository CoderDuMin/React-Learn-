import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
  render() {
    const location = this.props.location
    return (
      <div>
        <h3>详情3:name-{location.state.name} age-{location.state.age}</h3>
      </div>
    )
  }
}
