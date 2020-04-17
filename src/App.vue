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
    background: rgb(151, 145, 145);
}
.lf{
    float: left;
}
.rf{
    float: right;
}
</style>