<template>
    <div class="flex flex-col justify-between h-screen">
        <div class="flex-item">
            <div class="admin__brand text-center">
                <brand size="md" mode="light" imgclass="w-20"></brand>
            </div>
            <nav class="admin__main-menu mt-4">
                <router-link 
                    :to="{name: 'dashboard'}" 
                    :exact-active-class="'bg-gray-700'" 
                    class="admin__main-menu-item flex flex-nowrap items-center my-2 px-8 py-4 block hover:bg-gray-700"
                >
                    <i class="admin__menu-item-icon pr-4 fas fa-tv"></i>
                    <span class="text-xs">Dashboard</span>
                </router-link>
                <router-link 
                    :to="{name: 'projects'}" 
                    :active-class="'bg-gray-700'"
                    class="admin__main-menu-item flex flex-nowrap items-center my-2 px-8 py-4 block hover:bg-gray-700"
                >
                    <i class="admin__menu-item-icon pr-4 fas fa-list"></i>
                    <span class="text-xs">Projects</span>
                </router-link>
                <div v-if="isProjectPage" class="admin__sub-menu pl-10 bg-gray-800">
                    <router-link 
                        v-if="checkRole(['admin'+$route.params.project_id])" 
                        :to="{name: 'projects.collections', params: { project_id: $route.params.project_id }}"
                        :active-class="'bg-gray-700'" 
                        class="admin__sub-menu-item flex flex-nowrap items-center px-6 py-4 block hover:bg-gray-700"
                    >
                        <i class="admin__menu-item-icon pr-4 fas fa-table"></i>
                        <span class="text-xs">Collections</span>
                    </router-link>
                    <router-link 
                        :to="{ name: 'projects.content', params: { project_id: $route.params.project_id }}"
                        :active-class="'bg-gray-700'"
                        class="admin__sub-menu-item flex flex-nowrap items-center px-6 py-4 block hover:bg-gray-700"
                    >
                        <i class="admin__menu-item-icon pr-4 fas fa-edit"></i>
                        <span class="text-xs">Content</span>
                    </router-link>
                    <router-link 
                        v-if="checkRole(['super_admin'])"
                        :to="{name: 'projects.settings', params: { project_id: $route.params.project_id }}"
                        :active-class="'bg-gray-700'"
                        class="admin__sub-menu-item flex flex-nowrap items-center px-6 py-4 block hover:bg-gray-700"
                    >
                        <i class="admin__menu-item-icon pr-4 fas fa-cog"></i>
                        <span class="text-xs">Settings</span>
                    </router-link>
                </div>
            </nav>
        </div>
        <div class="admin__footer-menu bottom-0">
            <router-link 
                :to="{ name: 'profile' }" 
                :active-class="'bg-gray-700'" 
                class="admin__footer-menu-item flex flex-nowrap items-center my-2 px-8 py-4 block hover:bg-gray-700 cursor-pointer"
            >
                <i class="admin__menu-item-icon pr-4 fas fa-user"></i>
                <span class="text-xs">My Profile</span>
            </router-link>
            <div 
                @click="logout()" 
                class="admin__footer-menu-item flex flex-nowrap items-center my-2 px-8 py-4 block hover:bg-gray-700 cursor-pointer"
            >
                <i class="admin__menu-item-icon pr-4 fas fa-sign-out-alt"></i>
                <span class="text-xs">Logout</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Brand from './Brand.vue';
    import UiDropdown from './Dropdown.vue';
    import checkRole from '../utils/checkrole';
    import store from '../store';

    export default {
        components: {
            Brand,
            UiDropdown
        },
        data() {
            return {
                sidebarOpen: false,
            }
        },

        methods: {
            checkRole,

            logout() {
                store.commit('LOGOUT');

                axios.post('/logout').then(response => {
                    location.reload();
                }).catch(error => {
                    location.reload();
                });
            },
        },

        computed: {
            isProjectPage() {
                const fullPath = this.$route.fullPath;
                const projectPath = '/projects/';
                if(fullPath.includes(projectPath) && fullPath.length > projectPath.length) {
                    return true;
                }
                return false;
            }
        }
    }
</script>