<template>
  <div class="login">
    <mt-header title="用户登录" class="header">
      <mt-button slot="left" icon="back" @click="$router.back()">返回</mt-button>
    </mt-header>
    <div class="from">
      <div class="inp">
        <input type="text" v-model.trim="user.userName" placeholder="用户名\邮箱\手机号" @input="input">
      </div>
      <div class="inp">
        <input type="password" v-model.trim="user.password" placeholder="密码" @input="input">
      </div>
      <div class="inp btn">
        <mt-button size="large" :disabled="btnStarus">登录</mt-button>
      </div>
      <div class="inp btn reg-btn">
        <mt-button size="large" @click.stop="loginOneStep">{{loginOneStepText}}</mt-button>
      </div>
      <div class="reg-content">
        <span>短信验证码登录</span>
        <span>手机快速注册</span>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span class="border"></span>
        <span class="text">其他登录方式</span>
        <span class="border"></span>
      </div>
      <div class="imgs">
        <div>
          <i class="icon-qq"></i>
          <p>QQ</p>
        </div>
        <div>
          <i class="icon-wx"></i>
          <p>微信</p>
        </div>
      </div>
      <div class="agreement-tips">
        <p>
          登录即代表您已同意
          <span>车友汇隐私政策</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      btnStarus: true,
      loginOneStepText: "一键登录"
    };
  },
  watch: {},
  methods: {
    input() {
      if (this.user.userName && this.user.password) {
        this.btnStarus = false;
      } else {
        this.btnStarus = true;
      }
    },
    loginOneStep() {
      this.loginOneStepText = "正在拉起手机车友汇APP...";
      this.timer = setTimeout(() => {
        Toast({
          message: "使用此功能，请安装最新版车友汇APP",
          duration: 3000
        });
        this.loginOneStepText = "一键登录";
      }, 2000);
    }
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
};
</script>

<style scoped lang="less">
@import url("../assets/styles/login.less");
</style>