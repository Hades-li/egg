<template>
    <div class="recommend-item">
        <img src="~static/img/egg_01.jpg" alt="">
        <h3>一二三四五六七八九十</h3>
        <p>138.00</p>
    </div>
</template>
<script>
    export default {
        name: 'recommendItem'
    }
</script>
<style lang="scss" scoped>
    @import '~assets/css/mixin.scss';
    .recommend-item{
        padding: px2rem(3px);
        border: 1px solid #e6e6e6;
        border-radius: px2rem(3px);
        img{
            max-width: px2rem(208px);
            max-height: px2rem(159px);
        }
        h3{
            width: px2rem(190px);
            padding-top: px2rem(10px);
            padding-left: px2rem(4px);
            @include font-dpr(24px);
            color:#828282;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        p{
            padding-top: px2rem(4px);
            padding-left: px2rem(4px);
            padding-bottom: px2rem(10px);
            @include font-dpr(24px);
            color:#e4331f;
            &:before{
                content: '¥';
            }
        }
    }
</style>
