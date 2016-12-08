/**
 * Created by jicemoon on 2016/12/8.
 */
(function () {
  var Name = "footer-public";
  var htmlUrl = "/Scripts/Default/components/Footer.html";
  var InitData = {
    name: Name,
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  };
  Utils.RegistrationComponents(Name, InitData, htmlUrl);
})();