<template>
    <div class="adduser">
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
                <span>部门</span>
                <select v-model="depval">
                    <option v-for="(item,index) in dep" :value="item.id" :key="index">{{item.name}}</option>
                </select>
            </li>
            <li>
                <span>职务</span>
                <select v-model="jobval">
                    <option v-for="(item,index) in job" :value="item.id" :key="index">{{item.name}}</option>
                </select>
            </li>
            <li>
                <span>自我介绍</span>
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
    name: "adduser",
    data() {
        return {
            userId:'',
            username: "",
            sex: "",
            email: "",
            iphone: "",
            depval: "",
            jobval: "",
            desc: "",
            dep: "",
            job: ""
        };
    },
    methods: {
        chan() {
            if (
                this.username &&
                this.sex &&
                this.email &&
                this.iphone &&
                this.depval &&
                this.jobval
            ) {
                // name=xxx&sex=0&email=xxx&phone=xxx&departmentId=1&jobId=1&desc=xxx
                //postuserupdate
                if(this.userId){
                    this.$store.dispatch('postuserupdate',{
                        userId:this.userId,
                        name: this.username,
                        sex: this.sex,
                        email: this.email,
                        phone: this.iphone,
                        departmentId: this.depval,
                        jobId: this.jobval,
                        desc: this.desc
                    }).then(data => {
                        console.log(data);
                    });
                }else{
                    this.$store.dispatch("postadduser", {
                        name: this.username,
                        sex: this.sex,
                        email: this.email,
                        phone: this.iphone,
                        departmentId: this.depval,
                        jobId: this.jobval,
                        desc: this.desc
                    })
                    .then(data => {
                        console.log(data);
                    });
                }
                
            } else {
                alert("您有未填项，请填完整再提交");
            }
        }
    },
    mounted() {
        if (this.$route.query.id) {
            let obj = {
                userId: this.$route.query.id
            };
            this.$store.dispatch("getinfouser", obj).then(data => {
                data = data.data;
                (this.username = data.name),
                    (this.sex = data.sex),
                    (this.email = data.email),
                    (this.iphone = data.phone),
                    (this.depval = data.departmentId),
                    (this.jobval = data.jobId),
                    (this.desc = data.desc);
            });
        }
        this.$store.dispatch("getdeparlist").then(data => {
            this.dep = data;
        });
        this.$store.dispatch("getjoblist").then(data => {
            this.job = data;
        });
    }
};
</script>

<style lang="less" scoped>
.adduser {
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