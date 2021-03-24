import React, { useState, useEffect, Fragment } from 'react';
import { Pagination, Empty } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';
import ItemNews from '../../components/ItemNews';

import { getParam } from '../../../utils/url';

import { getSecInfos } from '../../../api/second';

export default function BranchLilunxuexi() {

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
      category: 'C040201',
    }).then((res) => {
      console.log('理论学习');
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
          <div className="branch-lilun-list">
            {
              list && list.length > 0
                ? (
                  <Fragment>
                    {
                      list.map((item, indexIndex) => {
                        return <ItemNews
                          onClick={() => window.open(`/normaldetail?id=${item.infoId}&secRNav=23&headerNav=13`)}
                          pathName="normaldetail"
                          hasTime={false}
                          hasHover={true}
                          key={item.title}
                          hasBefore={true}
                          hasTimeAfter={true}
                          beforeType={2}
                          data={item}
                        />
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
