<template>
    <div class="home">
        <banner></banner>
        <channel class="mb20"></channel>
        <arrow-more class="b-bottom">商家推荐</arrow-more>
        <recommend-win></recommend-win>
    </div>
</template>

<script>
    import channel from '../components/home/channel.vue'
    import arrowMore from '../components/home/arrow-more.vue'
    import recommendWin from '../components/home/recommendWin'

    export default {
        asyncData () {
            // todo
        },
        components: {
            channel,
            arrowMore,
            recommendWin
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
