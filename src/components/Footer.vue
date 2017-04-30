<template>
    <div class="footer">
        <nuxt-link to="">
            <i class="ico home"></i>
            <p>首页</p>
        </nuxt-link>
        <nuxt-link to="">
            <i class="ico goods active"></i>
            <p class="active">商品</p>
        </nuxt-link>
        <nuxt-link to="">
            <i class="ico car"></i>
            <p>购物</p>
        </nuxt-link>
        <nuxt-link to="">
            <i class="ico my"></i>
            <p>我的</p>
        </nuxt-link>
    </div>
</template>
<script>
    export default {
        name: 'footer'
    }
</script>
<style lang="scss" >
    @import "../assets/css/mixin.scss";

    .footer{
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-around;
        background-color: #eee;
        padding-top: px2rem(20px);
        padding-bottom: px2rem(15px);
        border-top: px2rem(2px) solid #e8e8e8;
        a{
            display: block;
            text-align: center;
            flex-grow: 1;
            i{
                display: inline-block;
                &.home{
                    width: px2rem(35px);
                    height: px2rem(31px);
                    background: url(../assets/img/ico-home.png) top center no-repeat;
                    background-size: cover;
                    &.active{
                        background-image: url(../assets/img/ico-home-active.png);
                    }
                }
                &.goods{
                    width: px2rem(31px);
                    height: px2rem(32px);
                    background: url(../assets/img/ico-goods.png) top center no-repeat;
                    background-size: cover;
                    &.active{
                        background-image: url(../assets/img/ico-goods-active.png);
                    }
                }
                &.car{
                    width: px2rem(41px);
                    height: px2rem(30px);
                    background: url(../assets/img/ico-car.png) top center no-repeat;
                    background-size: cover;
                    &.active{
                        background-image: url(../assets/img/ico-car-active.png);
                    }
                }
                &.my{
                    width: px2rem(32px);
                    height: px2rem(30px);
                    background: url(../assets/img/ico-my.png) top center no-repeat;
                    background-size: cover;
                    &.active{
                        background-image: url(../assets/img/ico-my-active.png);
                    }
                }
            }
            p{
                padding-top: px2rem(15px);
                @include font-dpr(24px);
                &.active{
                    color: #32b25d;
                }
            }

        }
    }
</style>
