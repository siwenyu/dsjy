import React from 'react';

import Home from './page/Home';
import Student from './page/Student';
import Unit from './page/Unit';
import Branch from './page/Branch';
import About from './page/About';
import Lianmeng from './page/Lianmeng';


// 二级页面列表页
import StuFairs from './page/SecFairs';
import StuXuanjianghui from './page/SecPreaches';
import StuZhaopinxinxi from './page/SecNotices';
import StuJobs from './page/SecJobs';
import StuZhiyefudao from './page/StuZhiyefudao';
import StuShouxubanli from './page/StuShouxubanli';
import StuWeijiuye from './page/StuWeijiuye';
import StuXuexiaoZhuye from './page/StuXuexiaoZhuye';
// import StuShouxuDetail from './page/StuShouxuDetail';
import DetailPreach from './page/DetailPreach';


import NormalDetail from './page/NormalDetail';
import DetailGonggao from './page/DetailGonggao';
import DetailJob from './page/DetailJob';
import DetailNotice from './page/DetailNotice';



import Gonggao from './page/SecGonggao';

// 支部建设
import BranchZhibufengcai from './page/BranchZhibufengcai';
import BranchZhibuhuodong from './page/BranchZhibuhuodong';
import BranchLilunxuexi from './page/BranchLilunxuexi';

// 我是单位
import UnitFabuzhiwei from './page/UnitFabuzhiwei';
import UnitZhaopinxuzhi from './page/UnitZhaopinxuzhi';
import UnitYuanxijieshao from './page/UnitYuanxijieshao';
import UnitChangdijieshao from './page/UnitChangdijieshao';
import UnitShengyuansulan from './page/UnitShengyuansulan';

// 关于我们
import AboutChengyuan from './page/AboutChengyuan';
import AboutUs from './page/AboutUs';

// 详情页
import DetailFair from './page/DetailFair';
// 双选会参会单位展位
import CompanyHomeWithFairs from './page/CompanyHomeWithFairs';

// 合作伙伴
import Partners from './page/Partners';

// 就业指导
import CareerCourse from './page/CareerCourse';
import CareerConsult from './page/CareerConsult';
import CareerZhibo from './page/CareerZhibo';
import CareerActivity from './page/CareerActivity';
import CareerResource from './page/CareerResource';
import CareerTool from './page/CareerTool';
import CareerAdvise from './page/CareerAdvise';

