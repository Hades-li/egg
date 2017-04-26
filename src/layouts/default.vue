<template>
    <div class="body">
        <nuxt />
        <my-footer/>
    </div>
</template>

<script>
    import MyFooter from '~components/Footer.vue'

    export default {
        components: {
            MyFooter
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/css/mixin.scss";

    .body{
        padding-bottom: px2rem(108px);
    }
</style>
