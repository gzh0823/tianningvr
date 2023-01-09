<template>
    <div class="header flex-row">
        <img src="@/assets/logo.png" height="36" alt="">
        <div>{{date}}&emsp;星期{{weekDay==1?'一':weekDay==2?'二':weekDay==3?'三':weekDay==4?'四':weekDay==5?'五':weekDay==6?'六':'日'}}&emsp;{{ time }}</div>
    </div>
</template>

<script>
import './header.css'
export default {
    data(){
        return{
            date:`${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`,
            weekDay:new Date().getDay(),
            time:`${new Date().getHours()}:${new Date().getMinutes()}`,
            timer:null
        }
    },
    created(){
        this.timer=setInterval(() => {
            this.date=`${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`
            this.weekDay=new Date().getDay()
            this.time=`${new Date().getHours()}:${new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes()}`
        }, 60000);
    },
    beforeDestroy(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
}
</script>