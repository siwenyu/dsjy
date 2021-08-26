import React, { useState, useEffect, Fragment } from 'react';
import { Pagination, Empty } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

const zhengqiuyijian = require('../../assets/images/branch-zhengqiuyijian.png');

export default function BranchZhibuhuodong() {
  return (
    <Layout>
      <div className="erji">
        <LeftNav />
        
        <div className="right">
          <RightTopNav />
          <p>欢迎扫码提出你的宝贵意见</p>
          <div className="branch-zhengqiuyijian">
            <img src={zhengqiuyijian} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
