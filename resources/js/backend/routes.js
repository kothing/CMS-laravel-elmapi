import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const Dashboard = () => import(/* webpackChunkName: "backend.dashboard" */ "./views/Dashboard");
const Profile = () => import(/* webpackChunkName: "backend.profile" */ "./views/Profile");
const Projects = () => import(/* webpackChunkName: "backend.projects" */ "./views/Projects");
const ProjectIndex = () => import(/* webpackChunkName: "project.index" */ "./views/Project/Index");
const ProjectCollectionIndex = () => import(/* webpackChunkName: "project.collection" */ "./views/Project.Collection/CollectionIndex");
const ProjectCollectionList = () => import(/* webpackChunkName: "project.collection.list" */ "./views/Project.Collection/CollectionList");
const ProjectContentIndex = () => import(/* webpackChunkName: "project.content" */ "./views/Project.Content/ContentIndex");
const ProjectContentList = () => import(/* webpackChunkName: "project.content.list" */ "./views/Project.Content/List");
const ProjectContentNew = () => import(/* webpackChunkName: "project.content.new" */ "./views/Project.Content/New");
const ProjectContentEdit = () => import(/* webpackChunkName: "project.content.edit" */ "./views/Project.Content/Edit");
const ProjectContentForms = () => import(/* webpackChunkName: "project.content.forms" */ "./views/Project.Content/Forms");
const ProjectContentFormsDetail = () => import(/* webpackChunkName: "project.content.forms.detail" */ "./views/Project.Content/FormsDetail");
const ProjectContentMedia = () => import(/* webpackChunkName: "project.content.media" */ "./views/Project.Content/Media");
const ProjectSettingsIndex = () => import(/* webpackChunkName: "project.settings" */ "./views/Project.Settings/SettingsIndex");
const ProjectSettingsLocales = () => import(/* webpackChunkName: "project.settings.locales" */ "./views/Project.Settings/Locales");
const ProjectSettingsUsers = () => import(/* webpackChunkName: "project.settings.users" */ "./views/Project.Settings/Users");
const ProjectSettingsAPI = () => import(/* webpackChunkName: "project.settings.api" */ "./views/Project.Settings/API");
const ProjectSettingsWebhooks = () => import(/* webpackChunkName: "project.settings.webhooks" */ "./views/Project.Settings/Webhooks");
const ProjectSettingsWebhookLogs = () => import(/* webpackChunkName: "project.settings.webhookslogs" */ "./views/Project.Settings/WebhookLogs");


/**
 * Routes
 */
const routes = [
    { path: "/", name: "dashboard", component: Dashboard },
    { path: "/profile", name: "profile", component: Profile },
    { path: "/projects/", name: "projects", component: Projects },
    {
        path: "/project/:project_id",
        name: "projects.index",
        component: ProjectIndex,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/collections",
        name: "projects.collections",
        component: ProjectCollectionIndex,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (!roles.includes("admin" + to.params.project_id)) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/collections/:col_id",
        name: "projects.collections.list",
        component: ProjectCollectionList,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (!roles.includes("admin" + to.params.project_id)) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/content",
        name: "projects.content",
        component: ProjectContentIndex,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/content/:col_id",
        name: "projects.content.list",
        component: ProjectContentList,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/content/:col_id/new",
        name: "projects.content.new",
        component: ProjectContentNew,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/content/:col_id/edit/:content_id",
        name: "projects.content.edit",
        component: ProjectContentEdit,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/content/:col_id/forms",
        name: "projects.content.forms",
        component: ProjectContentForms,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/content/:col_id/forms/:form_id",
        name: "projects.content.forms.detail",
        component: ProjectContentFormsDetail,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/settings",
        name: "projects.settings",
        component: ProjectSettingsIndex,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (!roles.includes("admin" + to.params.project_id)) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/settings/locales",
        name: "projects.settings.locales",
        component: ProjectSettingsLocales,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (!roles.includes("admin" + to.params.project_id)) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/settings/users",
        name: "projects.settings.users",
        component: ProjectSettingsUsers,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (!roles.includes("super_admin")) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/settings/api",
        name: "projects.settings.api",
        component: ProjectSettingsAPI,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (!roles.includes("super_admin")) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/settings/webhooks",
        name: "projects.settings.webhooks",
        component: ProjectSettingsWebhooks,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (!roles.includes("super_admin")) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/settings/webhooks/:webhook_id/logs",
        name: "projects.settings.webhooks.logs",
        component: ProjectSettingsWebhookLogs,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (!roles.includes("super_admin")) {
                return next("/");
            }

            return next();
        },
    },
    {
        path: "/project/:project_id/media_library",
        name: "projects.media_library",
        component: ProjectContentMedia,
        beforeEnter: (to, from, next) => {
            const roles = store.getters && store.getters.user.roles;

            if (roles.includes("super_admin")) {
                return next();
            }

            if (
                !roles.includes("admin" + to.params.project_id) &&
                !roles.includes("editor" + to.params.project_id)
            ) {
                return next("/");
            }

            return next();
        },
    },
];

const router = new VueRouter({
    routes: routes,
    linkExactActiveClass: "bg-gray-100",
});

router.beforeEach(async (to, from, next) => {
    const hasRoles = store.getters.user.roles && store.getters.user.roles.length > 0;

    if (hasRoles) {
        next();
    } else {
        await store.dispatch("getUser");
        next();
    }
});
export default router;
