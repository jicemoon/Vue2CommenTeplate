/**
 * Created by jicemoon on 2016/12/8.
 */
if(!Utils){
  var Utils = {};
}
(function (){
  Utils.RootFolder = "/Vue2Test";
  Utils.RegistrationComponents = function (name, data, htmlUrl){
    Vue.component(name, function (resolve, reject) {
      if(htmlUrl){
        $.get(Utils.RootFolder + htmlUrl).done(function (template) {
          data.template = template;
          resolve && resolve(data);
        });
      }
      else{
        resolve && resolve(data);
      }
    });
  }
})();