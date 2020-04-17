<template>
    <div class="userlist">
        <div class="head">
            <div class="rf">
                <button>批量删除</button>
                <select id="select" v-model="msg" @change="chan">
                    <option value="0">全部</option>
                    <option value="1">总裁办</option>
                </select>
                <input type="text" placeholder="按姓名/手机号/邮箱模糊查找" v-model="msf" />
            </div>
        </div>
        <div class="main">
            <table>
                <tr>
                    <td class="inp">
                        <input type="checkbox" value="ok" v-model="quan" />
                    </td>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>部门</td>
                    <td>职务</td>
                    <td class="mess">邮箱</td>
                    <td class="ihpo">电话</td>
                    <td class="miao">描述</td>
                    <td class="make">操作</td>
                </tr>
                <tr v-for="(item,index) in ary" :key="index">
                    <td class="inp">
                        <input type="checkbox" :value="index" v-model="inp" @change="chan" />
                    </td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex==0?'男':'女'}}</td>
                    <td>{{item.department}}</td>
                    <td>{{item.job}}</td>
                    <td class="mess">{{item.email}}</td>
                    <td class="ihpo">{{item.phone}}</td>
                    <td class="miao">{{item.desc}}</td>
                    <td class="make">
                        <a :href="hash(item.id)">编辑</a>
                        <a @click="dele(item.id)">删除</a>
                        <a @click="reset(item.id)">重置密码</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "userlist",
    data() {
        return {
            msg: "0",
            msf: "",
            ary: "",
            inp: []
        };
    },
    methods: {
        hash(id){
            return "/#/info/organ/adduser?id="+id
        },
        chan() {
            this.$store.dispatch("getuserlist", {
                    msg: this.msg,
                    msf: this.msf
                }).then(data => {
                    this.ary = data;
                });
        },
        dele(id){
            let obj = {
                userId : id
            }
            this.$store.dispatch('getdeleuser',obj).then(()=>{
                this.chan()
            })
        },
        reset(id){
            let obj = {
                userId : id,
                password : 123456
            }
            this.$store.dispatch('postresetuser',obj).then(data=>{
                console.log(data)
            })
        }
    },
    computed: {
        quan: {
            get() {
                let val = this.inp.length === this.ary.length;
                if (val) {
                    return true;
                }
                return false;
            },
            set(val) {
                if (val) {
                    this.ary.forEach((item, index) => {
                        this.inp.push(index);
                    });
                } else {
                    this.inp = [];
                }
            }
        }
    },
    mounted() {
        this.chan();
    }
};
</script>

<style lang="less" scoped>
.userlist {
    .head {
        margin: 10px;
        overflow: hidden;
        button,
        select {
            width: 80px;
            height: 30px;
            margin-right: 15px;
        }
        input {
            width: 200px;
            height: 26px;
        }
    }
    .main {
        table {
            width: 100%;
            tr {
                display: flex;
                height: 30px;
                background: rgb(92, 90, 90);
                align-items: center;
                .inp {
                    flex: 0.5;
                }
                td {
                    flex: 1;
                    text-align: center;
                }
                .mess,
                .ihpo,
                .miao,
                .make {
                    flex: 2;
                    a{
                        text-decoration:none;
                        cursor:pointer;
                    }
                    a+a{
                        margin-left:10px
                    }
                }
            }
        }
    }
}
</style>