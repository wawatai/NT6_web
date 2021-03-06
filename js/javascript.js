//時間列
// function currentTime() {
//     now = new Date();
//     yy = now.getFullYear();
//     mm = now.getMonth() + 1;
//     dd = now.getDate();
//     h = now.getHours();
//     m = now.getMinutes();
//     s = now.getSeconds();
//     var curTime = document.getElementsByClassName('time');
//     curTime[0].innerHTML = '現在時間: '+yy+'年 '+mm+'月 '+dd+'日 '+h+':'+m+':'+ s;
//     setTimeout('currentTime()',1000);
// }

//topGameList 滑入彈出效果
$(function() {
    $(".topGameList").mouseleave(function(){
        $(".topGameList").removeClass("display");
    })

    $('.sportBtn').mouseenter(function(){
        $('.topGameList,.topGameList .sport').addClass('display');
        $('.topGameList .sport').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.liveBtn').mouseenter(function(){
        $('.topGameList,.topGameList .live').addClass('display');
        $('.topGameList .live').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.slotBtn').mouseenter(function(){
        $('.topGameList,.topGameList .slot').addClass('display');
        $('.topGameList .slot').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.lotteryBtn').mouseenter(function(){
        $('.topGameList,.topGameList .lottery').addClass('display');
        $('.topGameList .lottery').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.fishBtn').mouseenter(function(){
        $('.topGameList,.topGameList .fish').addClass('display');
        $('.topGameList .fish').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.boardBtn').mouseenter(function(){
        $('.topGameList,.topGameList .board').addClass('display');
        $('.topGameList .board').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
})

//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//slot下拉選單寬度+點擊滑動
// $(function(){
//     var slot = $('.listWrap .slot li');
//     var slotl = slot.length;
//     var slwp = $('.topGameList .slot');
//     $(slwp).css("width",""+220 * slotl+"");

//     var n = 0;
//     var nt = $('.listWrap .next');
//     var pv = $('.listWrap .prev');
//     $(nt).click(function(){
//         n ++;
//         $(slwp).css("transform","translateX("+(-220 * n)+"px)");

//         if(n == 1){
//             n --;
//         }
//     })
//     $(pv).click(function(){
//         n --;
//         $(slwp).css("transform","translateX("+(-220 * n)+"px)");

//         if(n == -1){
//             $(slwp).css("transform","translateX(0px)");
//             n ++;
//         }
//     })
// })

//.vipWrap .detailCardBox內選單滑動
$(function(){
    var vipCard = $('.detailCardBox ul');

    var n = 0;
    var nt = $('.detailCardBox .next');
    var pv = $('.detailCardBox .prev');
    $(nt).click(function(){
        n ++;
        $(vipCard).css("transform","translateX("+(-290 * n)+"px)");

        if(n == 5){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        $(vipCard).css("transform","translateX("+(-290 * n)+"px)");

        if(n == -1){
            $(vipCard).css("transform","translateX(0px)");
            n ++;
        }
    })
})

//header loginBtn click
$(function(){
    $('.loginBtn').click(function(){
        $('header .user.login').removeClass('display');
        $('header .user.alLogin').addClass('display');
        
        $('header .sportBtn').attr("onclick","window.location.href='./html/sportPage.html'");
        $('header .liveBtn').attr("onclick","window.location.href='./html/livePage.html'");
        $('header .slotBtn,.topGameList .slot li,.typeList .slot').attr("onclick","window.location.href='./html/slotPage.html'");
        $('header .lotteryBtn').attr("onclick","window.location.href='./html/lotteryPage.html'");
        $('header .fishBtn,.topGameList .fish li,.typeList .fish').attr("onclick","window.location.href='./html/fishPage.html'");
        $('header .boardBtn,.topGameList .board li,.typeList .board').attr("onclick","window.location.href='./html/boardPage.html'");
        $('header .event').attr("onclick","window.location.href='./html/event.html'");

        $('.topGameList .sport li,.typeList .sport').attr("onclick","openSportGame()");
        $('.topGameList .live li,.typeList .live').attr("onclick","openLiveGame()");
        $('.topGameList .lottery li,.typeList .lottery').attr("onclick","openLotteryGame()");
    })
})

//.transferInfo display
$(function(){
    $('.user.alLogin .total').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $(".login .forget").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetPassword').addClass('display');
    })

    $('.loginBtn,.openNews').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.news').addClass('display');
    })

    $('.changePassword button').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $('.changePhone').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.phoneWindow').addClass('display');
    })

    $(".waterBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.listWindow').addClass('display');
    })

    $('.eventBox .check,.eventBoxAl .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkEvent').addClass('display');
    })
    $('.eventBox .apply').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $('.sportPage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.sportGame').addClass('display');
    })
    $('.livePage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.liveGame').addClass('display');
    })
    $('.lotteryPage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.lotteryGame').addClass('display');
    })

    $(".pointWrap .open").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.pointWindow').addClass('display');
    })

    $(".registerWrap .send").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
    $(".registerWrap .check span").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })
})
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}
function openSportGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.sportGame').addClass('display');
}
function openLiveGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.liveGame').addClass('display');
}
function openSlotGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.slotGame').addClass('display');
}
function openLotteryGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.lotteryGame').addClass('display');
}
function openFishGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.fishGame').addClass('display');
}
function openBoardGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.boardGame').addClass('display');
}
function loading(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.loading').addClass('display');

    setTimeout(function(){
        $(".filter")
        .removeClass("display");
    },2000);
}

