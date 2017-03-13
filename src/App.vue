<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--在router-view节点中会渲染当前路由地址中指定的组件信息-->
    <nav class="navbar navbar-inverse">
      <!--<a class="navbar-brand" href="#">book-shop</a>-->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">book-shop</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li :class="{'active':$route.path=='/'}">
            <a href="#/">首页</a>
          </li>
          <li :class="{'active':$route.path=='/about_me'}">
            <a href="#/about_me">关于我</a>
          </li>
          <li class="dropdown" :class="{'active':$route.path=='/list'}">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">书籍分类<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#/list?type=ertong">儿童</a></li>
              <li><a href="#/list?type=jingji">经济</a></li>
              <li><a href="#/list?type=lishi">历史</a></li>
              <li><a href="#/list?type=qingchunwenxue">青春文学</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      console.log('组件初始化完成!')
      console.log($.fn.jquery)
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>