<template>
    <div id="item">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"item",
    data() { 
        return {

        }
    }
}
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
    list-style:none;
}
html,body{
    width: 100%;
    height: 100%;
   background: linear-gradient(0deg, rgba(15,14,10,1) 0%, rgba(186,51,18,1) 100%);
}
.lf{
    float: left;
}
.rf{
    float: right;
}
</style>