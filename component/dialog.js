// component/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  /**
   * 组件生命周期
   */
  lifetimes:{
    attached: function(){
      //在组件实例进入页面节点树时执行
    },
    deteched:function(){
      //在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件在页面的生命周期
   */

  pageLifetimes: {
    show: function() {
      //页面被展示
    },
    hide: function() {
      //页面被隐藏
    },
    resize: function() {
      //页面尺寸变化
    }
  },
})
