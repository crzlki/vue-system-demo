<template>
    <div class="client">
        <div class="left">
            <ul>
                Customer manage
                <router-link to="/info/client/cli" tag="li">Get All</router-link>
                <router-link to="/info/client/mycli" tag="li">My customer</router-link>
                <router-link to="/info/client/addcli" tag="li">Add customer</router-link>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "client",
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
.client {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    .left {
        flex: 1.5;
        background: rgb(19, 16, 16);
        color:white;
        ul {
            padding: 30px 50px 0 50px;
            font-size: 18px;
            // background: blue;
            li {
                text-align: center;
                margin-top: 10px;
            }
        }
    }
    .right {
        flex: 8;
        background: rgb(255, 255, 248);
    }
}
</style>