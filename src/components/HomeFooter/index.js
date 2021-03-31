import React, { useState, useEffect } from 'react';

import HomeMore from '../HomeMore';
import LoadWrap from '../LoadWrap';

import './index.less';

import { getIndexPartners } from '../../../api/index';

const icon1 = require('../../assets/images/footer-icon1.png');
const icon2 = require('../../assets/images/footer-icon2.png');
const icon3 = require('../../assets/images/footer-icon3.png');
const icon4 = require('../../assets/images/footer-icon4.png');
const icon5 = require('../../assets/images/footer-icon5.png');
const icon6 = require('../../assets/images/footer-icon6.png');
const icon7 = require('../../assets/images/footer-icon7.png');
const icon8 = require('../../assets/images/footer-icon8.png');

const qrcode1 = require('../../assets/images/footer-qrcode1.jpeg');
const qrcode2 = require('../../assets/images/footer-qrcode2.jpeg');

export default function HomeFooter({
  showHuoban, showInfo, partnersSize,
}) {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    getIndexPartners({ size: partnersSize }).then(res => {
      console.log('getIndexPartners');
      console.log(res);
      setPartners(res?.data?.partners || []);
    })
  }, [showHuoban]);

  return (
    <div className="home-footer">
      {
        showHuoban && (
          <div className="home-hezuohuoban">
            <div className="home-hezuohuoban-con">
              <div className="title-line">
                <div className="home-title">合作伙伴</div>
                <HomeMore link="/partners" />
              </div>
              <div className="hezuohuoban-list">
                <LoadWrap data={partners}>
                  {
                    partners.map((item, index) => {
                      return (
                        <div onClick={() => {window.open(item.url)}} key={item.picture.url} className="hezuohuoban-item-wrap">
                          <div style={{backgroundImage: `url(${item.picture.url})`}} className="hezuohuoban-item">
                          </div>
                        </div>
                      )
                    })
                  }
                </LoadWrap>
              </div>
            </div>
          </div>
        )
      }
      

      {
        showInfo && (
          <div className="home-info">
            <div className="left-bg" />
            <div className="right-bg" />
            <div className="info-left">
              <div className="inf-left-con">
              <div className="info-title">东北师范大学学生就业指导服务中心</div>
                <div className="info-list">
                  <div className="info-icon">
                    <img alt="" src={icon1} />
                  </div>
                  <div className="info-text">
                  办公时间：周一至周五 8:00-11:30 13:30-17:00 (节假日除外)
                  </div>
                </div>
                <div className="info-list">
                  <div className="info-icon">
                    <img alt="" src={icon2} />
                  </div>
                  <div className="info-text">
                  电话：400-998-7757
                  </div>
                </div>
                <div className="info-list">
                  <div className="info-icon">
                    <img alt="" src={icon3} />
                  </div>
                  <div className="info-text">
                  传真：0431-85684168
                  </div>
                </div>
                <div className="info-list">
                  <div className="info-icon">
                    <img alt="" src={icon4} />
                  </div>
                  <div className="info-text">
                  邮箱：bys85098857@163.com
                  </div>
                </div>
                <div className="info-list">
                  <div className="info-icon">
                    <img alt="" src={icon5} />
                  </div>
                  <div className="info-text">
                  邮编：130024
                  </div>
                </div>
                <div className="info-list">
                  <div className="info-icon">
                    <img alt="" src={icon6} />
                  </div>
                  <div className="info-text">
                  地址：吉林省长春市人民大街5268号
                  </div>
                </div>
              </div>
            </div>
            <div className="info-right">
              <div className="inf-right-con">
                <div className="info-title">扫码关注获取更多就业信息</div>
                <div className="footer-qrcode">
                  <img src={qrcode1} />
                  <img src={qrcode2} />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}