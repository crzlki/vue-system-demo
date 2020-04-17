<template>
    <div class="info">
        <header ref="h">
            <h2>Customer management demo Vue</h2>
            <div class="client">
                <router-link class="link" to="/info/organ">Organization</router-link>
                <router-link class="link" to="/info/client">Customer</router-link>
            </div>
            <div></div>
            <div></div>
            <div class="quit">
                Hellow：{{username}}
                <a @click="quit">Sign out</a>
            </div>
        </header>
        <div ref="v" class="view">
            <router-view></router-view>
        </div>
        <footer ref="f"></footer>
    </div>
</template>

<script>
export default {
    name: "info",
    data() {
        return {
            username: ""
        };
    },
    methods: {
        verify() {
            this.$store.dispatch("getlogin").then(
                () => {},
                () => {
                    this.$router.push("/login");
                }
            );
        },
        gain() {
            this.$store.dispatch("getinfouser").then(data => {
               console.log(data)
                this.username = data.name;
            });
        },
        quit(){
            this.$store.dispatch('getsignout').then(()=>{
                alert('You just logged out')
                this.$router.push('/login')
            })
        }
    },
    created() {
        this.verify();
    },
    mounted() {
        let ref = this.$refs;
        let winH = document.documentElement.clientHeight;
        ref.v.style.height =
            winH - ref.h.offsetHeight - ref.f.offsetHeight + "px";
        this.gain();
    }
};
</script>

<style lang="less" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: rgb(17, 16, 16);
    color: white;
    box-sizing: border-box;
    padding: 10px 30px;
    h2 {
        font-size: 22px;
    }
    .client {
        margin-left: 60px;
        .link {
            font-size: 20px;
            margin-left: 20px;
            text-decoration: none;
            color: white;
        }
    }
    .quit {
        float: right;
    }
}
footer {
    text-align: center;
    height: 30px;
    background: rgb(17, 16, 16);
    color: white;
    position: relative;
    line-height: 30px;
}
</style>