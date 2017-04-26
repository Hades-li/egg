<template>
    <div class="arrow-more">
        <p class="l-text">
            <slot></slot>
        </p>
        <p class="r-text">更多</p>
        <i class="icon iconfont icon-chevron-copy"></i>
    </div>
</template>
<script>
    export default {
        name: 'arrowMore'
    }
</script>
<style lang="scss">
    @import '../../assets/css/mixin.scss';

    .arrow-more{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 px2rem(20px);
        height: px2rem(90px);
        background-color: #fff;
        .l-text{
            @include font-dpr(26px);
            color: #333;
        }
        .r-text{
            flex-grow: 1;
            @include  font-dpr(24px);
            color:#848484;
            padding-right: px2rem(10px);
            text-align: right;
        }
        .icon-chevron-copy{
            @include font-dpr(20px);
            color: #848484;
        }
    }
</style>
