<template>
    <div class="RightList">
        <div class="InterviewInfoBox">
            <div class="InterviewInfo">
                <TimeAddress/>
                <ConsultCode/>
            </div>
        </div>
    </div>
</template>

<script>
    import TimeAddress from './TimeAddress'
    import ConsultCode from './ConsultCode'

    export default {
        name: 'DynamicData',
        components:{
           TimeAddress,
           ConsultCode
        },
        data() {
            return {
               
            }
        },
        activated() {
            this.$bus.$emit('DataIconWhite')
        },
        deactivated() {
            this.$bus.$emit('DataIconGray')
        }
    }
</script>

<style scoped>
    .RightList {
        width: calc(100vw - 156px);
        height: 100%;
        min-width: 1764px;
    }

    .InterviewInfoBox {
        min-width: 1661px;
        width: 86vw;
        height: 921px;
        background-color: #fff;
        border-radius: 10px;
        margin-left: 4vw;
        margin-top: 55px;
    }

    .InterviewInfo {
        width: 86vw;
        min-width: 1661px;
        height: 921px;
        outline: 1px solid red;
    }
</style>