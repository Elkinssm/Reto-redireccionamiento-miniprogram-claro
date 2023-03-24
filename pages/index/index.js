my.hideLoading();

var app = getApp();

Page({
  onLoad() {
    my.showLoading({
      content: "Cargando..."
    });

    setTimeout(() => {
      my.hideLoading();
    }, 2000);
  },

  data: {
    nombre: app.globalData.nombre,

    fecha: app.globalData.fecha,

    edad: app.globalData.edad,

    google: false,

    facebook: false
  },

  google: function(e) {
    this.setData({ google: true });
  },

  facebook: function(e) {
    this.setData({ facebook: true });
  }
});
