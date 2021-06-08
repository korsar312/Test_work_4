<template>

  <router-view>

  </router-view>

</template>


<script>

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    mounted() {
      this.getJSON('https://raw.githubusercontent.com/korsar312/db/main/test4.json')
    },
    methods:{
      async getJSON(url){
          let response = await fetch(url);
          if (response.ok) {
            let json = await response.json();
            this.$store.state.lists.push(...json)
          }
          else {
            alert("Ошибка HTTP: " + response.status);
          }
      }
    }
  }
</script>



<style>
  @import './clear.module.css';

  .centerFull{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .centerLight{
    display: flex;
    justify-content: center;
  }
  .centerLight2{
    display: flex;
    align-items: center;
  }
  .container{
    font-family: "Times New Roman","Helvetica","Arial",sans-serif;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 1px rgba(34, 60, 80, 0.1);
    background: #fff;

    overflow: hidden;
  }
  .wrapper{
    overflow: auto;
    height: 100%;
  }
  .list{
    margin: 10px;
  }
  .coub{
    display: inline-block;
    width: 15px;
    height: 15px;;
    background: red;
    margin: 0 1px;
  }
</style>
