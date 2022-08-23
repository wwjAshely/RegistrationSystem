<template>
    <!-- 组件的结构 -->
    <div class="back">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name:'App',
        components:{
    
        },
        data() {
          return {
            number: 4
          }
        }
    }
</script>

<style scoped>
    
</style>