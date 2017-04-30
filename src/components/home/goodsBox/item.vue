<template>
    <div class="goods-item">
        <img src="~static/img/egg_02@2x.png" alt="">
        <div class="inf-wrap">
            <p class="text">的口感好了加攻击好高好高科技孵化十大</p>
            <p class="price">
                <span>75</span>
                <span>.76</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'goods-item'
    }
</script>
<style lang="scss" scoped>
    @import "~assets/css/mixin.scss";

    .goods-item{
        width: px2rem(340px);
        padding-bottom: px2rem(25px);
        border: 1px solid #ddd;
        background-color: #fff;
        img {
            max-width: px2rem(340px);
            max-height: px2rem(208px);
        }
        .inf-wrap{
            padding: 0 px2rem(20px);
            .text{
                padding-top: px2rem(16px);
                padding-bottom: px2rem(10px);
                @include font-dpr(24px);
                line-height: 1.5;
            }
            .price{
                @include font-dpr(26px);
                color: #e33d3f;
                &:before{
                    content: '¥ ';
                    @include font-dpr(24px);
                }
            }
        }
    }
</style>
