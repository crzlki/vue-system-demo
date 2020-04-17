<template>
    <div class="login">
        <!-- <div class="loginBox"> -->
        <h2></h2>
        <span>Welcome to my customer system demo</span>
        <div class="inpBox">
            <input type="text" placeholder="username/email/phone" v-model="userName" />
            <input type="text" placeholder="password" v-model="password" />
            <button @click="login">Login</button>
        </div>
        <!-- </div> -->
        <p> This is just a simple demo from my previous job experience,and Not translated entirely,Sorry for that</p>
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
            !this.userName ? alert("Plz type any") : null;
            !this.password ? alert("Plz type any") : null;
            if (this.userName && this.password) {
                axios.post("/user/login", {
                        account: this.userName,
                        password: md5(this.password)
                    })
                    .then(data => {
                        console.log(data)
                      
                        if (data.code === 0) {
                            alert("Success");
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
            background: rgb(68, 141, 224);
        }
    }
    // }
}
</style>