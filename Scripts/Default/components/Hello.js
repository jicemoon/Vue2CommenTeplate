/**
 * Created by jicemoon on 2016/12/8.
 */
(function (){
  var Name = "hello";
  var htmlUrl = "/Scripts/Default/components/Hello.html";
  var InitData = {
    name: Name,
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App, Created by Vue-CLI'
      }
    }
  };
  Utils.RegistrationComponents(Name, InitData, htmlUrl);
})();