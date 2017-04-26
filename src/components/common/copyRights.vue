<template>
    <div class="copyrights">
        鲜有蛋官方商城
    </div>
</template>
<script>
    export default {
        name: 'copy-rights'
    }
</script>
<style lang="scss">
    @import "~assets/css/mixin.scss";

    .copyrights{
        height: px2rem(82px);
        @include font-dpr(24px);
        line-height: px2rem(82px);
        text-align: center;
        color:#a2a2a4;
    }
</style>
