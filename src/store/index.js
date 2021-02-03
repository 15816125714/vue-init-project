import Vue from "vue";
import Vuex from 'vuex';

const modules = {};
const context = require.context("../modules", true, /store\/index\.js$/);
context.keys().forEach((key) => {
  const replaceModule = key.replace(/^\.\/|\/store\/index\.js$/g, '');
  modules[replaceModule] = {
    namespaced: true,
    ...context(key).default,
  }
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  mutations: {
    commit(state, { namespace, key, value }) {
      state[namespace][key] = value;
    },
    merge(state, { namespace, key }) {
      Object.assign(state[namespace], key);
    },
  },
  strict: true,
});

Vue.prototype.$commit = function(namespace, key, value) {
  if (typeof namespace === 'string') {
    if (arguments.length === 2) {
      this.$store.commit(`merge`, { namespace, key });
    } else {
      this.$store.commit(`commit`, { namespace, key, value });
    }
  }
};