export const routeList = [
    {
      title: '首页',
      path: '/home',
      pageComponent: () => {return <Home />},
      navData: [],
    },
    {
      title: '我是学生',
      path: '/student',
      pageComponent: Student,
      navData: [],
    },
    {
      title: '我是学生',
      path: '/fairs',
      pageComponent: StuFairs,
      navData: ['学生', '双选会'],
    },
    {
      title: '我是学生',
      path: '/xuanjianghui',
      pageComponent: StuXuanjianghui,
      navData: ['学生', '宣讲会'],
    },
    {
      title: '我是学生',
      path: '/zhaopinxinxi',
      pageComponent: StuZhaopinxinxi,
      navData: ['学生', '招聘信息'],
    },
    {
      title: '我是学生',
      path: '/secjobs',
      pageComponent: StuJobs,
      navData: ['学生', '职位信息'],
    },
    {
      title: '我是学生',
      path: '/zhiyefudao',
      pageComponent: StuZhiyefudao,
      navData: ['学生', '职业辅导'],
    },
    {
      title: '我是学生',
      path: '/shouxubanli',
      pageComponent: StuShouxubanli,
      navData: ['学生', '手续办理'],
    },
    {
      title: '我是学生',
      path: '/weijiuye',
      pageComponent: StuWeijiuye,
      navData: ['学生', '微就业'],
    },
    {
      title: '我是学生',
      path: '/detailfair',
      pageComponent: DetailFair,
      navData: ['学生', '双选会', '双选会详情'],
    },
    {
      title: '我是学生',
      path: '/detailpreach',
      pageComponent: DetailPreach,
      navData: ['学生', '宣讲会', '宣讲会详情'],
    },
    {
      title: '我是学生',
      path: '/xuexiaozhuye',
      pageComponent: StuXuexiaoZhuye,
      navData: ['学生', '学校主页'],
    },
    // {
    //   title: '我是学生',
    //   path: '/shouxudetail',
    //   pageComponent: StuShouxuDetail,
    //   navData: ['学生', '手续办理', '详情'],
    // },
    {
      title: '详情',
      path: '/normaldetail',
      pageComponent: NormalDetail,
      navData: ['详情'],
    },
    {
      title: '通知公告',
      path: '/gonggao',
      pageComponent: Gonggao,
      navData: ['通知公告'],
    },
    {
      title: '就业新闻',
      path: '/xinwen',
      pageComponent: Gonggao,
      navData: ['就业新闻'],
    },
    {
      title: '通知公告详情',
      path: '/detailgonggao',
      pageComponent: DetailGonggao,
      navData: [],
    },
    {
      title: '我是学生',
      path: '/detailjob',
      pageComponent: DetailJob,
      navData: ['学生', '职位信息', '职位详情'],
    },
    {
      title: '我是学生',
      path: '/detailnotice',
      pageComponent: DetailNotice,
      navData: ['学生', '招聘信息', '招聘详情'],
    },
    {
      title: '支部建设',
      path: '/branchzhibufengcai',
      pageComponent: BranchZhibufengcai,
      navData: ['支部建设', '支部风采'],
    },
    {
      title: '支部建设',
      path: '/branchzhibuhuodong',
      pageComponent: BranchZhibuhuodong,
      navData: ['支部建设', '支部活动'],
    },
    {
      title: '支部建设',
      path: '/branchlilunxuexi',
      pageComponent: BranchLilunxuexi,
      navData: ['支部建设', '理论学习'],
    },
    {
      title: '我是单位',
      path: '/shengyuansulan',
      pageComponent: UnitShengyuansulan,
      navData: ['我是单位', '生源速览'],
    },
    {
      title: '场地介绍',
      path: '/changdijieshao',
      pageComponent: UnitChangdijieshao,
      navData: ['我是单位', '场地介绍'],
    },
    {
      title: '我是单位',
      path: '/yuanxijieshao',
      pageComponent: UnitYuanxijieshao,
      navData: ['我是单位', '院系介绍'],
    },
    {
      title: '我是单位',
      path: '/zhaopinxuzhi',
      pageComponent: UnitZhaopinxuzhi,
      navData: ['我是单位', '招聘须知'],
    },
    {
      title: '我是单位',
      path: '/fabuzhiwei',
      pageComponent: UnitFabuzhiwei,
      navData: ['我是单位', '发布职位'],
    },
    {
      title: '关于我们',
      path: '/aboutus',
      pageComponent: AboutUs,
      navData: ['关于我们', '中心介绍'],
    },
    {
      title: '成员介绍',
      path: '/aboutchengyuan',
      pageComponent: AboutChengyuan,
      navData: ['关于我们', '成员介绍'],
    },
    {
      title: '就业课程',
      path: '/careercourse',
      pageComponent: CareerCourse,
      navData: ['学生', '职业辅导', '就业课程'],
    },
    {
      title: '个体咨询',
      path: '/careerconsult',
      pageComponent: CareerConsult,
      navData: ['学生', '职业辅导', '个体咨询'],
    },
    {
      title: '就业职播',
      path: '/careerzhibo',
      pageComponent: CareerZhibo,
      navData: ['学生', '职业辅导', '就业职播'],
    },
    {
      title: '指导活动',
      path: '/careeractivity',
      pageComponent: CareerActivity,
      navData: ['学生', '职业辅导', '指导活动'],
    },
    {
      title: '指导资源',
      path: '/careerresource',
      pageComponent: CareerResource,
      navData: ['学生', '职业辅导', '指导资源'],
    },
    {
      title: '指导工具',
      path: '/careertool',
      pageComponent: CareerTool,
      navData: ['学生', '职业辅导', '指导工具'],
    },
    {
      title: '意见建议',
      path: '/careeradvise',
      pageComponent: CareerAdvise,
      navData: ['学生', '职业辅导', '意见建议'],
    },
    {
      title: '合作伙伴',
      path: '/partners',
      pageComponent: Partners,
    },
    {
      title: '招聘详情',
      path: '/companyhomewithfairs',
      pageComponent: CompanyHomeWithFairs,
      navData: ['学生', '双选会', '参会单位'],
    },
  ];