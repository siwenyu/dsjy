import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';
import NormalList from '../../components/NormalList';

import { getParam } from '../../../utils/url';

import { getSecInfos } from '../../../api/second';

export default function SecGonggao() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);

  const history = useHistory();

  useEffect(() => {
    getData(page);
  }, [history]);

  const getData = (page) => {
    getSecInfos({ page, pageSize, category: getParam('category') || 'C010101' }).then((res) => {
      console.log('公告列表');
      console.log(res);
      if (res.data) {
        setList(res.data.infos);
        setTotal(res.data.total);
      }
    });
  }

  const onChange = (index) => {
    console.log(index);
    setPage(index);
    getData(index);
  };

  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          <div className="news-list">
            <NormalList pathName={'detailgonggao'} list={list} hasTime={false} hasBefore={true} beforeType={2}/>
          </div>

          <Pagination defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}
