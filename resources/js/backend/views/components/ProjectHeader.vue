<template>
    <div class="admin__project-header w-full p-4 border-b bg-white an__sticky top-0 z-1">
        <div class="flex items-center">
            <span class="pr-4">
                <router-link :to="{ name: 'projects' }">
                    <i class="fas fa-home"></i>
                </router-link>
            </span>
            <span class="pr-4">
                <router-link :to="{ name: 'projects.index', params: { project_id: project.id } }">
                    Project
                </router-link>
            </span>
            <span class="pr-4" v-if="isProjectPage">
                <router-link
                    v-if="getPageType === 'collections' && checkRole(['admin' + $route.params.project_id])"
                    :to="{
                        name: 'projects.collections',
                        params: { project_id: $route.params.project_id },
                    }"
                >
                    <i>/</i> Collections
                </router-link>
                <router-link
                    v-if="getPageType === 'content'"
                    :to="{
                        name: 'projects.content',
                        params: { project_id: $route.params.project_id },
                    }"
                >
                    <i>/</i> Content
                </router-link>
                <router-link
                    v-if="getPageType === 'settings' && checkRole(['super_admin'])"
                    :to="{
                        name: 'projects.settings',
                        params: { project_id: $route.params.project_id },
                    }"
                >
                    <i>/</i> Settings
                </router-link>
            </span>
        </div>
        <div class="flex flex-col">
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

    computed: {
        isProjectPage() {
            const fullPath = this.$route.fullPath;
            const projectPath = "/project/";
            if (
                fullPath.includes(projectPath) &&
                fullPath.length > projectPath.length
            ) {
                return true;
            }
            return false;
        },
        getPageType() {
            const hasPathSplit = location.hash.split("/");
            const level1Page = hasPathSplit[0] || null;
            const level2Page = hasPathSplit[3] || null;
            if(level1Page && level2Page) {
                return level2Page;
            }
            return level1Page;
        }
    },
};
</script>
