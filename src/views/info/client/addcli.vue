<template>
    <div class="addcli">
        <div class="main">
            <li>
                <span>用户名</span>
                <input type="text" v-model="username" />
            </li>
            <li>
                <span>性别</span>
                <input type="radio" value="0" v-model="sex" />男
                <input type="radio" value="1" v-model="sex" />女
            </li>
            <li>
                <span>邮箱</span>
                <input type="text" v-model="email" />
            </li>
            <li>
                <span>电话</span>
                <input type="text" v-model="iphone" />
            </li>
            <li>
                <span>QQ</span>
                <input type="text" v-model="QQ" />
            </li>
            <li>
                <span>微信</span>
                <input type="text" v-model="wechat" />
            </li>
            <li>
                <span>类型</span>
                <select v-model="custval">
                    <option value="重点客户">重点客户</option>
                    <option value="一般客户">一般客户</option>
                    <option value="放弃客户">放弃客户</option>
                </select>
            </li>
            <li>
                <span>客户地址</span>
                <textarea cols="30" rows="10" v-model="desc"></textarea>
            </li>
            <li>
                <button @click="chan">确认提交</button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "addcli",
    data() {
        return {
            customerId: "",
            username: "",
            sex: "",
            email: "",
            iphone: "",
            QQ: "",
            wechat: "",
            custval: "重点客户",
            desc: ""
        };
    },
    methods: {
        chan() {
            if (
                this.username &&
                this.sex &&
                this.email &&
                this.iphone &&
                this.QQ &&
                this.wechat &&
                this.custval
            ) {
                // name=xxx&sex=xxx&email=xxx&phone=xxx&QQ=xxx&weixin=xxx&type=xxx&address=xxx
                //postcustupdate
                if (this.customerId) {
                    this.$store
                        .dispatch("postcustadd", {
                            customerId : this.customerId,
                            name: this.username,
                            sex: this.sex,
                            email: this.email,
                            phone: this.iphone,
                            QQ: this.QQ,
                            weixin: this.wechat,
                            type: this.custval,
                            address: this.desc
                        })
                        .then(data => {
                            console.log(data);
                            alert("修改成功");
                        });
                } else {
                    this.$store
                        .dispatch("postcustadd", {
                            name: this.username,
                            sex: this.sex,
                            email: this.email,
                            phone: this.iphone,
                            QQ: this.QQ,
                            weixin: this.wechat,
                            type: this.custval,
                            address: this.desc
                        })
                        .then(data => {
                            console.log(data);
                            alert("新增成功");
                        });
                }
            } else {
                alert("您有未填项，请填完整再提交");
            }
        }
    },
    mounted() {
        if (this.$route.query.id) {
            this.customerId = this.$route.query.id;
            let obj = {
                customerId: this.$route.query.id
            };
            this.$store.dispatch("getcustinfo", obj).then(data => {
                console.log(data);
                data = data.data;
                (this.username = data.name),
                    (this.sex = data.sex),
                    (this.email = data.email),
                    (this.iphone = data.phone),
                    (this.QQ = data.QQ),
                    (this.wechat = data.weixin),
                    (this.desc = data.address);
            });
        }
    }
};
</script>

<style lang="less" scoped>
.addcli {
    .main {
        width: 450px;
        height: 600px;
        background: chocolate;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        // align-items:center;
        padding-left: 50px;
        span {
            display: inline-block;
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align-last: justify;
            // background:cornflowerblue;
            vertical-align: top;
            margin-right: 20px;
        }
        input[type="text"] {
            width: 200px;
            height: 26px;
        }
        select {
            width: 120px;
            height: 30px;
        }
        li:nth-last-child(1) {
            text-align: center;
            button {
                width: 120px;
                height: 30px;
            }
        }
        textarea {
            height: 120px;
            min-height: 120px;
            max-height: 240px;
        }
    }
}
</style>