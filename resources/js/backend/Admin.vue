<template>
    <div class="admin__container flex h-screen bg-gray-50">
        <div 
            :class="sidebarOpen ? 'block' : 'hidden'" 
            @click="sidebarOpen = false" 
            class="fixed z-1 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
        ></div>

        <div 
            :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" 
            class="admin__sidebar w-64 fixed z-10 inset-y-0 left-0 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 text-white"
        >
            <sidebar></sidebar>
        </div>

        <div class="admin__content flex-1 flex flex-col">
             <header class="admin__content-header flex items-center py-1 px-3 bg-white border-b border-gray-200 lg:hidden">
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
    import Sidebar from './[components]/Sidebar.vue';

    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                sidebarOpen: false,
            }
        },
    }
</script>
