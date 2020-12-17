import React, { useState, Fragment } from 'react';

import Layout from '../../components/Layout';

import './index.less';
import LeftNav from '../../components/LeftNav';
import RightTopNav from '../../components/RightTopNav';

import { navLeftListStu } from '../../assets/constants';

const zhibufengcaiImg1 = require('../../assets/images/branch-img1.jpg');
const zhibufengcaiImg2 = require('../../assets/images/branch-img2.jpg');
const zhibufengcaiImg3 = require('../../assets/images/branch-img3.jpg');
const zhibufengcaiImg4 = require('../../assets/images/branch-img4.jpg');

const rongyulist = [
  {
    img: zhibufengcaiImg1,
    title: '中共东北师范大学委员会授予学生就业指导服务中心党支部“校级先进基层党组织标兵”称号。',
    time: '2016年6月',
  },
  {
    img: zhibufengcaiImg2,
    title: '中共吉林省高校工委授予东北师范大学机关党委就业指导服务中心党支部“先进基层党组织标兵”称号。',
    time: '2016年6月',
  },
  {
    img: zhibufengcaiImg3,
    title: '中共吉林省委授予东北师范大学机关党委就业指导服务中心党支部“吉林省先进基层党组织”称号。',
    time: '2016年7月',
  },
  {
    img: zhibufengcaiImg4,
    title: '东北师范大学机关党委就业指导服务中心党支部入选首批全国党建工作样板支部培育创建单位。',
    time: '2018年12月',
  }
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function BranchZhibufengcai() {

  return (
    <Layout>
      <div className="erji zhibufengcai">
        <LeftNav list={navLeftListStu} />
        
        <div className="right">
          <RightTopNav />
          <div className="rongyu-title">支部荣誉</div>
          <div className="rongyu-list">
            {
              rongyulist.map((item, indexIndex) => {
                return (
                  <div className="rongyu-item">
                    <img src={item.img} alt="" />
                    <div className="rongyu-time">{item.time}</div>
                    <div className="normal-item-title">{item.title}</div>
                  </div>
                )
              })
            }
          </div>

          <div className="rongyu-title">组织结构图</div>
          <img src={'https://qiniu-career-public.huanxizizai.com/party_structure.jpg'} alt="" />


          <div className="rongyu-title gap-top-s">党员风采</div>
          <img src={'https://qiniu-career-public.huanxizizai.com/party_members.jpg'} alt="" />

        </div>
      </div>
    </Layout>
  );
}