<template>
    <div class="channel">
        <ul>
            <li>
                <a href="">
                    <img src="~assets/img/ico-coupon.png" alt="">
                    <p>领券中心</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="~assets/img/ico-myOrder.png" alt="">
                    <p>我的订单</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="~assets/img/ico-service.png" alt="">
                    <p>客服中心</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'channel'
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/mixin.scss';

    .channel{
        ul {
            height: px2rem(204px);
            display: flex;
            justify-content:center;
            align-items: center;
            background-color: #fff;
            li{
                margin: 0 px2rem(55.5px);
                img{
                    width: px2rem(100px);
                    height: px2rem(100px);
                }
                p{
                    @include font-dpr(24px);
                    line-height: px2rem(38px);
                    text-align: center;
                }
            }
        }
    }
</style>
