<template>
    <div class="container">
        <!--<h3>ListPage</h3>-->
        <div class="row">
            <div v-for="book in books" class="img-thumbnail col-md-4 col-sm-6 col-xs-12 book">
                <img :src="book.img" class="thumbnail" :alt="book.title">
                <h5>{{book.title}}</h5>
                <attr>{{book.author}}</attr>
            </div>
        </div>
        <button type="button" class="btn btn-success btn-block load-more" :disabled="this.pageIndex == this.pageCount" @click="loadMore()">{{this.pageIndex == this.pageCount?"没有更多数据":"加载更多"}}</button>
    </div>
</template>
<script>
import api from '../services/api'//引入读取数据的api接口代码
    export default{
        data(){
            return{
                type:'',
                books:[],
                pageIndex:1,
                pageCount:0
            }
        },
        created(){
            // console.log(this.$route.query.type)
            this.type = this.$route.query.type//从url中获取分类数据
        },
        watch:{
            $route:function(){//监听路由地址的变化
                // console.log(this.$route)
                // console.log(this.$route.query.type)
                this.type = this.$route.query.type
            },
            type:function(){//分类信息改变之后触发
                console.log('分类信息已经改变,需要重新获取数据')
                this.books = []
                this.pageIndex = 1
                this.pageCount = 0
                this.getGataFromApi()
            }
        },
        methods:{
            //调用api获取数据
            getGataFromApi:function(){
                // var vue = this
                if(this.pageIndex == this.pageCount){
                    console.log('数据加载完毕')
                    return
                }
                api.getData(this.type,this.pageIndex,function(res){
                    this.pageCount = res.pageCount
                    this.books = this.books.concat(res.res)//数组拼接
                }.bind(this))
            },
            loadMore:function(){
                this.pageIndex += 1
                this.getGataFromApi()
            }
        }
    }
</script>
<style>
    .book{
        text-align: center;
        min-height: 280px;
    }
    .book img{
        display: inline-block;
    }
    .load-more{
        margin-top:5px;
    }
</style>