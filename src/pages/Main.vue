<template>
    <main>

        <LeftSide class="LeftSide container side"/>
        <RightSide class="container side"/>

    </main>
</template>



<script>
    import LeftSide from "../components/LeftSide";
    import RightSide from "../components/RightSide";

    export default {
        name: "Main",
        data() {
            return {

            }
        },
        computed:{
        },
        mounted() {
        },
        components: {
            RightSide,
            LeftSide
        },
    }
</script>



<style scoped lang="scss">

    main{
        display: flex;
        position: fixed;
        width: 100%;
        height: 100%;
        background: #cccccc;
    }
    .side{
        flex: 1;
        margin: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        transition: $tr;
    }
    .LeftSide{
    }

</style>
