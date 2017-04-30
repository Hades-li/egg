<template>
    <div class="goods-box">
        <div class="title">
            <span class="line left" v-bind:style="{borderColor: color}"></span>
            <span class="text" v-bind:style="{color: color}"><slot></slot></span>
            <span class="line right" v-bind:style="{borderColor: color}"></span>
        </div>
        <ul class="goods-list">
            <li>
                <good-item></good-item>
            </li>
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
        },
        props: {
            color: [String]
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
            .line{
                display: inline-block;
                width: px2rem(100px);
                border-top: px2rem(2px) solid;
                vertical-align: middle;
            }
            .text{
                @include font-dpr(28px);
                vertical-align: middle;
            }
        }
        .goods-list{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                padding-bottom: px2rem(18px);
            }
        }
    }
</style>
