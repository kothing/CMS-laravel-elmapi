<template>
    <div class="app__project-centre h-full overflow-auto">
        <div class="w-full relative m-auto">
            <project-header :project="project" class="mb-3"></project-header>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 pt-24">
                <div class="col p-4" v-if="checkRole(['admin'+project.id])">
                    <div class="inline-flex mb-5">
                        <div class="mr-4 text-gray-100 bg-yellow-900 rounded-md text-xl p-4 h-full items-center content-center"><i class="fas fa-table"></i></div>
                        <div>
                            <h3 class="font-bold text-lg">Set up Collections</h3>
                            <div class="text-sm">Add new collections to your projects, edit fields to create your schema.</div>
                        </div>
                    </div>

                    <collection-sidebar :project="project" class="shadow-md rounded-md"></collection-sidebar>
                </div>
                <div class="col p-4">
                    <div class="inline-flex mb-5">
                        <div class="mr-4 text-gray-100 bg-green-400 rounded-md text-xl p-4 h-full items-center content-center"><i class="fas fa-edit"></i></div>
                        <div>
                            <h3 class="font-bold text-lg">Create Content</h3>
                            <div class="text-sm">Using the collection schema structure create content for your project.</div>
                        </div>
                    </div>

                    <content-sidebar :project="project" class="shadow-md rounded-md"></content-sidebar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectHeader from './_Sections_/ProjectHeader'
import CollectionSidebar from './Collection/_Sections_/CollectionSidebar'
import ContentSidebar from './Content/_Sections_/ContentSidebar'
import checkRole from '../../checkrole'

export default {
    components: {
        ProjectHeader,
        CollectionSidebar,
        ContentSidebar
    },

    data(){
        return {
            project: {},
        }
    },

    methods: {
        checkRole,

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