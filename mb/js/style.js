var currentPage = 1;
function getMore(desUrl){
    $.ajax({
        url:desUrl,
        data:{page:currentPage},
        beforeSend :function () {
            $('.end p').text('加载中……');
        },
        success: function(data){
            $('.end').before(data);
            $('.end:last').remove();
            currentPage = currentPage+1;
        },
        error: function () {
            $('.end p').text('加载失败，点击重试');
        }
    });
}
function addVocabulary(word){
    $('.drawer_title').addClass('active');
    $.ajax({
        async: false,
        url:'/w/voc/add/'+word,
        success:function (data) {
            if (data.status == 200){
                $('.img_yellow').attr('onclick', "delVocabulary(\'"+data.data.id+"\')");
            }else{
                $('.drawer_title').removeClass('active');
                alert(data.msg);
            }
        },
        error:function () {
            $('.drawer_title').removeClass('active');
            alert('操作失败，请稍后再试');
        }
    })
}
function delVocabulary(vid){
    $('.drawer_title').removeClass('active');
    $.ajax({
        async: false,
        url:'/w/voc/del/'+vid,
        success:function (data) {
            if (data.status == 200){
                $('.img_hui').attr('onclick', "addVocabulary(\'"+data.data.word+"\')");
            }else{
                $('.drawer_title').addClass('active');
                alert(data.msg);
            }
        },
        error:function () {
            $('.drawer_title').addClass('active');
            alert('操作失败，请稍后再试');
        }
    })
}