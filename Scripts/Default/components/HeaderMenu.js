/**
 * Created by jicemoon on 2016/12/8.
 */
(function (){
  var Name = "header-menu";
  var htmlUrl = "/Scripts/Default/components/HeaderMenu.html";
  var InitData = {
    name: Name,
    data: function () {
      return {
        currentView:""
      }
    },
    methods:{
      TabMenu: function (current){
        this.currentView = current;
        this.$emit("tab", current);
      }
    }
  };
  Utils.RegistrationComponents(Name, InitData, htmlUrl);
})();