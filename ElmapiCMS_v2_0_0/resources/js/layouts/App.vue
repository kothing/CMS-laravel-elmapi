<template>
    <div class="app__container flex h-screen bg-gray-50">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-1 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

        <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="app__sidebar fixed z-10 inset-y-0 left-0 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 text-white">
            <div class="flex flex-col justify-between h-screen">
                <div class="flex-item">
                    <div class="app__brand text-center">
                        <brand />
                    </div>
                    <nav class="app__main-menu mt-6">
                        <router-link 
                            :to="{name: 'home'}" 
                            :exact-active-class="'bg-gray-700'" 
                            class="app__main-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm"
                        >
                            <i class="fas fa-tv"></i>
                            <div class="text-xs mt-2">Dashboard</div>
                        </router-link>
    
                        <div v-if="isProjectPage" class="app__sub-menu bg-gray-800">
                            <router-link 
                                v-if="checkRole(['admin'+$route.params.project_id])" 
                                :to="$route.params.col_id ? {
                                    name: 'projects.collections.show', 
                                    params: { project_id: $route.params.project_id, col_id: $route.params.col_id }
                                } : {
                                    name: 'projects.collections', 
                                    params: { project_id: $route.params.project_id }
                                }"
                                :active-class="'bg-gray-700'" 
                                class="app__sub-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm"
                            >
                                <i class="fas fa-table"></i>
                                <div class="text-xs mt-2">Collections</div>
                            </router-link>
                            <router-link 
                                :to="$route.params.col_id ? {
                                        name: 'projects.content.list', 
                                        params: { project_id: $route.params.project_id, col_id: $route.params.col_id }
                                    } : {
                                        name: 'projects.content', 
                                        params: { project_id: $route.params.project_id }
                                    }"
                                :active-class="'bg-gray-700'"
                                class="app__sub-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm"
                            >
                                <i class="fas fa-edit"></i>
                                <div class="text-xs mt-2">Content</div>
                            </router-link>
                            <router-link 
                                v-if="checkRole(['super_admin'])"
                                :to="{name: 'projects.settings.webhooks', params: { project_id: $route.params.project_id }}" 
                                :active-class="'bg-gray-700'"  
                                class="app__sub-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm"
                            >
                                <i class="fas fa-network-wired"></i>
                                <div class="text-xs mt-2">Webhooks</div>
                            </router-link>
                            <router-link 
                                v-if="checkRole(['super_admin'])"
                                :to="{name: 'projects.settings', params: { project_id: $route.params.project_id }}"
                                :exact-active-class="'bg-gray-700'"
                                class="app__sub-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm"
                            >
                                <i class="fas fa-cog"></i>
                                <div class="text-xs mt-2">Settings</div>
                            </router-link>
                        </div>
                    </nav>
                </div>
                <div class="app__footer-menu bottom-0">
                    <router-link 
                        :to="{ name: 'profile' }" 
                        :active-class="'bg-gray-700'" 
                        class="app__footer-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm cursor-pointer"
                    >
                        <i class="fas fa-user"></i>
                        <div class="text-xs mt-2">My Profile</div>
                    </router-link>
                    <div 
                        @click="logout()" 
                        class="app__footer-menu-item text-md my-2 px-8 py-3 text-center block hover:bg-gray-700 rounded-sm cursor-pointer"
                    >
                        <i class="fas fa-sign-out-alt"></i>
                        <div class="text-xs mt-2">Logout</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="app__content flex-1 flex flex-col overflow-hidden">
             <header class="flex items-center py-1 px-3 bg-white border-b border-gray-200 lg:hidden">
                <div class="m-r-2 flex items-center">
                    <button @click="sidebarOpen = !sidebarOpen" class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-x-hidden">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Brand from './Brand.vue'
import UiDropdown from '../UI/Dropdown.vue'
import checkRole from '../checkrole'
import store from '../store'

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
            var path = this.$route.fullPath.split('/')[1];
            if(path == 'projects'){
                return true;
            }
            return false;
        }
    }
}
</script>
