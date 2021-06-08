<template>
    <div class="container">
        <div class="wrapper">
            <ListView class="list" v-for="(list,index) in renderList" :key="index" :prop="list"/>
        </div>
    </div>
</template>

<script>
    import ListView from "./ListView";
    export default {
        name: "RightSide",
        computed:{
            renderList(){
                let arr = []

                this.$store.state.lists.forEach(i=>{
                    if(i?.check){
                        arr.push(i)
                    }
                })
                return arr
            }
        },
        methods:{


        },
        components: {ListView}
    }
</script>

<style scoped>

</style>