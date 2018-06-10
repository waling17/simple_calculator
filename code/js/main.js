/**
 * Created by jacky on 2018/5/30.
 */
$(function () {
    var last_num = '';
    var num_list = [];
    var comput = '';
    $('#btn').click(function () {
        last_num = '';
        num_list = [];
        comput = '';
        $(this).prev().prop({value: last_num});
        $('li').css({'background': 'white'})
    });
    $('#ul1 li').click(function () {
        last_num += $(this).html();
        $('#input1').prop({value: last_num});
        $(this).css({'background': 'pink'}).siblings().css({'background': 'white'})
    });
    $('#ul2 li').click(function () {
        last_num = $('#input1').val()
        debugger
        console.log($('#input1').val());
        debugger
        console.log(last_num);
        if (last_num == '') {
            alert('输入数字后再点击运算符')
        } else {
            if ($(this).html() == 'c') {
                var split_list = last_num.split('');
                split_list.pop();
                last_num = split_list.join('');
                $('#input1').prop({value: last_num});
            }
            else if ($(this).html() == '=') {
                if (num_list.length == 0) {
                    $('#input1').prop({value: last_num})
                } else {
                    num_list.push(last_num);
                    if (comput == '+') {
                        $('#input1').prop({value: (parseInt(num_list[0]) + parseInt(num_list[1]))})
                    } else if (comput == '-') {
                        $('#input1').prop({value: (parseInt(num_list[0]) - parseInt(num_list[1]))})
                    } else if (comput == '*') {
                        $('#input1').prop({value: (parseInt(num_list[0]) * parseInt(num_list[1]))})
                    } else {
                        $('#input1').prop({value: (parseInt(num_list[0]) / parseInt(num_list[1]))})
                    }
                    last_num = $('#input1').val();
                    num_list = [];
                    comput = '';

                }
            }
            else {
                if (comput == '') {
                    num_list.push(last_num);
                    last_num = '';
                    $('#input1').prop({value: last_num});
                    comput = $(this).html()
                } else {
                    alert('目前只能做简单的两个数加减乘除，后续功能有待完善')
                }
            }
        }
        $(this).css({'background': 'pink'}).siblings().css({'background': 'white'})
    });

})
