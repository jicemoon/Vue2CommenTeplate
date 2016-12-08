/**
 * Created by jicemoon on 2016/12/8.
 */
new Vue({
  el: "#root",
  data: function (){
    return {
      labelList:[{label:"jicemoon", percent: 50}],
      currentView: ""
    };
  },
  methods: {
    labelSuccess: function (label, type) {
      console.log(type, label);
      console.log(this.labelList);
    },
    labelFail: function (message, type) {
      alert(message);
    },
    TabMenu: function (compName){
      this.currentView = compName;
    }
  }
});