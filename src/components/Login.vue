<template>
  <h1>登录</h1>
  <router-link to="/">回首页</router-link>
</template>
<script>
export default{
  mounted(){
    // this.$request({
    //   method:'get',
    //   url:'/login',
    //   data:{
    //     name:'我是xiaoli'
    //   }
    // }).then(res=>{
    //   console.log('res---',res)
    // })
    this.$request.get('/login',{name:'xiaollll'}).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
