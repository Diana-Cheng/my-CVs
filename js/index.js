$(function(){
    var $my_pic = $('.my_pic_box>.my_pic'),
        $control_cats = $('.control_cats'),
        $my_icon_box = $('.my_icon_box'),
        $my_photo = $('.my_photo'),
        $my_name_box = $('.my_name_box'),
        $tap_1 = $('.tap_1'),
        $tap_2 = $('.tap_2'),
        $tap_3 = $('.tap_3'),
        $tap_4 = $('.tap_4'),
        $my_skill = $('.my_skill'),
        $my_skill_row_div = $('.my_skill_row>div'),
        $my_pro = $('.my_pro'),
        $my_pro_cont = $('.my_pro_cont'),
        $my_speak = $('.my_speak'),
        $my_speak_box = $('.my_speak_box'),
        $tv_btn = $('.tv_btn'),
        $tv_blank = $('.tv_blank'),
        $tv_blank_up = $('.tv_blank_up'),
        $tv_blank_down = $('.tv_blank_down'),
        $control_btn = $('.control_btn'),
        $tv_ps = $('.tv_ps');

    //移动资料
    function fileLeft() {
        $my_icon_box.fadeOut(200);
        setTimeout(function () {
            $my_photo.addClass('my_photo_move');
            $my_name_box.addClass('my_name_box_move');
            $tap_1.addClass('tap_1_move');
            $tap_2.addClass('tap_2_move');
            $tap_3.addClass('tap_3_move');
            $tap_4.addClass('tap_4_move');
        }, 200);
    }

    // 点击时去掉所有的动画
    function tvContChange() {
        $my_skill.hide();
        $my_pro.hide();
        $my_speak.hide();
        setTimeout(function () {
            $my_skill_row_div.removeClass('my_skill_move');
            $my_pro_cont.removeClass('my_pro_cont_move');
            $my_speak_box.eq(0).removeClass('my_speak_box_1_move');
            $my_speak_box.eq(1).removeClass('my_speak_box_2_move');
            $my_speak_box.eq(2).removeClass('my_speak_box_3_move');
        }, 100);
    }

    // 遥控器上点击不同资料按钮，电视内容切换
    $control_cats.click(function () {
        var data_status = $tv_btn.data('status');
        if (data_status == "on") {
            $control_cats.removeClass('cats_active').addClass('cats_negative');
            $(this).addClass('cats_active').removeClass('cats_negative');
            var cats_index = $(this).index();
            // 点击个人资料
            if (cats_index == 0) {
                var my_pic_hover = $my_pic.attr('data-status');
                $my_pro.removeClass('my_pro_move');
                $my_photo.removeClass('my_photo_move');
                $my_name_box.removeClass('my_name_box_move');
                $tap_1.removeClass('tap_1_move');
                $tap_2.removeClass('tap_2_move');
                $tap_3.removeClass('tap_3_move');
                $tap_4.removeClass('tap_4_move');
                $my_icon_box.delay(500).fadeIn(500);
                tvContChange();
            }
            // 点击掌握技能
            else if (cats_index == 1) {
                tvContChange();
                fileLeft();
                $my_skill.show();
                setTimeout(function () {
                    $my_skill_row_div.addClass('my_skill_move');
                }, 200);

            }
            // 点击项目经历
            else if (cats_index == 2) {
                tvContChange();
                fileLeft();
                $my_pro.show();
                setTimeout(function () {
                    $my_pro_cont.addClass('my_pro_cont_move');
                }, 200);
            }
            // 点击其他废话
            else if (cats_index == 3) {
                tvContChange();
                fileLeft();
                $my_speak.show();
                setTimeout(function () {
                    $my_speak_box.eq(0).addClass('my_speak_box_1_move');
                    $my_speak_box.eq(1).addClass('my_speak_box_2_move');
                    $my_speak_box.eq(2).addClass('my_speak_box_3_move');
                }, 200);
            }
        }
        else {
            $tv_ps.addClass('tv_ps_move');
        }

    });

    // 电视开关控制
    function tv_on_off() {
        var data_status = $tv_btn.data('status');
        if (data_status == "on") {
            $tv_blank.show();
            $tv_btn.data('status', 'off');
            setTimeout(function () {
                $tv_blank_up.addClass('tv_blank_up_move');
                $tv_blank_down.addClass('tv_blank_down_move');
            }, 100);
        }
        else if (data_status == "off") {
            $tv_ps.removeClass('tv_ps_move');
            $tv_blank.fadeOut(400);
            $tv_btn.data('status', 'on');
            setTimeout(function () {
                $tv_blank_up.removeClass('tv_blank_up_move');
                $tv_blank_down.removeClass('tv_blank_down_move');
            }, 500);
        }
    }

    // 点击电视上的开关
    $tv_btn.click(function () {
        tv_on_off();
    });

    // 点击遥控器上的开关
    $control_btn.click(function () {
        tv_on_off();
    });
})
