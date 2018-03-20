//һ��������������
var oneproductsLabel = {
	
	setUp: function(t, url0){	
		var bar = 'one-classify-box';
		if($(t).parents('.'+ bar).prev('.'+bar).html() != undefined){
			var obj = $(t).parents('.'+bar).clone(true);
			var fromOrder = obj.attr('id');
			var toOrder = $(t).parents('.'+bar).prev().attr('id');
			$.ajax({
				url:url0,
				data:{fromOrder, toOrder},
				success: function(data){
					if(data.status == 200){
						$(t).parents('.'+bar).prev().before(obj);
						$(t).parents('.'+bar).remove();
					}else{
						alert(data.msg);
					}
				}
			});
		}else{
			alert('已经在最上了，无法上移了');
		}
	},

	setDown: function(t, url0){
		$(t).prev().show();
		var bar = 'one-classify-box';
		if($(t).parents('.'+bar).next('.'+bar).html() != undefined){
			var obj = $(t).parents('.'+bar).clone(true);
			var fromOrder = obj.attr('id');
			var toOrder = $(t).parents('.'+bar).next().attr('id');
			$.ajax({
				url:url0,
				data:{fromOrder, toOrder},
				success: function(data){
					if(data.status == 200){
						$(t).parents('.'+bar).next().after(obj);
						$(t).parents('.'+bar).remove();
					}else{
						alert(data.msg);
					}
				}
			});
		}else{
			alert('已经最下了，无法继续下移了');
		}
	}
}

$(function(){
//  <!--���Ҳ˵������ʽ-->
//  $(document).ready(function(){
//      $(".container aside menu .aa").css("background","#E7F0FC");
//      $(".container aside menu .aa a").css("color","#2e82ff");
//      var list = $(".container aside menu .list");
//      for(var i=0;i<list.length;i++){
//          (function(i){
//              $(list[i]).click(function(){
//                  $(".container article .cont").hide();
//                  $(".container article .cont").eq(i).show();
//                  $(list).css("background","");
//                  $(this).find('a').css("color","#2e82ff");
//                  $(this).css("background","#e7f0fc");
//              })
//              
//          })(i);
//      }
//  });
//  <!--���Ҳ˵������ʽ-end-->
//���˵���h4����߿���
	$("menu h3").eq(0).css('border-top','1px solid #fff');
//��ർ�����߶ȿ���
	$("aside").css('min-height',$("article").innerHeight());
//  <!--�����ʽ-->
    $(".book-manage .book-manage-data table tr:last").css("borderBottom","none");
    
    $(".classify-manage .classify-manage-data table tr:last").css("borderBottom","none");
    $(".library-manage .library-manage-data table tr:last").css("borderBottom","none");
    $(".shell-detail .shell-detail-data table tr:last").css("borderBottom","none");
    $(".container article  .book-manage-check .book-manage-check-data table tbody tr:last").css("borderBottom","none");
    $(".container article .flgl-chak .flgl-chak-data table tbody tr:last").css("borderBottom","none");
// <!--�����ʽend-->
    

   
    //ͼ�����-������-���¼�->exit>exit
    $(".book-manage .book-manage-data  tbody .caozuo .caozuo3").click(function(){
        $(".container article .book-manage .book-manage-out").show();
        $(".bj").show();
    });
    $(" .container article .book-manage .book-manage-out .book-exit2").click(function(){
        $(".container article .book-manage .book-manage-out").hide();
        $(".bj").hide();
    });
    $(" .container article .book-manage .book-manage-out #qux").click(function(){
        $(".container article .book-manage .book-manage-out").hide();
        $(".bj").hide();
    });
    //�������-������-����ӷ���->exit
    $("#add").click(function(){
        $(".classify-manage-add").show();
        $(".bj").show();
    });
    $(".classify-manage-add .classify-manage-add-top .book-exit4").click(function(){
        $(".classify-manage-add").hide();
        $(".bj").hide();
    });
    $(".classify-manage-add .classify-manage-add-data #add-qux").click(function(){
        $(".classify-manage-add").hide();
        $(".bj").hide();
    });
    //�������-������-���༭����->exit
    $("#compile").click(function(){
        $(".classify-manage-add").show();
        $(".bj").show();
    });
    $(".classify-manage-add .classify-manage-add-top .book-exit4").click(function(){
        $(".classify-manage-add").hide();
        $(".bj").hide();
    });
    $(".classify-manage-add .classify-manage-add-data #add-qux").click(function(){
        $(".classify-manage-add").hide();
        $(".bj").hide();
    });
    //�������-������-��ɾ��->exit
    $("#delete").click(function(){
        $(".classify-manage-shanc").show();
        $(".bj").show();
    });
    $(".classify-manage-shanc-top .book-exit3").click(function(){
        $(".classify-manage-shanc").hide();
        $(".bj").hide();
    });
    $("#sc-qux").click(function(){
        $(".classify-manage-shanc").hide();
        $(".bj").hide();
    });
    //�������-������-���鿴-���ƶ���
    $(".container article .flgl-chak #ydz").click(function(){
        $(".yidongz").show();
        $(".bj").show();
    });
    $(".yidongz .yidongz-top .book-exit5").click(function(){
        $(".yidongz").hide();
        $(".bj").hide();
    });
})