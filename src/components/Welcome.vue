<template>
  <h1>欢迎</h1>
  <el-button @click="goLogin">去登录</el-button>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function goLogin() {
      router.push("/login");
    }
    return {
      goLogin
    }
  },
};

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
