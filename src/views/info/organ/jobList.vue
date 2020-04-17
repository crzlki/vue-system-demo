<template>
    <div class="joblist">
        <table>
            <tr>
                <td>编号</td>
                <td>名称</td>
                <td class="miao">描述</td>
                <td class="make">操作</td>
            </tr>
            <tr v-for="(item,index) in ary" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td class="miao">{{item.desc}}</td>
                <td class="make">
                    <a :href="hash(item.id)">编辑</a>
                    <a @click="dele(item.id)">删除</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "joblist",
    data() {
        return {
            ary:''
        }; 
    },
    methods:{
        hash(id){
            return "/#/info/organ/addjob?jobId="+id
        },
        render(){
            this.$store.dispatch('getjoblist').then(data=>{
            this.ary = data
        })
        },
        dele(id){
            let obj = {
                jobId : id
            }
            this.$store.dispatch('getdelejob',obj)
            this.render()
        }
    },
    mounted(){
        this.render()
    }
};
</script>

<style lang="less" scoped>
.joblist{
    table{
        width: 100%;
        tr{
            display:flex;
            height: 30px;
            background:chartreuse;
            align-items:center;
            text-align:center;
            *{
                flex:1
            }
            .miao{
                flex:2
            }
            .make{
                a+a{
                    margin-left:20px
                }
            }
        }
    }
}
</style>