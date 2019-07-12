
<template>
<div class="main">
<ul v-for="item in items">
<li  :style="{color: item.status ? '#42b983' : 'red'  }">
<router-link :to="{path:'/live',params:{id:item.stream_id},name:'Flv'}">{{item.stream_id}} </router-link>
<span v-if="item.status">&#160;&#160;&#160;勃了</span>
  <span v-if="!(item.status)">&#160;&#160;&#160;摸了</span> 
</li>
</ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Main',
  created () {
      axios.get('https://xcb.uestc.edu.cn/livedb').then(response=>{
        let items=response['data']
        this.items = items;
        // console.log(items)
        // console.log(response)
        const url_prefix = 'https://xcb.uestc.edu.cn/flv/live?port=1551&app=flvlive&stream=';
        // const url_prefix = 'http://localhost:8080/#/live/'
        for(let i in this.items){
          // fetch(url_prefix+this.items[i].stream_id).then(res=>{console.log(res.status)})
          axios.get(url_prefix+this.items[i].stream_id,{timeout:2000}).then(response=>{
            console.log(response)
            if(response.status >= 200 && response.status <400){
              let data = this.items[i]
              console.log(data)
              data['status'] = true
              this.$set(this.items,i,data)
            }
            else{
              let data = this.items[i]
              data['status'] = false
              this.$set(this.items,i,data)

            }
          }).catch(err=>{
            console.log(err.response)
            if(err.toString().indexOf('500')!=-1 ){
              let data = this.items[i]
              data['status'] = false
              this.$set(this.items,i,data)   
            }
            else{
              let data = this.items[i]
              // console.log(data)
              data['status'] = true
              this.$set(this.items,i,data)
            }
          })
        }
      })
  },
  data() {
      return {
          items:[{stream_id:"live",title:"test",status:true},{stream_id:"live",title:"test",status:true}]
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>