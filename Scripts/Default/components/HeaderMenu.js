/**
 * Created by jicemoon on 2016/12/8.
 */
(function () {
    var Name = "header-menu";
    var htmlUrl = "/Scripts/Default/components/HeaderMenu.html";
    var InitData = {
        name: Name,
        props: {
            "tab-menu":{
                type: Function,   //切换Menu的监听函数
                required: true
            },
            "root":Object
        }//,
        // data: function () {
        //     return {
        //         //currentView: ""
        //     }
        // },
        // // methods: {
        // //     TabMenu: function (current) {
        // //         this.root.currentView = current;
        // //         //this.$emit("tab", current);
        // //     }
        // // }
    };
    Utils.RegistrationComponents(Name, InitData, htmlUrl);
})();