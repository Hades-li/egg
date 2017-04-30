<template>
    <div class="recommend-win">
        <ul>
            <li>
                <recommend-item></recommend-item>
            </li>
            <li>
                <recommend-item></recommend-item>
            </li>
            <li>
                <recommend-item></recommend-item>
            </li>
        </ul>
    </div>
</template>
<script>
    import recommendItem from './recommendItem.vue'

    export default {
        name: 'recommendWin',
        components: {
            recommendItem
        }
    }
</script>
<style lang="scss" scoped>
    @import '~assets/css/mixin.scss';
    .recommend-win{
        padding: px2rem(19px) 0 px2rem(30px) px2rem(10.5px);
        background-color: #fff;
        ul{
            display: flex;
            justify-content: flex-start;
            flex-flow: wrap;
            li{
                padding: 0 px2rem(13.5px);
            }
        }
    }
</style>
