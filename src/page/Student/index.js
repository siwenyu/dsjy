import React, { useState, Fragment, useEffect } from 'react';
import { Calendar, message } from 'antd';
import Slider from "react-slick";
import { RightOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";

import Layout from '../../components/Layout';
import HomePreach from '../../components/HomePreach';

import './index.less';
import HomeMore from '../../components/HomeMore';
import HomeZhiwei from '../../components/HomeZhiwei';
import HomeZhaopin from '../../components/HomeZhaopin';
import CalendarWrap from '../../components/CalendarWrap';
import LoadWrap from '../../components/LoadWrap';

import { stuPrizeList } from '../constans';
import HomePass from '../../components/HomePass';
import ItemDown from '../../components/ItemDown';
import HomeShouxu from '../../components/HomeShouxu';
import HomeAq from '../../components/HomeAq';

// import { downList } from '../constans';

import {
  tabDataIndexPreachesConfig,
  tabDataIndexJobsConfig,
  tabDataIndexNoticesConfig,
} from '../../config';

import {
  getIndexNews,
  getIndexJobs,
  getIndexNotices,
  getIndexPreaches,
} from '../../../api/index';
import {
  getSecInfos,
} from '../../../api/second';

const downIcon = require('../../assets/images/normal-down.png');

const fourtool1 = require('../../assets/images/stu-fourtool1.png');
const fourtool2 = require('../../assets/images/stu-fourtool2.png');
const fourtool3 = require('../../assets/images/stu-fourtool3.png');
const fourtool4 = require('../../assets/images/stu-fourtool4.png');

const fourTools = [
  {
    text: '个体咨询',
    icon: fourtool1,
    link: ''
  },
  {
    text: '签约平台',
    icon: fourtool2,
    link: 'http://careers.nenu.edu.cn/login/student',
  },
  {
    text: '职业测评',
    icon: fourtool3,
    link: '',
  },
  {
    text: '就业资源',
    icon: fourtool4,
    link: ''
  },
]

export default function Student() {
  const history = useHistory();

  const [news, setNews] = useState({});

  // 宣讲会
  const [tabDataIndexPreaches0, setTabDataIndexPreaches0] = useState(null);
  const [tabDataIndexPreaches1, setTabDataIndexPreaches1] = useState(null);

  // 职位
  const [tabDataIndexJobs0, setTabDataIndexJobs0] = useState(null);
  const [tabDataIndexJobs1, setTabDataIndexJobs1] = useState(null);

  // 招聘信息
  const [tabDataIndexNotices0, setTabDataIndexNotices0] = useState(null);
  const [tabDataIndexNotices1, setTabDataIndexNotices1] = useState(null);

  // 下载
  const [downList, setDownList] = useState(null);

  // 获取数据
  useEffect(() => {
    initData();
  }, [history]);

  const initData = () => {
    // 宣讲会、线下
    getIndexNews({ size: 1 }).then(res => {
      console.log('getIndexNews');
      console.log(res);
      setNews(res.data?.infos[0] || {});
    })
    // 宣讲会、线下
    const preachesParamsOffline = {
      size: 8,
      mode: 'OFFLINE',
    };
    getIndexPreaches(preachesParamsOffline).then((res) => {
      if (res.data && res.data.preaches) {
        setTabDataIndexPreaches0(res.data.preaches);
      }
    });

    // 宣讲会、线上
    const preachesParamsOnline = {
      size: 8,
      mode: 'ONLINE',
    };
    getIndexPreaches(preachesParamsOnline).then((res) => {
      if (res.data && res.data.preaches) {
        setTabDataIndexPreaches1(res.data.preaches);
      }
    });

    // 招聘职位，教育类
    const jobsParamsNormal = {
      size: 12,
      normal: true,
    };
    getIndexJobs(jobsParamsNormal).then((res) => {
      if (res.data && res.data.jobs) {
        setTabDataIndexJobs0(res.data.jobs);
      }
    });

    // 招聘职位，非教育类
    const jobsParamsNotNormal = {
      size: 12,
      normal: false,
    };
    getIndexJobs(jobsParamsNotNormal).then((res) => {
      if (res.data && res.data.jobs) {
        setTabDataIndexJobs1(res.data.jobs);
      }
    });

    // 招聘信息，教育类
    const noticesParamsNormal = {
      size: 8,
      normal: true,
    };
    getIndexNotices(noticesParamsNormal).then((res) => {
      if (res.data && res.data.notices) {
        setTabDataIndexNotices0(res.data.notices);
      }
    });

    // 招聘信息，非教育类
    const noticesParamsNotnormal = {
      size: 8,
      normal: false,
    };
    getIndexNotices(noticesParamsNotnormal).then((res) => {
      if (res.data && res.data.notices) {
        setTabDataIndexNotices1(res.data.notices);
      }
    });

    // 下载
    getSecInfos({ page: 1, pageSize: 6, category: 'C020301' }).then((res) => {
      if (res.data && res.data.infos) {
        setDownList(res.data.infos);
      }
    });

  };

  // 小工具点击
  const handleToolClick = (e) => {
    if (e.link) {
      window.open(e.link);
    } else {
      message.info('功能建设中，敬请期待~~~');
    }
  }

  return (
    <div className="page stu">
      <Layout>
        {/* 宣讲会 */}
        <div className="stu-xuanjiang">
          {/* 宣讲会 */}
          {
            <HomePreach showNum="4" list0={tabDataIndexPreaches0} list1={tabDataIndexPreaches1} data={tabDataIndexPreachesConfig} />
          }
          {/* <HomePreach showNum="4" /> */}
          {/* 通知公告 */}
          <div className="stu-gonggao normal-card" onClick={() => {window.open(`/detailgonggao?id=${news.infoId}&secRNav=20`)}}>
            <div>
              <div className="home-title">通知公告 <div className="icon"></div></div>
              <span className="title c-line-clamp1"> {news.title}</span>
              <span className="time">{news.publishDate}</span>
            </div>
          </div>
        </div>

        {/* 日历 */}
        <div className="stu-rili home-rili">
          <div className="stu-rili-item">
            <div className="home-title">日历</div>
            <CalendarWrap />
          </div>
          
          {/* 讲座活动 */}
          {/* <div className="stu-jiangzuo">
            <div className="title-line">
              <div className="">
                <img alt="" className="icon" src={stuJiangzuo} />
                讲座活动
              </div>
              <HomeMore link="" />
            </div>
            <img alt="" className="stu-banner" src={stuJiangzuoBanner} />

            <div>第18期&nbsp;制造业专场干货分享</div>
          </div> */}

          {/* 学生4个小工具 */}
          <div className="stu-fourtools normal-card">
            {
              fourTools.map(e => {
                return <div key={e.text} onClick={() => handleToolClick(e)} className="fourtool-item">
                  <div className="tool-icon">
                    <img src={e.icon} alt="" />
                  </div>
                  <div className="tool-text gap-top-s">
                    {e.text}
                  </div>
                </div>
              })
            }
          </div>

        </div>

        {/* 招聘信息 */}
        {
          tabDataIndexNotices0 && tabDataIndexNotices1
          && (
            <HomeZhaopin list0={tabDataIndexNotices0} list1={tabDataIndexNotices1} data={tabDataIndexNoticesConfig} />
          )
        }

        {/* 招聘职位 */}
        {
          (tabDataIndexJobs0 || tabDataIndexJobs1)
          && (
            <HomeZhiwei list0={tabDataIndexJobs0} list1={tabDataIndexJobs1} data={tabDataIndexJobsConfig} />
          )
        }

        {/* 求职技巧 */}
        {/* <div>
          <StuSkill showNum={6} />

          <div className="stu-prize">
            <div className="home-title">就业课程</div>
            <div>
              {
                stuPrizeList.map((e) => {
                  return (
                    <div key={Math.random()}>
                      <div className="prize-item" onClick={() => {window.open(e.link)}}>
                        <img alt="" className="img" src={e.img} />
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div> */}

        {/* 快速通道 */}
        {/* <HomePass /> */}


        {/* 工具，手续，问答 */}
        {/* <HomeTools></HomeTools> */}

        <div className="normal-row">
          {/* <HomeTools /> */}
          <HomeShouxu />
          <HomeAq />
        </div>

        {/* 常用下载 */}
        {
          downList && (
            <div className="stu-down normal-card">
              <div className="home-title">
                <img alt="" src={downIcon} />
                常用下载
              </div>
              <LoadWrap data={downList}>
                <div className="down-list">
                  {
                    downList.map(e => {
                      return <ItemDown key={e.title} data={e} />
                    })
                  }
                </div>
              </LoadWrap>
            </div>
          )
        }
        

      </Layout>
    </div>
  );
}