//gameWrap小遊戲格hover切換左大圖
// $(function(){
//     $(".livePage .btnBox li:eq(0)").hover(function(){
//         $(".livePage .mainImg").attr("src","../images/partner/live/liveBG_1.png")
//     })
//     $(".livePage .btnBox li:eq(1)").hover(function(){
//         $(".livePage .mainImg").attr("src","../images/partner/live/liveBG_2.png")
//     })
//     $(".livePage .btnBox li:eq(2)").hover(function(){
//         $(".livePage .mainImg").attr("src","../images/partner/live/liveBG_3.png")
//     })
//     $(".livePage .btnBox li:eq(3)").hover(function(){
//         $(".livePage .mainImg").attr("src","../images/partner/live/liveBG_4.png")
//     })
//     $(".livePage .btnBox li:eq(4)").hover(function(){
//         $(".livePage .mainImg").attr("src","../images/partner/live/liveBG_5.png")
//     })

//     $(".lotteryPage .btnBox li:eq(0)").hover(function(){
//         $(".lotteryPage .mainImg").attr("src","../images/partner/lottery/lotteryBG_1.png")
//     })
//     $(".lotteryPage .btnBox li:eq(1)").hover(function(){
//         $(".lotteryPage .mainImg").attr("src","../images/partner/lottery/lotteryBG_2.png")
//     })
//     $(".lotteryPage .btnBox li:eq(2)").hover(function(){
//         $(".lotteryPage .mainImg").attr("src","../images/partner/lottery/lotteryBG_3.png")
//     })
// })

//jumpWindow .new .content
$(function(){
    $('.news .nav .hot').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forHot').addClass('display');
        $('.forHot').siblings().removeClass('display');
    })
    $('.news .nav .normal').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forNormal').addClass('display');
        $('.forNormal').siblings().removeClass('display');
    })
    $('.news .nav .deposit').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forDeposit').addClass('display');
        $('.forDeposit').siblings().removeClass('display');
    })
})

//.gameList .love
$(function(){
    $('.gameList .love').click(function(){
        $(this).toggleClass('active');
    })
})
//slotBody li 切換
$(function(){
    $('.slotBody .nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})
//slotPage 遊戲展開
$(function(){
    $('.pfName .all').click(function(){
        $('.platforms').removeClass('display');
        $($(this).closest('.platforms')).addClass('display');
        $($(this).closest('.pfName').next('.gameList')).addClass('active');
        $($(this).closest('.pfName')).addClass('active');
    })

    $('.pfName .back').click(function(){
        $('.platforms').addClass('display');
        $('.pfName.active,.gameList.active').removeClass('active');
    })
})

//eventList+eventDetail 切換
$(function(){
    $('.eventBox .btnBox button').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail').addClass('display');
    })

    $('.eventDetail .back').click(function(){
        $('.eventList').addClass('display');
        $('.eventDetail').removeClass('display');
    })
})

//vipWrap切換
$(function(){
    $('.levelEnjoy .more').click(function(){
        $('.outMode').removeClass('display');
        $('.innerMode').addClass('display');
    })

    $('.detailTitle .back').click(function(){
        $('.outMode').addClass('display');
        $('.innerMode').removeClass('display');
    })
})

//.memberWrap 切換
$(function(){
    $('.memberWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.dataWrap').addClass('display');
        $('.dataWrap').siblings().removeClass('display');
    })

    $('.memberWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.platformWrap').addClass('display');
        $('.platformWrap').siblings().removeClass('display');
    })
})

