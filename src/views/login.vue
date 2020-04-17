<template>
    <div class="login">
        <!-- <div class="loginBox"> -->
        <h2></h2>
        <span>为保护企业的数据安全，请妥善保管密码</span>
        <div class="inpBox">
            <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model="userName" />
            <input type="text" placeholder="请输入登录密码" v-model="password" />
            <button @click="login">登陆</button>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";
export default {
    name: "login",
    data() {
        return {
            userName: "",
            password: ""
        };
    },
    methods: {
        login() {
            !this.userName ? alert("用户名不能为空") : null;
            !this.password ? alert("登录密码不能为空") : null;
            if (this.userName && this.password) {
                axios.post("/user/login", {
                        account: this.userName,
                        password: md5(this.password)
                    })
                    .then(data => {
                        console.log(data)
                        // data = data.data;
                        if (data.code === 0) {
                            alert("登录成功");
                            localStorage.setItem("power",data.power);
                            console.log(localStorage)
                            this.$router.push("/info");
                        } else {
                            alert("用户名密码不匹配");
                        }
                    });
            }
        }
    }
};
</script>

<style lang="less" scoped>
.login {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 260px;
    // background: red;
    transform: translate(-50%, -50%);
    text-align: center;
    span {
        line-height: 300%;
    }
    // .loginBox {
    .inpBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        // align-content:flex-end;
        justify-content: space-around;
        height: 180px;
        border: 1px solid black;
        background: rgb(252, 252, 252);
        input {
            width: 300px;
            height: 30px;
        }
        button {
            width: 300px;
            height: 30px;
            background: rgb(74, 144, 224);
        }
    }
    // }
}
</style>