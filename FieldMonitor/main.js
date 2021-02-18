$(function () {

    const numToLet = ['A', 'B', 'E', 'F', 'H', 'M', 'O', 'R', 'T', 'Z'];


    const comboArray = [0, 0, 0, 0, 0, 0];
    const combination = ["H", "O", "B", "A", "R", "T"];

    const gridIncrement = $(".lock-dial ul").css('line-height').replace('px', '') / 2;
    const numNums = $(".lock-dial:eq(0) ul li").length;
    const halfHeight = gridIncrement * numNums;
    const initTop = -(halfHeight - gridIncrement);

    $(".lock-dial ul").css('top', initTop);

    $(".lock-dial ul").draggable({
        grid: [0, gridIncrement],
        axis: 'y',
        drag: function () {
            const dragDir = $(this).css('top').replace('px', '') < initTop ? "up" : "down";

            if (dragDir == "up") {
                const curNum = parseInt($(this).find('li:last-child').attr('class')) + 1;
                if (curNum < 10) {
                    $(this).append('<li class="' + curNum + '">' + numToLet[curNum] + '</li>');
                } else {
                    $(this).append('<li class="0">A</li>');
                };
            } else {
                const curNum = parseInt($(this).find('li:first-child').attr('class')) - 1;
                const thisTop = parseInt($(this).css('margin-top').replace('px', ''));

                $(this).css({
                    marginTop: thisTop - (gridIncrement * 2)
                });

                if (curNum > -1) {
                    $(this).prepend('<li class="' + curNum + '">' + numToLet[curNum] + '</li>');
                } else {
                    $(this).prepend('<li class="9">Z</li>');
                };
            };
        },
        stop: function () {

            //MATHS		
            const negOrPos = $(this).css('margin-top').replace('px', '') > 0 ? 1 : -1;
            const thisTopTotal = parseInt($(this).css('top').replace('px', '')) + Math.abs(initTop);
            const marginMinified = parseInt(Math.abs($(this).css('margin-top').replace('px', ''))) - thisTopTotal;
            const numIncs = Math.floor(marginMinified / (halfHeight * 2));
            const totalDif = numIncs * (halfHeight * 2);
            const topTen = (marginMinified - totalDif) * negOrPos;
            const activeIndex = Math.abs(topTen / (gridIncrement * 2)) + (halfHeight / (gridIncrement * 2));

            $(this).attr("data-combo-num", $(this).find('li').eq(activeIndex).text()).css({
                top: -315,
                marginTop: topTen
            }).find('li').slice(20).remove();

            for (var i = 0; i < $(".lock-dial ul").length; i++) {
                comboArray[i] = $(".lock-dial ul:eq(" + i + ")").attr("data-combo-num");
            }

            if (comboArray == "" + combination) {
                $('.lock-dial ul').draggable('disable');
                $('#lock-wrapper').addClass("unlocked");
                $('.lock-dial').each(function () {
                    var $this = $(this);
                    $this.find('ul').delay(400).css('color', '#0f0').fadeOut(function () {
                        $this.animate({
                            marginTop: 150
                        }, function () {
                            $this.fadeOut(function () {
                                    $('.welcome-message').fadeIn(() => {
                                        $('#lock-plate').hide();
                                        $('#revealedimage').show();
                                        

                                });
                            });
                        });
                    });
                });
            }
        }
    });


    var sub_width = 0;
            var sub_height = 0;
            $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

            $(".zoom-area").mousemove(function(e){
                if(!sub_width && !sub_height)
                {
                    var image_object = new Image();
                    image_object.src = $(".small").attr("src");
                    sub_width = image_object.width;
                    sub_height = image_object.height;
                }
                else
                {
                    var magnify_position = $(this).offset();

                    var mx = e.pageX - magnify_position.left;
                    var my = e.pageY - magnify_position.top;
                    
                    if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
                    {
                        $(".large").fadeIn(100);
                    }
                    else
                    {
                        $(".large").fadeOut(100);
                    }
                    if($(".large").is(":visible"))
                    {
                        var rx = Math.round(mx/$(".small").width()*sub_width - $(".large").width()/2)*-1;
                        var ry = Math.round(my/$(".small").height()*sub_height - $(".large").height()/2)*-1;

                        var bgp = rx + "px " + ry + "px";
                        
                        var px = mx - $(".large").width()/2;
                        var py = my - $(".large").height()/2;

                        $(".large").css({left: px, top: py, backgroundPosition: bgp});
                    }
                }
            })


})

