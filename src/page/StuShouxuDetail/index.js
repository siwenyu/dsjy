import React, { useState, Fragment } from 'react';

import Layout from '../../components/Layout';

import './index.less';
import RightTopNav from '../../components/RightTopNav';

export default function StuShouxuDetail() {

  return (
    <Layout>
      <div className="erji erji-shouxu">
        <div className="right">
          <RightTopNav />
          <div className="shouxu-detail">
            <div className="erji-title gap-top-m">就业有位来 —— 吉林医药学院“24365”药学类毕业生线上双选会</div>
            <div className="gap-top-m erji-gray-bg-text">
              <span>2020年5月30日发布</span>
              <span>10万+阅读</span>
            </div>

            <div className="erji-sub-title gap-top-l gap-bottom-m">就业有位来”--吉林医药学院“24365”药学类毕业生线上双选会邀请函</div>

            <div>
            尊敬的用人单位：
            衷心感谢您长期以来对吉林医药学院毕业生就业工作的大力支持！
            为做好疫情期间药学专业毕业生就业服务工作，有效推动就业工作的顺利开展，持续为用人单位和毕业生提供优质服务，药学院特举办“就业有位来”--吉林医药学院“24365”药学类毕业生线上双选会活动。
            现诚邀各用人单位参加本次活动。

            一、时间安排
            报名时间：5月10日-5月20日
            招聘时间：5月21日-5月22日

            二、主办学院
            吉林医药学院药学院

            三、招聘方式
            用人单位参加本次线上招聘活动均需通过“吉林医药学院就业网”进行线上报名。企业可根据实际需求，选择参与“在线双选会”或“云宣讲会”，具体招聘模式及报名方式如下：
            1.在线双选会
            2.云宣讲会
            </div>


            <div className="gap-top-l erji-normal-title gap-bottom-s">相关附件</div>

            <div className="erji-down">
              <a href="" className="erji-sub-title">吉林医药学院2020届毕业生“24365”线上招聘月邀请函.doc</a><br />
              <a href="">吉林医药学院2020届毕业生“24365”线上招聘月邀请函.doc</a>
            </div>

            <br />
            <br />
            <br />
            <br />

          </div>
        </div>
      </div>
    </Layout>
  );
}