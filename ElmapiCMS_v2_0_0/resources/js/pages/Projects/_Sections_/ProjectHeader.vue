<template>
    <div class="app__project-common-header fixed w-full flex p-4 border-b bg-white">
        <!--<span class="flex items-center pr-4">-->
        <!--    <router-link :to="{name: 'home'}">-->
        <!--        <i class="fas fa-arrow-left"></i>-->
        <!--    </router-link>-->
        <!--</span>-->
        <div class="w-full">
            <router-link :to="{name: 'projects', params: { project_id: project.id }}">
                <div class="text-xl font-bold">
                    Project: {{ project.name }}
                </div>
            </router-link>
            <div class="text-sm">{{ project.description }}</div>
        </div>
        <!--<div class="flex items-center">-->
        <!--    <router-link -->
        <!--        v-if="typeof project.id !== 'undefined' && checkRole(['admin'+project.id])" -->
        <!--        :to="{name: 'projects.settings', params: { project_id: project.id }}" -->
        <!--        :exact-active-class="'bg-none'" -->
        <!--        class="text-xl text-gray-600 cursor-pointer"-->
        <!--    >-->
        <!--        <i class="fas fa-cog"></i>-->
        <!--    </router-link>-->
        <!--</div>-->
    </div>
</template>

<script>
import checkRole from '../../../checkrole'

export default {
    props: ['project'],

    methods: {
        checkRole
    }
}
</script>