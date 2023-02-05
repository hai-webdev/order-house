// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/nav";

const filterTop = $(".filter-container").offset().top;
$(window).scroll(function(){
    if($(window).scrollTop() > filterTop){
        $(".filter-container").addClass("on")
    }else {
        $(".filter-container").removeClass("on")
    }
})