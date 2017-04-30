<template>
    <div class="home">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="~static/img/banner.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="~static/img/banner.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="~static/img/banner.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <channel class="mb20"></channel>
        <arrow-more class="b-bottom">商家推荐</arrow-more>
        <recommend-win></recommend-win>
        <div class="content">
            <goods-box v-bind:color = "'#fa9d1c'">
                热卖商品
            </goods-box>
            <goods-box v-bind:color="'#55affc'">
                套餐商品
            </goods-box>
        </div>
        <copy-rights></copy-rights>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'mint-ui'
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
            copyRights,
            mtSwipe: Swipe,
            mtSwipeItem: SwipeItem
        },
        head () {
            return {
                title: '鲜有蛋'
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "~assets/css/mixin.scss";

    .home {
        h3{
            color:#333;
        }
        .mint-swipe{
            height: px2rem(380px);
        }
    }
</style>
<style lang="scss">
    @import "~assets/css/mixin.scss";

    .mint-swipe{
        img{
            width: 100%;

        }
        .mint-swipe-indicators{
            .mint-swipe-indicator{
                width: px2rem(9px);
                height: px2rem(9px);
                background-color: #b3b3b2;
                border-radius: px2rem(3px);
                opacity: 1;
                transition: width 300ms;
                &.is-active{
                    width: px2rem(18px);
                    background-color: #2ca64b;
                }
            }
        }
    }
</style>
