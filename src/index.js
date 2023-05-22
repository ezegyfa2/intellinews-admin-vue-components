export default {
	install(Vue) {
		require('blue-admin-vue-components').default.install(Vue)

		require('./Templates/templateRegister').default.install()
		require('./FilterFormItems/register').default.install(Vue)

		registerVueComponent(
			'intellinews-admin-page', 
			require('./AdminPage/Component.vue').default, 
			Vue,
			'intellinews-admin-vue-components/src/AdminPage/Component.vue'
		);

		registerVueComponent(
			'intellinews-admin-admin-form',
			require('./Forms/AdminForm/Component.vue').default,
			Vue,
			'intellinews-admin-vue-components/src/Forms/AdminForm/Component.vue'
		);

		registerVueComponent(
			'intellinews-admin-form',
			require('./Forms/Form/Component.vue').default,
			Vue,
			'intellinews-admin-vue-components/src/Forms/Form/Component.vue'
		);

		registerVueComponent(
            'form-item-with-order',
            require('./FilterFormItems/FormItemWithOrder/Component.vue').default,
            Vue,
            'intellinews-admin-vue-components/src/FilterFormItems/FormItemWithOrder/Component.vue'
        );

		registerVueComponent(
			'intellinews-admin-sidebar',
			require('./Sidebar/Sidebar/Component.vue').default,
			Vue,
			'intellinews-admin-vue-components/src/Sidebar/Sidebar/Component.vue'
		);

		registerVueComponent(
			'intellinews-admin-table',
			require('./Table/Table/Component.vue').default,
			Vue,
			'intellinews-admin-vue-components/src/Table/Table/Component.vue'
		);

		registerVueComponent(
            'intellinews-admin-table-with-edit-buttons',
            require('./Table/TableWithEditButtons/Component.vue').default,
            Vue,
            'intellinews-admin-vue-components/src/Table/TableWithEditButtons/Component.vue'
        );

		registerVueComponent(
            'intellinews-admin-create-button',
            require('./Table/CreateButton/Component.vue').default,
            Vue,
            'intellinews-admin-vue-components/src/Table/CreateButton/Component.vue'
        );

		registerVueComponent(
            'intellinews-admin-pagination',
            require('./Pagination/Pagination/Component.vue').default,
            Vue,
            'intellinews-admin-vue-components/src/Pagination/Pagination/Component.vue'
        );

		registerVueComponent(
            'intellinews-admin-pagination-item',
            require('./Pagination/Item/Component.vue').default,
            Vue,
            'intellinews-admin-vue-components/src/Pagination/Item/Component.vue'
        );

		registerVueComponent(
            'intellinews-admin-edit-icon-link',
            require('./Table/IconLinks/EditIconLink/Component.vue').default,
            Vue,
            'intellinews-admin-vue-components/src/Table/IconLinks/EditIconLink/Component.vue'
        );
	}
}