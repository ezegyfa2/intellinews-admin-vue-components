<script>
    import Pagination from '../../../../helper-vue-components/src/Pagintation/BootstrapPagination/Pagination/Component.vue'

    export default {
        mixins: [
            Pagination,
        ],
        props: {
            item_type: {
                type: String,
                default: 'intellinews-admin-pagination-item'
            }
        }
    }
</script>
