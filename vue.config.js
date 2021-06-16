module.exports = {
  devServer: {
    port: 3030,
    proxy: 'https://invoices-api-deploy.herokuapp.com/api/',
  },
  transpileDependencies: ['vuetify'],
};
