/*
 * @Description: apple AirPods Pro Animation Imitation
 * @Author: Flcwl
 * @Date: 2019-11-02 14:56:38
 * @LastEditTime: 2019-11-03 19:51:47
 * @LastEditors: Flcwl
 * @github: https://github.com/Flcwl/Apple-Animation
 */
var canvas = document.getElementById('02-head-bob-turn'),
context = canvas.getContext('2d'),
image = new Image();

image.onload = function() {
var w = this.width,
  h = this.height;

canvas.width = w;
canvas.height = h;
context.drawImage(this, 0, 0, w, h);
context.fillText('Mood', 163, 191); 
}

image.src = 'img/0000.png';
// import '/style.scss';
// https://github.com/parcel-bundler/parcel/issues/1668
// import images from '../images/*.jpg';
const srcDir =  'img/';
const imgSuffix = '.png';

// console.log('Hello AirPods-Pro!');

var appleAirPodsPro = {
  init() {
    this.initData();
    this.initImages();
    this.handleResize();
    this.bindEvents();
  },

  initData() {
    this.canvas2 = document.getElementById('02-head-bob-turn');
    this.context = this.canvas2.getContext('2d');
    this.MAX_LEN = 601;
    this.imgs = [];
    this.start = 1;
    this.oldStart = -1;
    this.addN = 1;
    this.interval = 32; // 控制刷新率20
    this.leftY = 0;
    this.curScrollY = this.getScrollTop();
    this.startPos = this.curScrollY;
    this.lastPos = this.curScrollY;
    this.isStop = false;
  },
// 初始化时加载黑人动画所有帧，并保存在 `this.imgs` 中
  initImages() {
    for (let i = 0; i < this.MAX_LEN; i++) {
      const img = new Image();
      // img.onload = () => this.imgs[i] = img
      img.src = this.getImage(i);
      // 不管加載否 保證順序
      this.imgs.push(img);
    }
  },

  bindEvents() {
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('scroll', () => this.handleScroll());
  },

  getScrollTop() {
    return window.scrollY || 0;
  },

  getImage(num) {
    console.assert(Number.isInteger(num) && num > -1 && num < this.MAX_LEN);
    const t = ('' + num).padStart(4, '0');

    return srcDir + t + imgSuffix;
  },

  isOver() {
    return this.start < 0 || this.start > this.MAX_LEN - 1;
  },

  handleScroll() {
    const scrollY = this.getScrollTop();
    let delta = scrollY - this.curScrollY;
    const isDown = delta > 0;

    delta = Math.abs(delta) + this.leftY;
    this.curScrollY = scrollY;
    // isStop 動畫恢復標誌設置
    if (
      this.isStop &&
      isDown === this.needDown &&
      ((isDown && this.curScrollY > this.lastPos) || (!isDown && this.curScrollY < this.lastPos))
    ) {
      this.isStop = false;
    }
    if (this.isStop) return;

    // good idea: 補償
    const alpha = Math.floor(delta / this.interval) * this.addN || 0;
    this.leftY = delta % this.interval;

    isDown ? (this.start += alpha) : (this.start -= alpha);
    //動畫結束標誌設置
    // isOver：帧数不在范围内返回true
    if (this.isOver() && !this.isStop) {
      // this.lastPos = scrollY
      this.isStop = true;
      console.log(this.start, scrollY, this.lastPos);

      // TODO: 多個 canvas 用 opacity 切換
      // this.canvas2.style.cssText = `opacity: 0;`
    }

    if (this.start < 0) this.start = 0;
    if (this.start > this.MAX_LEN - 1) this.start = this.MAX_LEN - 1;
    if (this.startPos >= scrollY) this.start = 1;
    if (this.oldStart === this.start) return;
    this.oldStart = this.start;
    // good idea：記錄
    this.lastPos = scrollY;
    this.needDown = !isDown;

    this.drawCanvas(this.start);
  },

  handleResize() {
    // const wScale = window.innerWidth / (this.canvas2.width || 1458);
    // const hScale = (window.innerHeight) / (this.canvas2.height || 1458);

    // this.canvas2.style.transform = `matrix(${wScale}, 0, 0, ${hScale}, 0, 0)`;
  },

  drawCanvas(sequence) {
    // 當前序列幀
    const imgTemp = this.imgs[sequence];
    const canvas = this.canvas2;

    canvas.width = imgTemp.width;
    canvas.height = imgTemp.height;

    this.context.drawImage(imgTemp, 0, 0);
  },
};

appleAirPodsPro.init();

$(function(){ 
  $(".scroll-sequence").addClass("FadeIn") /* 動畫盡量用CSS3做 */
  $("#slide0").addClass("FadeIn") /* 動畫盡量用CSS3做 */

  var jarallax
  init = function () {
    jarallax = new Jarallax(new ControllerScroll(true));
    var currentProgress = 0;
    var progressSteps = 1 / 5;

    jarallax.setDefault('section', { opacity: 0 })

    jarallax.addAnimation('#slide0', [
    { progress: '0', opacity: '1', top: '0%' },
    { progress: '10', opacity: '0', top: '-20%' },
    { progress: '100%', opacity: '0', top: '-20%' }]);

    var animation = jarallax.addAnimation('#slide1', [
    { progress: '0', opacity: '0', top: '59%'  },
    { progress: '5', opacity: '0', top: '60%' },
    { progress: '8', opacity: '1', top: '48%' },
    { progress: '10', opacity: '1', top: '45%' },
    { progress: '12', opacity: '1', top: '42%' },
    { progress: '15', opacity: '0', top: '30%' },
    { progress: '20', opacity: '0', top: '-20%' }]);

    jarallax.cloneAnimation('#slide2', { progress: '+10' }, animation);
    jarallax.cloneAnimation('#slide3', { progress: '+20' }, animation);
    jarallax.cloneAnimation('#slide4', { progress: '+30' }, animation);
    jarallax.cloneAnimation('#slide5', { progress: '+40' }, animation);
    jarallax.cloneAnimation('#slide6', { progress: '+50' }, animation);
    jarallax.cloneAnimation('#slide7', { progress: '+60' }, animation);
    jarallax.cloneAnimation('#slide8', { progress: '+70' }, animation);
    jarallax.cloneAnimation('#slide9', { progress: '+80' }, animation);
    jarallax.cloneAnimation('#slide10', { progress: '+90' }, animation);
  }

});



