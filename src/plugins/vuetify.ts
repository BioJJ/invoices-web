import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0177fb',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#ff3e3b',
        red: '#ff3e3b',
        info: '#2196F3',
        success: '#5dd34a',
        green: '#5dd34a',
        warning: '#FFC107',
        white: '#FFF',
        bluesky: '#0177fb',
        pgcblue: '#133896',
        orange: '#f0582e',
        newgray: '#666',
      },
    },
  },
});
