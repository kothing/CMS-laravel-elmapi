<template>
    <div class="h-full relative overflow-hidden">
        <project-header :project="project" class="bg-white"></project-header>
        
        <div class="flex h-full pt-20 overflow-hidden">
            <div class="w-3/12 overflow-x-hidden h-full bg-white">
                <content-sidebar :project="project"></content-sidebar>
            </div>
    
            <div class="w-9/12 p-4 overflow-x-auto">
                <content-table v-if="$route.params.col_id !== undefined" :collection_id="parseInt($route.params.col_id)"></content-table>
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectHeader from '../../../[components]/ProjectHeader.vue'
    import ContentSidebar from './[sections]/ContentSidebar.vue'
    import ContentTable from './[sections]/ContentTable.vue'

    export default {
        components: {
            ProjectHeader,
            ContentSidebar,
            ContentTable
        },

        data(){
            return {
                project: {},
            }
        },

        methods: {
            getProject(){
                axios.get('/admin/content/project/'+this.$route.params.project_id).then((response) => {
                    this.project = response.data;
                });
            },
        },

        mounted(){
            this.getProject();
        },
    }
</script>