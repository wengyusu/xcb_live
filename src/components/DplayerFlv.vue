<template>
<div class="dplayer"></div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import router from '../router'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
    props:{
        id:{
            type: String,
            default: 'live'
            },
        live: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        video: {
            type:Object
        }
    },
}
</script>