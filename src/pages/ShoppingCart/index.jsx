import React, { PureComponent } from 'react';
import YellowPageHeader from './components/YellowPageHeader';
import {Button, Checkbox, Collapse} from 'antd';
import style from './index.less';

const { Panel } = Collapse;

class ShoppingCart extends PureComponent {
  render() {
    const toggleButton = <Button type="link">收起</Button>;

    const header = (
      <span>
        <Checkbox />
        <span>Title</span>
      </span>
    );

    return (
      <div className={style.viewContainer}>
        <YellowPageHeader />
        <div className={style.allDataHeader}>
          <div className={style.allDataTitle}>全部数据</div>
          <div>
            <Button type="primary" ghost>
              添加更多
            </Button>
          </div>
        </div>
        <Collapse bordered={false} defaultActiveKey={['Tags', 'Metrics', 'Table']}>
          <Panel header={header} showArrow={false} extra={toggleButton} key="Tags">

          </Panel>
          <Panel header={header} showArrow={false} extra={toggleButton} key="Metrics"></Panel>
          <Panel header={header} showArrow={false} extra={toggleButton} key="Table"></Panel>
        </Collapse>
      </div>
    );
  }
}
export default ShoppingCart;
