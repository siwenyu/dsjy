import React, { useState, Fragment, useEffect } from 'react';
import _ from 'lodash';
import { useHistory, useLocation } from "react-router-dom";

import Layout from '../../components/Layout';

import './index.less';
import HomeMore from '../../components/HomeMore';
import LoadWrap from '../../components/LoadWrap';
import UnitNews from '../../components/UnitNews';
import NormalList from '../../components/NormalList';
import UnitShengyuansulanItem from '../../components/UnitShengyuansulanItem';
import NormalTabList from '../../components/NormalTabList';

import {
  getIndexNews,
} from '../../../api/index';

import {
  getSecInfos,
} from '../../../api/second';

import {
  unitZhaopinTabData,
} from '../../config';

import { unitShengyuansulan, unitYuanxijieshao } from '../../page/constans';

export default function Unit() {
  const history = useHistory();

  const [newsList, setNewsList] = useState([]);
  const [gonggaoList, setGonggaoList] = useState([]);
  const [studentSource, setStudentSource] = useState([]);
  const [xueyuanList, setXueyuanList] = useState([]);

  useEffect(() => {
    getIndexNews({ size: 6, category: 'C010102' }).then((res) => {
      console.log('newsParams');
      console.log(res);
      setGonggaoList(res.data?.infos || []);
    });

    getIndexNews({ size: 4, category: 'C010102' }).then((res) => {
      console.log('newsParams');
      console.log(res);
      setNewsList(res.data?.infos || []);
    });

    getSecInfos({ page: 1, pageSize: 6, category: 'C030101' }).then((res) => {
      if (res.data && res.data.infos) {
        setStudentSource(res.data.infos);
      }
    });

    // 院系介绍
    getSecInfos({ page: 1, pageSize: 30, category: 'C030201' }).then((res) => {
      if (res.data && res.data.infos) {
        const _list = res.data.infos.splice(0, 26);
        setXueyuanList(_list);
      }
    });

  }, [history]);

  return (
    <div className="page unit">
      <Layout>
        <div className="normal-row ">
          <div className="unit-gonggao normal-col normal-card">
            <div className="unit-title">
              <div className="home-title">通知公告</div>
              <HomeMore link={'/gonggao?secLNav=13&category=C010102'}/>
            </div>
            <NormalList pathName="detailgonggao" showNum={6} list={gonggaoList} beforeType={2} hasBefore={true} hasTime={false} />
          </div>
          
          <UnitNews list={newsList} />
        </div>

        {/* 生源速览 */}
        <div className="normal-row gap-top-m">
          <div className="normal-col">
            <div className="unit-shengyuansulan normal-col normal-card">
              <div className="unit-title">
                <div className="home-title">生源速览</div>
                <div className="home-title">
                  <HomeMore link={'/shengyuansulan?headerNav=12&secLNav=13'}/>
                </div>
              </div>
              <div className="normal-row gap-left-m gap-right-m unit-shengyuansulan-list">
                <LoadWrap data={studentSource}>
                  {
                    studentSource.map(e => {
                      return (
                        <UnitShengyuansulanItem key={e.infoId || e.title} data={e} />
                      )
                    })
                  }
                </LoadWrap>
              </div>
              
            </div>
            <div className="unit-zhaopinxuzhi normal-card gap-top-m gap-bottom-m">
              <NormalTabList pathName="normaldetail" hasBefore={true} beforeType={1} showNum={4} hasBefore={true}  tabData={unitZhaopinTabData} />
            </div>
          </div>
          <div className="unit-yuanxijieshao normal-card">
            <div className="unit-title">
              <div className="home-title">院系介绍</div>
              <div className="home-title">
                <HomeMore link="/yuanxijieshao?headerNav=12&secLNav=13" />
              </div>
            </div>
            <div className="unit-yuanxijieshao-list">
              <LoadWrap data={xueyuanList}>
                {
                  xueyuanList.map(e => {
                    return (
                      <div key={e.infoId || e.title} onClick={() => {window.open(`/normaldetail?headerNav=12&secLNav=11&id=${e.infoId}`)}} className="unit-yuanxijieshao-item">
                        <div className="normal-item-title c-line-clamp1 hover-item-nobg">{e.title}</div>
                      </div>
                    )
                  })
                }
              </LoadWrap>
            </div>
          </div>
        </div>

      </Layout>
    </div>
  );
}