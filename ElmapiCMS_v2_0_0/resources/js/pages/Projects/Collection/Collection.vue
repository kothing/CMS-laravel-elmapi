<template>
    <div class="app__project-collection h-full relative overflow-hidden">
        <project-header :project="project" class="bg-white"></project-header>
        
        <div class="w-96 h-full pt-20 bg-white overflow-x-hidden">
            <collection-sidebar :project="project"></collection-sidebar>
        </div>
    </div>
</template>

<script>
import ProjectHeader from '../_Sections_/ProjectHeader'
import CollectionSidebar from './_Sections_/CollectionSidebar'

export default {
    components: {
        CollectionSidebar,
        ProjectHeader
    },

    data(){
        return {
            project: {},
        }
    },

    methods: {
        getProject(){
            axios.get('/admin/collections/project/'+this.$route.params.project_id).then((response) => {
                this.project = response.data;
            });
        },
    },

    mounted(){
        this.getProject();
    },
}
</script>