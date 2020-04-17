import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/api'

Vue.use(Vuex)
// import {} from '../api/api.js'

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
        
    },
    actions: {
        //登录
        getlogin() {
            return axios.get('/user/login').then((data) => {
                
                if (data.code === 0) {
                    console.log('Log in successfully')
                    return
                } else {
                    alert('Plz login first')
                    return new Promise((resolve,reject)=>{
                        reject()
                    })
                }
            })
        },
        //退出登录
        getsignout(){
            return axios.get('/user/signout')
        },
        //获取用户列表
        getuserlist(a, b) {
            return axios.get('/user/list', {
                params: {
                    departmentId: b.msg,
                    search: b.msf
                }
            }).then((data) => {
                // a.state.userlistdata = data
                data = data.data
                return new Promise((resolve)=>{
                    resolve(data)
                })
            })
        },
        //新增用户
        postadduser({commit},option){
            console.log(commit)
            return axios.post('/user/add',option).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //修改用户信息
        postuserupdate({commit},option){
            console.log(commit)
            return axios.post('/user/update',option).then(data=>{
             
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //获取用户信息
        getinfouser({commit},option={}){
            console.log(commit)
            return axios.get('/user/info',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //删除用户信息
        getdeleuser({commit},option){
            console.log(commit)
            return axios.get('/user/delete',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //重置用户密码123456
        postresetuser({commit},option){
            console.log(commit)
            return axios.post('/user/resetpassword',option).then(data=>{
          
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //获取部门列表
        getdeparlist(){
            return axios.get('/department/list').then(data=>{
               
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //新增部门
        postaddepart({commit},option){
            console.log(commit)
            return axios.post('/department/add',option).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //获取部门详细信息
        getdepartinfo({commit},option){
            console.log(commit)
            return axios.get('/department/info',{
                params:option
            }).then(data=>{
                console.log(data)
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //修改部门信息
        postdepartupdate({commit},option){
            console.log(commit)
            return axios.post('/department/update',option).then(data=>{
      
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //删除部门
        getdeledepart({commit},option){
            console.log(commit)
            return axios.get('/department/delete',{
                params:option
            }).then(data=>{
        
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //获取职务列表
        getjoblist(){
            return axios.get('/job/list').then(data=>{
    
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //获取职务信息
        getjobinfo({commit},option){
            console.log(commit)
            return axios.get('/job/info',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //新增职务
        postaddjob({commit},option){
            console.log(commit)
            return axios.post('/job/add',option).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //修改职务
        postjobupdate({commit},option){
            console.log(commit)
            return axios.post('/job/update',option).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //删除职务
        getdelejob({commit},option){
            console.log(commit)
            return axios.get('/job/delete',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //获取客户列表
        getcustlist({commit},option){
            Object.assign(option,{
                limit : 10
            })
            console.log(commit)
            return axios.get('/customer/list',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }else{
                    alert('没有您的客户啊亲')
                }
            })
        },
        //删除客户信息
        getcustdelete({commit},option){
            console.log(commit)
            return axios.get('/customer/delete',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //获取客户详细信息
        getcustinfo({commit},option){
            console.log(commit)
            return axios.get('/customer/info',{
                params:option
            }).then(data=>{
    
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //新增客户信息
        postcustadd({commit},option){
            console.log(commit)
            return axios.post('/customer/add',option).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //修改客户信息
        postcustupdate({commit},option){
            console.log(commit)
            return axios.post('/customer/update',option).then(data=>{
            
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        },
        //获取回访记录信息
        getvisitlist({commit},option){
            console.log(commit)
            return axios.get('/visit/list',{
                params:option
            }).then(data=>{           
                if(data.code === 0){
                    return Promise.resolve(data.data)
                }
            })
        },
        //增加回访记录
        postvisitadd({commit},option){
            console.log(commit)
            return axios.post('/visit/add',option).then(data=>{
                if(data.code === 0 ){
                    return Promise.resolve(data)
                }
            })
        },
        //修改回访信息
        postvisitupdate({commit},option){
            console.log(commit)
            return axios.post('/visit/update',option).then(data=>{
                if(data.code === 0 ){
                    return Promise.resolve(data)
                }
            })
        },
        //删除回访信息
        getvisitdele({commit},option){
            console.log(commit)
            return axios.get('/visit/delete',{
                params:option
            }).then(data=>{
                if(data.code === 0){
                    return Promise.resolve(data)
                }
            })
        }
    },
    modules: {
    }
})
