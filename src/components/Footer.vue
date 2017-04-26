<template>
    <div class="footer">
        <a href="">
            <i class="icon iconfont icon-home7"></i>
            <p>首页</p>
        </a>
        <a href="">
            <i class="icon iconfont icon-gouwudai"></i>
            <p>商品</p>
        </a>
        <a href="">
            <i class="icon iconfont icon-gouwuche2"></i>
            <p>购物</p>
        </a>
        <a href="">
            <i class="icon iconfont icon-wode"></i>
            <p>我的</p>
        </a>
    </div>
</template>

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
                @include font-dpr(40px);
            }
            p{
                padding-top: px2rem(15px);
                @include font-dpr(24px);
            }

        }
    }
</style>
