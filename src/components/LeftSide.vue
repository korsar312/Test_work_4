<template>
    <div class="container">
        <div class="wrapper">
                <List class="list" v-for="(list,index) in $store.state.lists" :key="index" :prop="{list,index}"/>
        </div>
    </div>
</template>

<script>
    import List from "./List";
    export default {
        name: "LeftSide",
        components: {
            List,
        }
    }
</script>

<style scoped>
.list{
    position: relative;

}
</style>