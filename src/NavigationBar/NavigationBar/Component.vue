<template lang="pug">
    include Template.pug
</template>

<script>
    import NavigationBar from '../../../../blue-admin-vue-components/src/NavigationBar/NavigationBar/Component.vue'

    export default {
        mixins: [
            NavigationBar
        ],
        props: {
            brand_section: {
                type: Object
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>