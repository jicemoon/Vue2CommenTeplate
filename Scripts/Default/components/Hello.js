/**
 * Created by jicemoon on 2016/12/8.
 */
(function () {
    var option = {name:"", htmlUrl:"", data: undefined};
    option.name = "hello";
    option.htmlUrl = "/Scripts/Default/components/Hello.html";
    option.data = {
        data: function () {
            return {
                msg: 'Welcome to Your Vue.js App, Created by Vue-CLI'
            }
        }
    };
    Utils.RegistrationComponents(option);
})();