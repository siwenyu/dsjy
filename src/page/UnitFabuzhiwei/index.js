import React, { useState, Fragment } from 'react';
import { Pagination } from 'antd';

import Layout from '../../components/Layout';
import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';


export default function UnitFabuzhiwei() {
  return (
    <Layout>
      <div className="erji">
        <LeftNav  />
        
        <div className="right">
          <RightTopNav />
          发布职位

          <Pagination defaultCurrent={1} total={500} showSizeChanger={false} />
        </div>
      </div>
    </Layout>
  );
}