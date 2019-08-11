import React, { PureComponent } from 'react';
import { Input } from 'antd';
import style from './index.less';

const { Search } = Input;

class YellowPageHeader extends PureComponent {
  render() {
    return (
      <div className={style.headerContainer}>
        <div className={style.fleft}>
          <img />
          <span>购物车</span>
        </div>
        <div className={style.fright}>
          <Search
            placeholder="请输入你查找的内容"
            enterButton="搜索"
            onSearch={value => console.log(value)}
            className={style.searchBar}
          />
        </div>
      </div>
    );
  }
}
export default YellowPageHeader;
