<template>
    <div class="home">
        <banner></banner>
        <channel class="mb20"></channel>
        <arrow-more class="b-bottom">商家推荐</arrow-more>
        <recommend-win></recommend-win>
        <div class="content">
            <goods-box>
                热卖商品
            </goods-box>
            <goods-box>
                套餐商品
            </goods-box>
        </div>
        <copy-rights></copy-rights>
    </div>
</template>

<script>
    import channel from '../components/home/channel.vue'
    import arrowMore from '../components/home/arrow-more.vue'
    import recommendWin from '../components/home/recommendWin'
    import goodsBox from '../components/home/goodsBox/index.vue'
    import copyRights from '../components/common/copyRights.vue'

    export default {
        asyncData () {
            // todo
        },
        components: {
            channel,
            arrowMore,
            recommendWin,
            goodsBox,
            copyRights
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
