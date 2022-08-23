<template>
    <div class="RightList">
        <div class="SearchBox">
            <Search/>
        </div>

        <div class="concreteMessage">
            <RightItem/>

            <div class="RightFooterBox">
                <div class="RightFooter">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Search from "./Search";
     import RightItem from "./RightItem";

    export default {
        name: 'MemberMessage',
        components:{
           Search,
           RightItem,
        },
        activated() {
            this.$bus.$emit('MemberIconWhite')
        },
        deactivated() {
            this.$bus.$emit('MemberIconGray')
        }
    }
</script>

<style scoped>
    .RightList {
        width: calc(100vw - 156px);
        height: 100%;
        /* background-color: rgb(154, 148, 149); */
        min-width: 1764px;
    }

    .SearchBox {
        /* width: 91%; */
        width: 86vw;
        height: 90px;
        background-color: white;
        margin-left: 4vw;
        margin-top: 55px;
        border-radius: 10px;
        min-width: 1653px;
    }

    .concreteMessage {
        width: 86vw;
        height: 808px;
        margin-left: 4vw;
        margin-top: 18px;
        border-radius: 10px;
        background-color: white;
        min-width: 1653px;
    }

    .RightFooterBox {
        width: 86vw;
        height: 141px;
        outline: 1px solid red;
        min-width: 1653px;
    }

    /* RightFooter */
    .RightFooter {
        width: 86vw;
        height: 141px;
        min-width: 1653px;
        background-color: rgb(172, 213, 172);
    }
</style>