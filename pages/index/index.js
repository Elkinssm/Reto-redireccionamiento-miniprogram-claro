my.hideLoading();

var app = getApp();

Page({
  onLoad() {
    //Mostrar un spinner de carga
    my.showLoading({
      content: "Cargando..."
    });

    //No mostrar el spinner luego de 2000ms
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
