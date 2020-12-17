import React, { useState, useEffect, Fragment } from 'react';
import { Pagination, Empty } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';
import StudentSourceItem from '../../components/StudentSourceItem';

import { getParam } from '../../../utils/url';

import {
  getSecInfos,
} from '../../../api/second';

export default function UnitShengyuansulan() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);

  const history = useHistory();

  useEffect(() => {
    getData(page);
  }, [history]);

  const getData = (page) => {
    getSecInfos({
      page,
      pageSize,
      category: 'C030101',
    }).then((res) => {
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
          <div className="shengyuansulan-list">
            {
              list && list.length > 0
                ? (
                  <Fragment>
                    {
                      list.map((item, indexIndex) => {
                        return <StudentSourceItem key={item.infoId} data={item} />
                      })
                    }
                  </Fragment>
                )
                : <Empty />
            }
          </div>
          <Pagination pageSize={pageSize} defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}
