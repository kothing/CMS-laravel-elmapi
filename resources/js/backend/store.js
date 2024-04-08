import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        user: {},
        columnSettings: []
    }
  }
  
const store = new Vuex.Store({
    state: {
        user: {},
        settings: {},
        columnSettings: []
    },
    mutations: {
        UPDATE_USER: (state, user) => {
            state.user = user;
        },
        UPDATE_SETTINGS:(state, settings) => {
            state.settings = settings;
        },
        SET_COLUMNS: (state, obj) => {
            state.columnSettings.push(obj);
        },
        UPDATE_COLUMN: (state, obj) => {
            state.columnSettings.find(o => (o.collection_id === obj.collection_id)).columns = obj.columns;
        },
        LOGOUT: (state) => {
            Object.assign(state, getDefaultState())
        }
    },
    actions: {
        async getUser({commit}) {
            return await axios
                .get('admin/user')
                .then((response) => { commit('UPDATE_USER', response.data) });
        },
        async getSettings({commit}) {
            return await axios
                .get('admin/settings')
                .then((response) => { commit('UPDATE_SETTINGS', response.data) });
        },
        setColumns({commit}, obj){
            commit('SET_COLUMNS', obj)
        },
        updateColumn({commit}, obj){
            commit('UPDATE_COLUMN', obj)
        }
    },
    getters: {
        user: state => state.user,
        settings: state => state.settings,
        columnSettings: state => state.columnSettings,
    }
})

export default store;