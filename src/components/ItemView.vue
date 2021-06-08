<template>
    <span v-for="coub in prop.item.amount" :style="{background: prop.item.color}" :key="coub" class="coub" v-on:click="del()"></span>
</template>

<script>
    export default {
        name: "ItemView",
        computed:{
                obj() {return this.prop.item.obj}
        },
        methods:{
            del(){
                this.$store.commit('addProperty',{obj:this.obj, property:'amount', value:this.obj.amount-1})
            },
        },
        props:{
            prop:{
                type: Object,
                default(){
                    return {}
                }
            },
        },
    }
</script>

<style scoped>
    span:hover{
        opacity: 0.5;
    }
</style>