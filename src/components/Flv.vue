<template>
    <div class="Flv">
    <d-player ref="player" :options="options" ></d-player>
    </div>
</template>

<script>
// import axios from 'axios'
import VueDPlayer from 'vue-dplayer'
import flvjs from 'flv.js'
import 'vue-dplayer/dist/vue-dplayer.css'
import 'hls.js'
window.flvjs=flvjs

export default {
  name: 'Flv',
  mounted() {
      this.player = this.$refs.player.dp
      this.player.fullScreen.request('web');
  },
  created() {
    //   player.play()
  },
  data() {
      return {
          player:null,
          options:{
            video:{
                    url: 'https://xcb.uestc.edu.cn/flv/live?port=1551&app=flvlive&stream='+this.$route.params.id,
                    type: 'flv'
            },
            live: true,
            autoplay: true,
          }
        }
  },
  components:{
      'd-player': VueDPlayer
  },
  methods: {
  play() {
    // console.log('开始播放...')
   }
 },
}

</script>