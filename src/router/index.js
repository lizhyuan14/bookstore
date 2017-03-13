import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import List from '../components/List'
import AboutMe from '../components/AboutMe'

Vue.use(Router)
/***
 * 在路由中通过query传值的时候直接在地址后面加?即可
 * 通过params传值的时候需要在路由中做配置
 * 如:
 *  {
      path: '/about_me:/k',
      component : AboutMe
    }
 */
export default new Router({
  routes: [
    {
      path: '/', //路由路径
      // name: 'Home', //路由别名
      component : Home //对应的组件
    },
    {
      path: '/list',
      component : List
    },
    {
      path: '/about_me',
      component : AboutMe
    }
  ]
})