//dealWrap
$(function(){
    $(".dealWrap .tabs li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".dealWrap .tabs li:eq(0)").click(function(){
        $(".dealBox").addClass("display");
        $(".dealBox").siblings().removeClass("display");
    })

    $(".dealWrap .tabs li:eq(1)").click(function(){
        $(".waterBox").addClass("display");
        $(".waterBox").siblings().removeClass("display");
    })
})

//mailWrap 切換
$(function(){
    $('.mailWrap .top a:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').addClass('display');
        $('.mailWrap .bottom.ann').removeClass('display');
    })
    $('.mailWrap .top a:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').removeClass('display');
        $('.mailWrap .bottom.ann').addClass('display');
    })

    $('.mailWrap .tabs li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.mailWrap .btnBox .edit').click(function(){
        $('.mailWrap .btnBox.nor').removeClass('display');
        $('.mailWrap .btnBox.edit').addClass('display');

        $(".mailWrap .list li").addClass("editing");
    })
    $('.mailWrap .btnBox .finish').click(function(){
        $('.mailWrap .btnBox.nor').addClass('display');
        $('.mailWrap .btnBox.edit').removeClass('display');

        $(".mailWrap .list li").removeClass("editing");
    })

    $('.mailWrap.outMode .list li').click(function(){
        $('.mailWrap.outMode').removeClass('display');
        $('.mailWrap.innerMode').addClass('display');
    })
    $('.mailWrap.innerMode .title button').click(function(){
        $('.mailWrap.outMode').addClass('display');
        $('.mailWrap.innerMode').removeClass('display');
    })

    $(".mailWrap .active .tabs li:eq(0)").click(function(){
        $(".mailWrap .active .system").addClass("display");
        $(".mailWrap .active .system").siblings("ul").removeClass("display");
    })
    $(".mailWrap .active .tabs li:eq(1)").click(function(){
        $(".mailWrap .active .personal").addClass("display");
        $(".mailWrap .active .personal").siblings("ul").removeClass("display");
    })

    $(".mailWrap .ann .tabs li:eq(0)").click(function(){
        $(".mailWrap .ann .hot").addClass("display");
        $(".mailWrap .ann .hot").siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li:eq(1)").click(function(){
        $(".mailWrap .ann .nor").addClass("display");
        $(".mailWrap .ann .nor").siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li:eq(2)").click(function(){
        $(".mailWrap .ann .dep").addClass("display");
        $(".mailWrap .ann .dep").siblings("ul").removeClass("display");
    })
})

//eventWrap 切換
$(function(){
    $(".eventWrap .tabs li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $('.eventWrap .tabs li:nth-of-type(1)').click(function(){
        $('.eventMiddle .eventBox').addClass('display');
        $('.eventMiddle .eventBox').siblings().removeClass('display');
    })
    $('.eventWrap .tabs li:nth-of-type(2)').click(function(){
        $('.eventMiddle .eventBoxAl').addClass('display');
        $('.eventMiddle .eventBoxAl').siblings().removeClass('display');
    })
    $('.eventWrap .tabs li:nth-of-type(3)').click(function(){
        $('.eventMiddle .eventRecord').addClass('display');
        $('.eventMiddle .eventRecord').siblings().removeClass('display');
    })
})

//betWrap 搜尋開關
$(function(){
    $('.betWrap .fakeTable .arrow_ic').click(function(){
        $($(this).closest('li')).toggleClass('active');
    })
})

