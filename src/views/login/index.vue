<template>
    <div class="login-bg flex-row">
        <Header/>
        <div class="login-dialog flex-col">
            <p>欢迎登录</p>
            <div class="inputbar">
                <input type="text" placeholder="请输入您的用户名">
            </div>
            <div class="inputbar">
                <input type="text" placeholder="请输入您的验证码">
                <span class="code">验证码</span>
            </div>
            <div class="login-btn" @click="login">登录</div>
			<div class="divider">企业微信登录</div>
			<div @click="wxScan" class="qywx">
				<img width=36 src="@/assets/login/qywx.png" alt="">
			</div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'

import './login.css'
export default {
    components:{
        Header
    },
    methods:{
        login(){
            this.$router.push({name:'index'})
        }
    }
}
</script>