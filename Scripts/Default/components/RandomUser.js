/**
 * Created by jicemoon on 2016/12/8.
 */
(function () {
    var option = {name: "", htmlUrl: "", data: undefined};
    option.name = "random-user";
    option.htmlUrl = "/Scripts/Default/components/RandomUser.html";
    option.data = {
        data: function () {
            var nationalities = {
                "ALL": "全部", 'AU': "澳大利亚",
                'BR': "巴西", 'CA': "加拿大",
                'CH': "瑞士", 'DE': "德国", 'DK': "丹麦",
                'ES': "西班牙", 'FI': "芬兰", 'FR': "法国",
                'GB': "英国", 'IE': "爱尔兰", 'IR': "伊朗" ,
                'NL': "荷兰", 'NZ': "新西兰", 'TR': "土耳其",
                'US': "美国"
            };
            return {
                userList: [],
                resultNum: 1,
                nationalities: nationalities,
                nationality: "ALL",
                gender: "ALL",
                isMore: false,
                IsLoading: false
            };
        },
        methods: {
            GetData: function () {
                var that = this;
                that.IsLoading = true;
                var opt = {results: this.resultNum};
                if(this.isMore){
                    this.gender != "ALL" && (opt.gender = this.gender);
                    this.nationality != "ALL" && (opt.nat = this.nationality);
                }
                $.getJSON("https://api.randomuser.me/", opt).then(function (data) {
                    if (data.results && data.results.length > 0) {
                        data.results.forEach(function (user, idx, arr) {
                            that.userList.push({
                                id: user.id.value,
                                name: user.name.first + ' ' + user.name.last,
                                phone: user.phone,
                                picture: user.picture.thumbnail,
                                nat: user.nat,
                                email: user.email,
                                gender: user.gender
                            });
                        });
                    }
                    that.IsLoading = false;
                });
            },
            deleteUser: function (idx) {
                this.userList.splice(idx, 1);
            }
        },
        created: function () {
            //加载一次
            this.GetData();
        }
    };
    Utils.RegistrationComponents(option);
})();