//deposit切換
$(function(){
    $(".depositWrap .list li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".depositWrap .list li:eq(0)").click(function(){
        $(".depositWrap .bottom .card").addClass("display");
        $(".depositWrap .bottom .card").siblings().removeClass("display");
    })
    $(".depositWrap .list li:eq(1)").click(function(){
        $(".depositWrap .bottom .atm").addClass("display");
        $(".depositWrap .bottom .atm").siblings().removeClass("display");
    })
    $(".depositWrap .list li:eq(2)").click(function(){
        $(".depositWrap .bottom .shop").addClass("display");
        $(".depositWrap .bottom .shop").siblings().removeClass("display");
    })

    $(".depositWrap .bottom .card .check").click(function(){
        $(".depositWrap .bottom .cardDeposit").addClass("display");
        $(".depositWrap .bottom .cardDeposit").siblings().removeClass("display");
    })
})

//withdrawal+transfer 展開
$(function(){
    $('.withdrawalWrap  .platformBox .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
    })
    $('.transferWrap  .platform .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
    })
})

//helpPage .nav列切換
$(function(){
    $('.nav .title').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.nav .box').removeClass('display');
        $($(this).next('.box')).addClass('display');
    })

    $('.nav .box li').click(function(){
        $('.nav .box li').removeClass('active');
        $(this).addClass('active');
    })
})
//helpPage teachList列表
$(function(){
    $('.helpPage .teachList li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
})
//helpPage .nav 連動切換
$(function(){
    $('.forNew').click(function(){
        var n = $(this).index();

        $(".newHelp:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $('.forQues').click(function(){
        var n = $(this).index();

        $(".question:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $('.forApp').click(function(){
        var n = $(this).index();

        $(".download:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//register choose切換
$(function(){
    $(".registerWrap .choose li").click(function(){
        $(this).removeClass("display");
        $(this).siblings().addClass("display")
    })
})

//deposit滑動
$(function(){
    var depWay = $('.depositWrap .box ul');

    var n = 0;
    var nt = $('.depositWrap .list .next');
    var pv = $('.depositWrap .list .prev');
    $(nt).click(function(){
        n ++;
        $(depWay).css("transform","translateX("+(-50 * n)+"px)");

        if(n == 1){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        $(depWay).css("transform","translateX("+(-50 * n)+"px)");

        if(n == -1){
            $(depWay).css("transform","translateX(0px)");
            n ++;
        }
    })
})

//交易紀錄切換date
$(function(){
    $(".dealWrap .search .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".dealWrap .search .btnBox button:eq(1)").click(function(){
        $(".dealWrap .dealBox .fakeTable table:eq(0)")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".dealWrap .search .btnBox button:eq(0)").click(function(){
        $(".dealWrap .dealBox .fakeTable table:eq(1)")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".dealWrap .search .btnBox button:eq(2),.dealWrap .search .btnBox button:eq(3)").click(function(){
        $(".dealWrap .dealBox .fakeTable .noData")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//查詢紅利切換date
$(function(){
    $(".pointWrap .search .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".pointWrap .search .btnBox button:eq(1)").click(function(){
        $(".pointWrap .box table")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".pointWrap .search .btnBox button:eq(1)").siblings().click(function(){
        $(".pointWrap .box .noData")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//投注紀錄切換date
$(function(){
    $(".betWrap .timeGroup .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".betWrap .timeGroup .btnBox button:eq(1)").click(function(){
        $(".betWrap .fakeTable ul:eq(0)")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".betWrap .timeGroup .btnBox button:eq(0)").click(function(){
        $(".betWrap .fakeTable ul:eq(1)")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".betWrap .timeGroup .btnBox button:eq(2),.betWrap .timeGroup .btnBox button:eq(3)").click(function(){
        $(".betWrap .fakeTable .noData")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//優惠申請切換date
$(function(){
    $(".eventWrap .eventRecord .dateBtnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".eventWrap .eventRecord .dateBtnBox button:eq(1)").click(function(){
        $(".eventWrap .tableWrap table:eq(0)")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".eventWrap .eventRecord .dateBtnBox button:eq(0)").click(function(){
        $(".eventWrap .tableWrap table:eq(1)")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".eventWrap .eventRecord .dateBtnBox button:eq(2),.eventWrap .eventRecord .dateBtnBox button:eq(3)").click(function(){
        $(".eventWrap .tableWrap .noData")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//優惠頁左列切換
$(function(){
    $(".eventWrap .side li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})