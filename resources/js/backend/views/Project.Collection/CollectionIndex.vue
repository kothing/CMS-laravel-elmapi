<template>
    <div class="admin__project-collection h-screen relative overflow-x-hidden">
        <project-header :project="project"></project-header>

        <div class="w-96 pt-4 bg-white">
            <collection-sidebar :project="project"></collection-sidebar>
        </div>
    </div>
</template>

<script>
import ProjectHeader from "../components/ProjectHeader.vue";
import CollectionSidebar from "./sections/CollectionSidebar.vue";

export default {
    components: {
        CollectionSidebar,
        ProjectHeader,
    },

    data() {
        return {
            project: {},
        };
    },

    methods: {
        getProject() {
            axios.get("/admin/collections/project/" + this.$route.params.project_id).then((response) => {
                this.project = response.data;
            });
        },
    },

    mounted() {
        this.getProject();
    },
};
</script>
