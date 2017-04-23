<template>
    <div class="home">
        <banner>
        </banner>
        <channel></channel>
    </div>
</template>

<script>
    import channel from '../components/home/channel.vue'
    export default {
        asyncData () {
            // todo
        },
        components: {
            channel
        },
        head () {
            return {
                title: '鲜有蛋'
            }
        }
    }
</script>

<style lang='scss' scoped>
    .home {
        h3{
            color:#333;
        }
    }
</style>
