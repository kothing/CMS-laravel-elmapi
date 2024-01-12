<template>
  <div class="admin__project-content h-full relative overflow-hidden">
    <project-header :project="project" class="bg-white"></project-header>
    <div class="w-96 h-full pt-20 bg-white overflow-x-hidden">
      <content-sidebar :project="project" class="h-full"></content-sidebar>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "../_Sections_/ProjectHeader.vue";
import ContentSidebar from "./_Sections_/ContentSidebar.vue";

export default {
  components: {
    ProjectHeader,
    ContentSidebar,
  },

  data() {
    return {
      project: {},
    };
  },

  methods: {
    getProject() {
      axios
        .get("/admin/content/project/" + this.$route.params.project_id)
        .then((response) => {
          this.project = response.data;
        });
    },
  },

  mounted() {
    this.getProject();
  },
};
</script>
