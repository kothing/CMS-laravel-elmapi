<template>
    <div class="app__content-media-library h-full relative overflow-hidden">
        <project-header :project="project" class="bg-white"></project-header>
        
        <div class="flex h-full pt-20 overflow-hidden">
            <div class="w-3/12 overflow-x-hidden h-full bg-white">
                <content-sidebar :project="project"></content-sidebar>
            </div>
            <div class="w-9/12 p-4 overflow-x-auto">
                <media-library :project="project"></media-library>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectHeader from '../_Sections_/ProjectHeader'
import MediaLibrary from '../_Sections_/MediaLibrary.vue'
import ContentSidebar from './_Sections_/ContentSidebar.vue'

export default {
    components: {
        ProjectHeader,
        ContentSidebar,
        MediaLibrary,
    },

    data(){
        return {
            project: {},
        }
    },

    methods: {
        getProject(){
            axios.get('/admin/projects/'+this.$route.params.project_id).then((response) => {
                this.project = response.data;
            });
        },
    },

    mounted(){
        this.getProject();
    },
}
</script>