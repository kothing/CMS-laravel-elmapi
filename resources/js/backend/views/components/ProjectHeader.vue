<template>
    <div class="admin__project-header w-full flex p-4 border-b bg-white an__sticky top-0 z-1">
        <span class="flex items-center pr-4">
            <router-link :to="{ name: 'projects' }">
                <i class="fas fa-arrow-left"></i>
            </router-link>
        </span>
        <div class="flex-1">
            <div class="text-xl font-bold">
                <router-link :to="{ name: 'projects.index', params: { project_id: project.id } }">
                    Project: {{ project.name }}
                </router-link>
            </div>
            <div class="text-sm">{{ project.description }}</div>
        </div>
    </div>
</template>

<script>
import checkRole from "../../../utils/checkrole";

export default {
    props: ["project"],

    methods: {
        checkRole,
    },
};
</script>
