<template>
    <div class="addjob">
        <div class="main">
            <li>
                <span class="inter">职务名称</span>
                <input type="text" v-model="name" />
            </li>
            <li>
                <span class="inter">职务描述</span>
                <textarea cols="30" rows="10" v-model="desc"></textarea>
            </li>
            <li>
                <span class="inter">拥有权限</span>
                <span>
                    <input type="checkbox" value="userhandle" id="userhandle" v-model="ary" />
                    <label for="userhandle">员工操作权</label>
                </span>
                <span>
                    <input type="checkbox" value="departhandle" id="departhandle" v-model="ary" />
                    <label for="departhandle">部门操作权</label>
                </span>
                <span>
                    <input type="checkbox" value="jobhandle" id="jobhandle" v-model="ary" />
                    <label for="jobhandle">职务操作权</label>
                </span>
                <span>
                    <input type="checkbox" value="departcustomer" id="departcustomer" v-model="ary" />
                    <label for="departcustomer">部门全部客户</label>
                </span>
                <span>
                    <input type="checkbox" value="allcustomer" id="allcustomer" v-model="ary" />
                    <label for="allcustomer">公司全部客户</label>
                </span>
                <span>
                    <input type="checkbox" value="resetpassword" id="resetpassword" v-model="ary" />
                    <label for="resetpassword">重置密码</label>
                </span>
            </li>
            <li>
                <button @click="commit">确认提交</button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "addjob",
    data() {
        return {
            name: "",
            desc: "", 
            ary: []
        };
    },
    methods: {
        commit() {
            if (this.name && this.desc) {
                if (this.$route.query.jobId) {
                    let obj = {
                        jobId:this.$route.query.jobId,
                        name: this.name,
                        desc: this.desc,
                        power: this.ary.join("|")
                    }
                    this.$store.dispatch('postjobupdate',obj)
                } else {
                    let obj = {
                        name: this.name,
                        desc: this.desc,
                        power: this.ary.join("|")
                    };
                    this.$store.dispatch("postaddjob", obj);
                }
            } else {
                alert("请填完再提交");
            }
        }
    },
    mounted() {
        if (this.$route.query.jobId) {
            let obj = {
                jobId: this.$route.query.jobId
            };
            this.$store.dispatch("getjobinfo", obj).then(data => {
                console.log(data);
                (this.name = data.name),
                    (this.desc = data.desc),
                    (this.ary = data.power.split("|"));
            });
        }
    }
};
</script>

<style lang="less" scoped>
.addjob {
    .main {
        width: 800px;
        height: 300px;
        // background:cornflowerblue;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;
        li {
            .inter {
                display: inline-block;
                width: 80px;
                height: 30px;
                // background:darkorchid;
                vertical-align: top;
                text-align-last: justify;
                margin-right: 20px;
            }
            input[type="text"] {
                width: 200px;
                height: 26px;
            }
            textarea {
                width: 200px;
                height: 120px;
                min-height: 120px;
                max-height: 150px;
            }
        }
        li:nth-last-child(1) {
            button {
                width: 80px;
                height: 30px;
                margin-left: 100px;
            }
        }
    }
}
</style>