<template>
    <div class="addepart">
        <div class="main">
            <li>
                <span>部门名称</span>
                <input type="text" v-model="name" />
            </li>
            <li>
                <span>部门描述</span>
                <textarea cols="30" rows="10" v-model="desc"></textarea>
            </li>
            <li>
                <button @click="commit">确认提交</button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "addepart",
    data() {
        return {
            name: "",
            desc: ""
        };
    },
    methods: {
        commit() {
            if (this.name && this.desc) {
                if (this.$route.query.departId) {
                    let obj = {
                        departmentId : this.$route.query.departId,
                        name: this.name,
                        desc: this.desc
                    };
                    this.$store.dispatch('postdepartupdate',obj)
                } else {
                    let obj = {
                        name: this.name,
                        desc: this.desc
                    };
                    this.$store.dispatch("postaddepart", obj);
                }
            } else {
                alert("还没填完呢");
            }
        }
    },
    mounted() {
        if (this.$route.query.departId) {
            let obj = {
                departmentId: this.$route.query.departId
            };
            this.$store.dispatch("getdepartinfo", obj).then(data => {
                console.log(data);
                this.name = data.name;
                this.desc = data.desc;
            });
        }
    }
};
</script>

<style lang="less" scoped>
.addepart {
    .main {
        width: 400px;
        height: 300px;
        // background:cornflowerblue;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;
        li {
            span {
                display: inline-block;
                width: 80px;
                height: 30px;
                // background:darkorchid;
                vertical-align: top;
                text-align-last: justify;
                margin-right: 20px;
            }
            input {
                width: 200px;
                height: 26px;
            }
            textarea {
                width: 200px;
                height: 120px;
                min-height: 120px;
                max-height: 150px;
            }
        }
        li:nth-last-child(1) {
            text-align: center;
            button {
                width: 80px;
                height: 30px;
            }
        }
    }
}
</style>