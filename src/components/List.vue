<template>
    <div>
        <input class="slider" type="checkbox"/>
        <div :class="{construct: true, construct_active: construct_active}"></div>

        <div class="lists">
            <input :class="{custom_checkbox:true, all: checkbox.all, some:checkbox.some, none: checkbox.none}" :id="obj.name" type="checkbox" v-on:click="searchCheck($event)"/>
            <label :for="obj.name">&nbsp; {{obj.name}}</label>
            <Item class="item" v-for="(item,index) in prop.list" :key="index" :prop="{item,index,list:prop.index+1}"/>
        </div>
    </div>
</template>

<script>
    //самое сложное было тут, так как переменная в v-model менялась нормально, но checked не появлялся(если Вы напишете мне почему, я буду очень рад!), поэтому пришлось писать костыль
    import Item from "./Item";
    export default {
        name: "List",
        components: {Item},
        data(){
            return{
                construct_active: false,
                checkbox:{
                    all:false,
                    some: false,
                    none: true,
                },
                obj: this.prop.list,
                stopWord:[
                    "name",
                    "check",
                    "color",
                ],
            }
        },
        computed:{
            check(){
                let all = true
                let some = false
                for(let i of this.obj){
                    if(i.check){
                        some = true
                        continue
                    }
                    all = false
                }
                if(all){this.classChange('all')}
                else if(some){this.classChange('some')}
                else{this.classChange('none')}


                return some
            }
        },
        watch:{
            check(){
                this.$store.commit('addProperty',{obj:this.obj, property:'check', value:this.check})
            }
        },
        methods:{
            searchCheck(event){
                event.preventDefault()
                let all = true
                for(let i in this.obj){
                    if(this.obj[i].check || this.stopWord.includes(i)){
                        continue
                    }
                    all = false

                }
                all && this.allCheck(false)
                all || this.allCheck(true)
            },
            classChange(el){
                for(let i in this.checkbox){
                    if(i == el){this.checkbox[i] = true}
                    else {this.checkbox[i] = false}
                }
            },
            allCheck(bool){
                for(let i in this.obj){
                    if(this.stopWord.includes(i)){
                        continue
                    }
                    this.$store.commit('addProperty',{obj:this.obj[i], property:'check', value:bool})
                }
            },
        },
        mounted() {
            this.$store.commit('addProperty',{obj:this.obj, property:'name', value:'List ' + (this.prop.index+1)})
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

<style scoped lang="scss">
    .lists{
        position: relative;
        margin: 10px 15px;
        overflow: hidden;
    }
    .item{
        margin: 5px 10px;
    }
    .custom_checkbox{
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom_checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom_checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .all+label::after{
        content: '';
        position: absolute;
        left: 3px;

        width: 11px;
        height: 6px;
        border-left: #000 2px solid;
        border-bottom: #000 2px solid;
        transform: rotateZ(-45deg);
    }
    .some+label::after{
        content: '';
        position: absolute;
        left: 5px;

        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 0.5em;
        background: #000;
    }
    .none+label::after{

    }
    .construct{
        position: absolute;
        top:2px;
        left: -3px;
        border-left: #000 2px solid;
        border-bottom: #000 2px solid;
        transform: rotateZ(-45deg);
        width: 10px;
        height: 10px;
        &_active{
            transform: rotateZ(-135deg);
        }
    }

    .slider{
        position: absolute;
        left: -6px;

        width: 19px;
        height: 19px;
        opacity: 0;
        z-index: 1;
        cursor: pointer;

        &:checked + .construct + .lists{
            height: 20px;
        }
        &:checked + .construct{
            transform: rotateZ(-135deg);
        }
    }


</style>