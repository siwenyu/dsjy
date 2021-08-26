import React, { useEffect, useState } from 'react';

import LoadWrap from '../LoadWrap';
import ShouxuItem from '../ItemShouxu';

import './index.less';

import { shouxuList } from '../../page/constans';
import HomeMore from '../HomeMore';

import { getSecInfos } from '../../../api/second';

const icon = require('../../assets/images/jiuye-tool-iocn.png');

export default function Homeshouxu({
  // newsList
}) {
  const [list, setList] = useState([]);
  useEffect(() => {
    getSecInfos({ page: 1, pageSize: 8, category: 'C020101' }).then((res) => {
      console.log('手续办理');
      console.log(res);
      if (res.data) {
        setList(res.data.infos);
        // setTotal(res.data.total);
      }
    });
  }, []);
  return (
    <div className="home-shouxu normal-card">
      <div className="shouxu-title">
        <div className="home-title">
          手续办理
        </div>
        <HomeMore link={`/shouxubanli?secLNav=11&headerNav=11`} />
      </div>
      <LoadWrap data={list}>
        <div >
          {
            list.map((e, index) => {
              return (
                <ShouxuItem data={e} key={e.infoId || e.title} />
              )
            })
          }
        </div>
      </LoadWrap>
    </div>
  );
}