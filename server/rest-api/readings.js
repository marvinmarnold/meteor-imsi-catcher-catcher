// Global API configuration
var Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

// Maps to: /api/articles/:id
Api.addRoute('readings/insert', {authRequired: false}, {
  post: function () {
    console.log(this.bodyParams);
    return {status: 'success', data: {message: 'Reading pretend inserted'}};
  },
});
