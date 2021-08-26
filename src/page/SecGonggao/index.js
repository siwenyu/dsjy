import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
import { Input, Space } from 'antd';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';
import NormalList from '../../components/NormalList';

import { getParam } from '../../../utils/url';

import { getSecInfos } from '../../../api/second';

const { Search } = Input;

export default function SecGonggao() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const [inputValue, setInputValue] = useState('');


  const history = useHistory();

  useEffect(() => {
    const _params = {
      page,
      pageSize,
      category: getParam('category') || 'C010101',
    };
    getData(_params);
  }, [history]);

  const onSearch = (value) => {
    const _params = {
      page,
      pageSize,
      category: getParam('category') || 'C010101',
    };
    if (inputValue) {
      _params.title = inputValue;
    }
    console.log();
    getData(_params);
  };

  const getData = (params) => {
    getSecInfos(params).then((res) => {
      console.log('公告列表');
      console.log(res);
      if (res.data) {
        setList(res.data.infos);
        setTotal(res.data.total);
      }
    });
  }

  const onChange = (index) => {
    setPage(index);
    const _params = {
      page: index,
      pageSize,
      category: getParam('category') || 'C010101',
    };
    if (inputValue) {
      _params.title = inputValue;
    }
    getData(_params);
  };

  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          <div className="news-list">
            <Search
              style={{ width: 400, marginLeft: 38 }}
              value={inputValue}
              placeholder="搜索标题"
              onSearch={onSearch}
              enterButton
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <br />
            <br />
            <NormalList showNum={10} pathName={'detailgonggao'} list={list} hasTime={false} hasBefore={true} beforeType={2}/>
          </div>

          <Pagination defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}
