import React, { useState, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import './index.less';

const hot = require('../../assets/images/news-top.png');

export default function ItemYuanxi({
  data
}) {
  const history = useHistory();
  const goPage = (e) => {
    window.open(`/normaldetail?headerNav=12&secLNav=11&id=${data.infoId}`);
  };

  return (
    <div onClick={goPage} className="shouxu-item c-line-clamp1 hover-item-nobg">
      <div className="shouxu-item-icon"></div>
      <span className="c-line-clamp1">{data.title}</span>
    </div>
  );
}