<template>
    <div class="organ">
        <div class="left">
            <ul>
                员工管理
                <router-link to="/info/organ/userlist" tag="li">
                    员工列表
                </router-link>
                <router-link to="/info/organ/adduser" tag="li">
                    新增员工
                </router-link>
            </ul>
            <ul>
                部门管理
                <router-link to="/info/organ/deparlist" tag="li">
                    部门列表
                </router-link>
                <router-link to="/info/organ/addepart" tag="li">
                    新增部门
                </router-link>
            </ul>
            <ul>
                职务管理
                <router-link to="/info/organ/joblist" tag="li">
                    职务列表
                </router-link>
                <router-link to="/info/organ/addjob" tag="li">
                    新增职务
                </router-link>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"organ",
    data() { 
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.organ{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display:flex;
    .left{
        flex:1.5;
        background: rgb(34, 6, 6);
        ul{
            padding:30px 50px  0 50px;
            font-size:18px;
            // background: blue;
            li{
                text-align:center;
                margin-top:10px;
            }
        }
    }
    .right{
        flex:8;
        background: rgb(241, 241, 194);
    }
}
</style>