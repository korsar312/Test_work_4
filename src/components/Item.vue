<template>

    <div class="centerLight2">
        <div>
            <input :id="prop.list + obj.name" type="checkbox" v-model="check"/>
            <label :for="prop.list + obj.name">&nbsp; {{obj.name}}</label>
        </div>
        <div class="space amount"></div>
        <div class="centerLight2">
            <input class="amount" v-model="amount"/>
            <input type="color" v-model="color" class="coub"/>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Item",
        data(){
            return{
                check: false,
                color: this.prop.item.color,
                amount: this.prop.item.amount,
                obj: this.prop.item,
            }
        },
        watch: {
            "obj.check"(){
                this.check = this.obj.check
            },
            "obj.amount"(){
                this.amount = this.obj.amount
            },
            amount(){
                let amount = String(this.amount).split('').map(i=>{
                    if(i >= 0 && i <= 9){
                        return i
                    }
                }).join('')
                this.$store.commit('addProperty',{obj:this.obj, property:'amount', value:Number(amount)})
                this.amount = Number(amount)
            },
            color(){
                this.$store.commit('addProperty',{obj:this.obj, property:'color', value:this.color})
            },
            check(){
                this.$store.commit('addProperty',{obj:this.obj, property:'check', value:this.check})
            },
        },
        mounted() {
            this.$store.commit('addProperty',{obj:this.obj, property:'name', value:'Item ' + (this.prop.index+1)})
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

    .amount{
        width: 30px;
        height: 15px;
        margin: 0 5px;
    }
    .coub{
        display: inline-block;
        width: 25px;
        height: 25px;
        background: none;
        border: none;
    }
    .space{
        flex: 1;
        border-bottom: 1px #cccccc dotted;
    }
    .container{

    }

</style>