<template>
    <div class="cli">
        <div class="head">
            <div class="rf">
                <select id="select" v-model="msg" @change="chan">
                    <option value>全部</option>
                    <option value="重点客户">重点客户</option>
                    <option value="一般客户">一般客户</option>
                    <option value="放弃客户">放弃客户</option>
                </select>
                <input type="text" placeholder="按姓名/手机号/邮箱模糊查找" v-model="msf" @keydown.13="chan" />
            </div>
        </div>
        <div class="main">
            <table>
                <tr>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>邮箱</td>
                    <td>电话</td>
                    <td>QQ</td>
                    <td>类型</td>
                    <td>隶属人</td>
                    <td class="espe">地址</td>
                    <td class="espe">操作</td>
                </tr>
                <tr v-for="(item,index) in ary" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.sex==0?'男':'女'}}</td>
                    <!-- <td>{{item.department}}</td>
                    <td>{{item.job}}</td>-->
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.QQ}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.userName}}</td>
                    <td class="espe">{{item.address}}</td>
                    <td class="espe">
                        <a :href="hash(item.id)">编辑</a>
                        <a @click="dele(item.id)">删除</a>
                        <a :href="reset(item.id)">回访记录</a>
                    </td>
                </tr>
            </table>
            <div class="page">
                <a v-show="page===1?false:true" @click="regula(-1)">上一页</a>
                <a v-for="(item,index) in num" :key="index" @click="total(item)">{{item}}</a>
                <a v-show="page===num?false:true" @click="regula(1)">下一页</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cli",
    data() {
        return {
            msg: "",
            msf: "",
            ary: "",
            num: "",
            page: 1
        };
    },
    methods: {
        hash(id) {
            return "/#/info/client/addcli?id=" + id
        },
        dele(id) {
            let obj = {
                customerId: id
            };
            this.ary.length === 1 ? this.page-- : null
            this.ary = this.ary.filter(item=>{
                return item.id !== id
            })
            //在这是页面删了
            this.$store.dispatch("ggetcustdelete", obj).then(()=>{
                this.chan(this.page);
            })
        },
        reset(id) {
            return "/#/info/client/visit?id=" + id
        },
        regula(val) {
            this.page += val;
            this.total();
        },
        total(num) {
            this.page = num ? num : this.page;
            let obj = {
                type: this.msg,
                search: this.msf,
                page: this.page
            };
            this.gain(obj);
        },
        chan(num) {
            this.page = num ? num : 1;
            let obj = {
                type: this.msg,
                search: this.msf,
                page: this.page
            };
            this.gain(obj);
        },
        gain(option = {}) {
            let obj = {
                lx: "all",
                type: "",
                search: "",
                page: 1,
                ...option
            };
            this.$store.dispatch("getcustlist", obj).then(data => {
                if (!data) {
                    this.ary = "";
                    this.num = "";
                }
                this.ary = data
                this.num = data.totalPage;
            });
        }
    },
    mounted() {
        this.gain();
    }
};
</script>

<style lang="less" scoped>
.cli {
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

                td {
                    flex: 0.5;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    a + a {
                        margin-left: 10px;
                    }
                }
                .espe {
                    flex: 1.5;
                }
            }
        }
        .page {
            text-align: center;
        }
        a {
            cursor: pointer;
        }
        a + a {
            margin-left: 5px;
        }
    }
}
</style>