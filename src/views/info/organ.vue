<template>
    <div class="organ">
        <div class="left">
            <ul>
                Staff
                <router-link to="/info/organ/userlist" tag="li">
                    Staff List
                </router-link>
                <router-link to="/info/organ/adduser" tag="li">
                    Add new comer
                </router-link>
            </ul>
            <ul>
                Department
                <router-link to="/info/organ/deparlist" tag="li">
                    Department List
                </router-link>
                <router-link to="/info/organ/addepart" tag="li">
                    Add new department
                </router-link>
            </ul>
            <ul>
               Duty
                <router-link to="/info/organ/joblist" tag="li">
                    Title List
                </router-link>
                <router-link to="/info/organ/addjob" tag="li">
                    Add new job title
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
        background: rgb(20, 3, 3);
        color:white;
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
        background: rgb(240, 240, 234);
    }
}
</style>