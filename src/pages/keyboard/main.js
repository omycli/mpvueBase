import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '车牌键盘',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#ffffff'
  }
};