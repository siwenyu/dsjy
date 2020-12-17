import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Layout from '../../components/Layout';

import HomeNews from '../../components/HomeNews';
import HomePreach from '../../components/HomePreach';
import HomeFairs from '../../components/HomeFairs';
import HomeZhaopin from '../../components/HomeZhaopin';
import HomeZhiwei from '../../components/HomeZhiwei';
import HomeStuPass from '../../components/HomeStuPass';
import CalendarWrap from '../../components/CalendarWrap';
import HomeShouxu from '../../components/HomeShouxu';
import HomeAq from '../../components/HomeAq';

import {
  getIndexNews,
  getIndexFairs,
  getIndexJobs,
  getIndexNotices,
  getIndexPreaches,
} from '../../../api/index';


import {
  tabDataIndexFairsConfig,
  // tabDataIndexPreachesConfig,
  tabDataIndexIndexFairsConfig,
  tabDataIndexJobsConfig,
  tabDataIndexNoticesConfig,
} from '../../config';

import './index.less';

export default function Home() {
  const history = useHistory();

  const [indexNewsList, setIndexNewsList] = useState([]);

  // 双选会
  const [tabDataIndexFairs0, setTabDataIndexFairs0] = useState(null);
  // const [tabDataIndexFairs1, setTabDataIndexFairs1] = useState(null);

  // 宣讲会
  const [tabDataIndexPreaches0, setTabDataIndexPreaches0] = useState(null);
  // const [tabDataIndexPreaches1, setTabDataIndexPreaches1] = useState(null);

  // 职位
  const [tabDataIndexJobs0, setTabDataIndexJobs0] = useState(null);
  const [tabDataIndexJobs1, setTabDataIndexJobs1] = useState(null);

  // 招聘信息
  const [tabDataIndexNotices0, setTabDataIndexNotices0] = useState(null);
  const [tabDataIndexNotices1, setTabDataIndexNotices1] = useState(null);
  
  // 获取数据
  useEffect(() => {
    // 新闻
    const newsParams = {
      size: 6
    };
    getIndexNews(newsParams).then((res) => {
      console.log('newsParams');
      console.log(res);
      setIndexNewsList(res.data?.infos || []);
    });

    initData();

  }, [history]);
  
  const initData = () => {
    // 双选会，线上
    const fairsParamsOnline = {
      size: 6,
      mode: 'ONLINE',
    };
    // getIndexFairs(fairsParamsOnline).then((res) => {
    //   if (res.data && res.data.fairs) {
    //     setTabDataIndexFairs1(res.data.fairs);
    //   }
    // });

    // 双选会
    const fairsParamsOffline = {
      size: 6,
      mode: '',
    };
    getIndexFairs(fairsParamsOffline).then((res) => {
      if (res.data && res.data.fairs) {
        setTabDataIndexFairs0(res.data.fairs);
      }
    });

    // 宣讲会
    const preachesParamsOffline = {
      size: 6,
      mode: '',
    };
    getIndexPreaches(preachesParamsOffline).then((res) => {
      if (res.data && res.data.preaches) {
        setTabDataIndexPreaches0(res.data.preaches);
      }
    });

    // 宣讲会、线上
    // const preachesParamsOnline = {
    //   size: 6,
    //   mode: 'ONLINE',
    // };
    // getIndexPreaches(preachesParamsOnline).then((res) => {
    //   if (res.data && res.data.preaches) {
    //     setTabDataIndexPreaches1(res.data.preaches);
    //   }
    // });

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
  }
  
  return (
    <div className="page home">
      <Layout>
        {/* banner */}
        <div className="normal-row">
          {/* 新闻公告 */}
          <HomeNews list={indexNewsList}/>

          <div className="home-rili gap-top-m normal-col normal-card">
            <div className="home-title">招聘日历</div>
            <CalendarWrap />
          </div>
        </div>

        {/* 双选会 */}
        <div className="normal-row">
          <div className="">
            {
              (tabDataIndexFairs0 || tabDataIndexPreaches0)
              && (
                <HomeFairs list0={tabDataIndexPreaches0} list1={tabDataIndexFairs0} data={tabDataIndexIndexFairsConfig} />
              )
            }
          </div>
          <div>
            <HomeStuPass />
          </div>
        </div>

        {/* 宣讲会 */}
        {/* {
          (tabDataIndexPreaches0 || tabDataIndexPreaches1)
          && (
            <HomePreach list0={tabDataIndexPreaches0} list1={tabDataIndexPreaches1} data={tabDataIndexPreachesConfig} />
          )
        } */}

        

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
        {/* 学生快速通道 */}

        {/* 求职工具 */}
        {/* 手续办理 */}
        {/* 常见问题 */}
        {/* <div className="normal-row">
          <HomeTools />
          <HomeShouxu />
          <HomeAq />
        </div> */}
      </Layout>
    </div>
  );
}