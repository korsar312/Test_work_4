<template>
    <div class="container">
        <div class="wrap">
            <div class="name">
                <span>{{prop.name}}</span>
                <button class="container" v-on:click="sortList()">{{sort}}</button>
            </div>

            <div :class="{list: listActive}" :style="{display: display}" v-for="(item,index) in renderList()" :key="index">
                <ItemView :prop="{item,list: item}"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemView from "./ItemView";
    export default {
        name: "ListView",
        data(){
            return{
                listActive: true,
                display: 'block',
                sort: 'Перемешать',
            }
        },
        components: {ItemView},
        methods:{
            sortList(){
                if (this.sort === 'Перемешать'){
                    this.sort = 'Сортировать'
                    this.display = 'inline-block'
                    this.listActive = false
                }
                else {
                    this.sort = 'Перемешать'
                    this.display = 'block'
                    this.listActive = true
                }
            },
            renderList(){
                let arr = []
                this.prop.forEach(i=>{
                    if(i?.check){
                        if(this.sort === 'Сортировать'){
                            for(let el = 0; el<i.amount; el++){
                                arr.push({
                                    amount: 1,
                                    color: i.color,
                                    obj: i,
                                })
                            }
                            arr.sort(()=>Math.random()-0.5)
                        }
                        else{
                                arr.push({
                                    amount: i.amount,
                                    color: i.color,
                                    obj: i,
                                })
                        }
                    }
                })
                return arr
            }
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
    .wrap{
        margin: 10px;
    }
    .name{
        margin: 10px 0;
    }
    button{
        margin: 0 10px;
    }
</style>