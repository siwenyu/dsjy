import React, { useState } from 'react';
import { Tabs } from 'antd';

import LoadWrap from '../LoadWrap';

import './index.less';

import HomeMore from '../HomeMore';
import ZhaopinItem from '../ItemNotic';

import beforeIcon from '../../assets/images/info-before.png';

const { TabPane } = Tabs;

export default function HomeZhaopin({
  data,
  list0,
  list1,
  showNum,
}) {
  data[0].list = list0;
  data[1].list = list1;
  data.forEach((e, index) => {
    data[index].list = e.list && e.list.slice(0, showNum || 8);
  });
  const [moreLink, setMoreLink] = useState(data[0].link);

  const callback = (index) => {
    setMoreLink(data[index - 1].link);
  };
  
  return (
    <div className="home-zhaopin normal-card">
      <div className="zhaopin-more">
        <HomeMore link={moreLink} />
      </div>
      <div className="normal-title-before-div">
        <img className="normal-title-before" src={beforeIcon} alt="" />
      </div>
      <LoadWrap data={data}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {
            data.map(e => {
              return (
                <TabPane tab={e.tabName} key={e.key}>
                  <LoadWrap data={e.list}>
                    {
                      e.list && e.list.map((item, indexIndex) => {
                        return <ZhaopinItem key={item.companyId} data={item} />
                      })
                    }
                  </LoadWrap>
                </TabPane>
              )
            })
          }
        </Tabs>
      </LoadWrap>
    </div>
  );
}