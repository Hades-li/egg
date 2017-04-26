<template>
    <div class="goods-box">
        <div class="title">
            <span class="line left"></span>
            <span class="text"><slot></slot></span>
            <span class="line right"></span>
        </div>
        <ul class="goods-list">
            <li>
                <good-item></good-item>
            </li>
            <li>
                <good-item></good-item>
            </li>
        </ul>
    </div>
</template>
<script>
    import goodItem from './item.vue'

    export default {
        name: 'goods-box',
        components: {
            goodItem
        }
    }
</script>
<style lang="scss" scoped>
    @import "~assets/css/mixin.scss";

    .goods-box{
        padding: 0 px2rem(20px);
        .title{
            position: relative;
            padding: px2rem(28px) px2rem(180px);
            text-align: center;
            color: #e3393c;
            .line{
                display: inline-block;
                width: px2rem(100px);
                border-top: px2rem(2px) solid #e3393c;
                vertical-align: middle;
            }
            .text{
                vertical-align: middle;
            }
        }
        .goods-list{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
