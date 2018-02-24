var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {// 点击按钮 触发移动
        var index = $(x.currentTarget).index() //获取下标
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)' //移动距离
        })
        n = index
        allButtons.eq(n)  //按钮 加css类
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

var n = 0;
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')

var timerId = setInterval(() => {
    n += 1
    allButtons.eq(n%size).trigger('click') //按钮按顺序触发click事件
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 1500)

$('.window').on('mouseenter', function () {//当移动到窗口，停止滚动
    window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {//离开，继续
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 1500)
})