$(function(){
    //将操作封装成函数，方便之后放入resize事件中监听
    function resize(){
        //判断屏幕是大是小
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        
        //遍历轮播元素,设置背景图
        $('#mycarousel > .carousel-inner > .item').each(function(i,item){
            var $item = $(item);  //获取的DOM元素封装为JQ对象
            // 选择图片
            var imgSrc = isSmallScreen ? $item.data('img-sm') :$item.data('img-lg');
            // 设置
            
             // 设置背景图片
                
                //
                // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
                if (isSmallScreen) {
                    $item.css('backgroundImage','none');
                    $item.html('<img src="' + imgSrc + '" alt="" />');
                } else {
                    $item.empty();
                    $item.css('backgroundImage', 'url("' + imgSrc + '")');
                }
        })
    }
    //放入window的resize事件监听,并主动触发一次前面封装的函数
    $(window).on('resize',resize).trigger('resize');

    var $newTitle = $('.news-title');
    
    // 点击切换标题
    $('#news .nav-pills a').on('click',function(){
        //获取元素
        var $this = $(this);
        var title = $this.data('title');

        //赋值
        $newTitle.text(title);
        
    });
});