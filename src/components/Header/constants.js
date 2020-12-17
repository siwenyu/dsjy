import { navLeftListStu, navLeftListUnit, navLeftListBranch } from '../../assets/constants';
export const loginType = [
  {
    text: '学生',
    color: '#FFAB11',
    type: 1,
    icon: require('../../assets/images/student-icon.png'),
    link: 'http://careers.nenu.edu.cn/login/student',
  },
  {
    text: '老师',
    color: '#FF6E11',
    type: 1,
    icon: require('../../assets/images/teacher-icon.png'),
    link: 'http://careers.nenu.edu.cn/login/teacher',
  },
  {
    text: '单位',
    color: '#0091FF',
    type: 1,
    icon: require('../../assets/images/business-icon.png'),
    link: 'http://careers.nenu.edu.cn/login/company',
  }
];
  
export const navList = [
  {
    text: '首页',
    isActive: true,
    list: [],
    path: '/home'
  },
  {
    text: '我是学生',
    isActive: false,
    list: navLeftListStu,
    path: '/student?headerNav=11'
  },
  {
    text: '我是单位',
    isActive: false,
    list: navLeftListUnit,
    path: '/unit?headerNav=12'
  },
  {
    text: '支部建设',
    isActive: false,
    list: navLeftListBranch,
    path: '/branchzhibufengcai?headerNav=13&secLNav=14'
  },
  {
    text: '关于我们',
    isActive: false,
    list: [],
    path: '/aboutus?headerNav=14&secLNav=16'
  },
  {
    text: '东师高师就业联盟网',
    isActive: false,
    list: [],
    path: 'http://union.nenu.edu.cn/',
  },
]

// 显示二级
export const showSubNav = [
  
]