import React, { PureComponent } from 'react';
import { Checkbox } from 'antd';

class DataPanelHeader extends PureComponent {

  onChange = () => {

  };

  render() {
    return (
      <div>
        <Checkbox onChange={this.onChange}>标签</Checkbox>
      </div>
    );
  };
}
export default DataPanelHeader;
