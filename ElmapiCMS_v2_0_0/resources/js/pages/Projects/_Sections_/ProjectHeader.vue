<template>
    <div class="app__project-common-header fixed w-full flex p-4 border-b bg-white">
        <span class="flex items-center pr-4">
            <router-link :to="{name: 'projects.index', params: { project_id: project.id }}">
                <i class="fas fa-arrow-left"></i>
            </router-link>
        </span>
        <div class="w-full">
            <div class="text-xl font-bold">
                Project: {{ project.name }}
            </div>
            <div class="text-sm">{{ project.description }}</div>
        </div>
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