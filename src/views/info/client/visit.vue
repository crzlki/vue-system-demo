<template>
    <div class="visit">
        <div class="main">
            <table>
                <tr>
                    <td>编号</td>
                    <td>日期</td>
                    <td>回访纪要</td>
                    <td>操作</td>
                </tr>
                <tr v-for="(item,index) in ary" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.visitTime}}</td>
                    <td>{{item.visitText}}</td>
                    <td>
                        <a @click="update(item)">编辑</a>
                        <a @click="dele(item.id)">删除</a>
                    </td>
                </tr>
            </table>
        </div>
        <div class="centent">
            <li>
                <span>拜访日期</span>
                <input type="date" v-model="msd" />
            </li>
            <li>
                <span>拜访纪要</span>
                <textarea v-model="msg" cols="30" rows="10"></textarea>
            </li>
            <li>
                <button @click="chan">确认提交</button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "visit",
    data() {
        return {
            msg: "",
            msd: "", //  - -
            ary: "",
            visitId:''
        };
    },
    methods: {
        update(item){
            this.visitId = item.id
            this.msg = item.visitText
            this.msd = item.visitTime
        },
        async chan() {
            let obj = {
                customerId: this.$route.query.id,
                visitText: this.msg,
                visitTime: this.msd
            };
            if(this.visitId){
                obj.visitId = this.visitId
                await this.$store.dispatch("postvisitupdate", obj)
                this.gain()
                this.visitId = ''
            }else{
            await this.$store.dispatch("postvisitadd", obj)
            this.gain()
            }
        },
        gain() {
            let obj = {
                customerId: this.$route.query.id
            };
            this.$store.dispatch("getvisitlist", obj).then(data => {
                if (!data) {
                    alert("这位客户没有回访记录");
                }
                console.log(data)
                data = data.data;
                this.ary = data;
            });
        },
        async dele(id){
            let obj = {
                visitId : id
            }
            await this.$store.dispatch('getvisitdele',obj)
            this.gain()
        }
    },
    mounted() {
        this.gain()
    }
};
</script>

<style lang="less" scoped>
.visit {
    width: 60%;
    background: hotpink;
    position:relative;
    .main {
        table {
            width: 100%;
            tr {
                display: flex;
                td {
                    text-align: center;
                    a + a {
                        margin-left: 10px;
                    }
                }
                td:nth-child(1) {
                    flex: 1;
                }
                td:nth-child(2) {
                    flex: 1;
                }
                td:nth-child(3) {
                    flex: 3;
                }
                td:nth-child(4) {
                    flex: 1;
                }
            }
        }
    }
    .centent {
        width: 400px;
        margin: 0 auto;
        li {
            span {
                display: inline-block;
                width: 80px;
            }
            input {
                width: 120px;
            }
            textarea {
                height: 120px;
                min-height: 120px;
                max-height: 200px;
                vertical-align: top;
            }
            button {
                width: 80px;
                height: 30px;
            }
        }
        li + li {
            margin-top: 10px;
        }
        li:nth-last-child(1) {
            text-align: center;
        }
    }
}
</style>