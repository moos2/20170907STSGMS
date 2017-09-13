/**
 * member javaScript
 */
/*은닉화, JSON*/
/*자바스크립트의 어나니머스 함수. 함수에 다른 이름을 주지 않음.*/
/*function은 getter의 개념. 따라서 반드시 return이 있다. 없다면 true를 반환한다. procedure는 setter의 개념.*/
var app=app || {}; //ns패턴

 app.path=(function(){
	var init=function(ctx){
		app.session.init(ctx);
		app.auth.init();
		onCreate();
	};
	var onCreate=function(){
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
		
	};
	
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	
	return{
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css
	};
})(); 


app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resource/js');
		sessionStorage.setItem('img',ctx+'/resource/img');
		sessionStorage.setItem('css',ctx+'/resource/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	
   /*{}는 객체를 의미한다. (function(){})는 객체기 때문에 {}f를 리턴한다.*/
	return {
		/*키와 밸류를 리턴한다. 키에 싱글쿼터를 원래 줘야하지만 안줘도 된다.*/
		init : init,
		getPath : getPath
	};
})();

app.main=(function(){
	var init=function(){
		onCreate();
	};

	var onCreate=function(){
		setContentView();
		$('.list-group-item a').eq(0).on('click',function(){
			app.controller.moveTo("/member","/member_add");
		});
		$('.list-group-item a').eq(1).on('click',function(){
			app.member.moveList(1);
		});
		$('.list-group-item a').eq(2).on('click',function(){
			app.controller.moveTo("/member","/member_detail");
		});
		$('.list-group-item a').eq(3).on('click',function(){
			app.controller.moveTo("/member","/member_update");
		});
		$('.list-group-item a').eq(4).on('click',function(){
			app.controller.moveTo("/member","/member_delete");
		});
		
		$('.list-group-item a').eq(5).on('click',function(){
			app.controller.moveTo("/grade","/grade_add");
		});
		$('.list-group-item a').eq(6).on('click',function(){
			app.controller.moveTo("/grade","/grade_list");
		});
		$('.list-group-item a').eq(7).on('click',function(){
			app.controller.moveTo("/grade","/grade_detail");
		});
		$('.list-group-item a').eq(8).on('click',function(){
			app.controller.moveTo("/grade","/grade_update");
		});
		$('.list-group-item a').eq(9).on('click',function(){
			app.controller.moveTo("/grade","/grade_delete");
		});
		
		$('.list-group-item a').eq(10).on('click',function(){
			app.controller.moveTo("/board","/board_write");
		});
		$('.list-group-item a').eq(11).on('click',function(){
			app.controller.moveTo("/board","/board_list");
		});
		$('.list-group-item a').eq(12).on('click',function(){
			app.controller.moveTo("/board","/board_detail");
		});
		$('.list-group-item a').eq(13).on('click',function(){
			app.controller.moveTo("/board","/board_update");
		});
		$('.list-group-item a').eq(14).on('click',function(){
			app.controller.moveTo("/board","/board_delete");
		});
	};
	var setContentView=function(){
		/*$가 붙은 var는 돔객체라는 것이다.*/
		var $u1=$("#main_ul_stu");
		var $u2=$("#main_ul_grade");
		var $u3=$("#main_ul_board");
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
	};
	return {
		init : init
	};
})();
/*data에 관련된 내용은 onCreate에, view에 관한 내용은 setContentView에 코딩한다.*/

app.auth=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#loginBtn').on('click',function(){
	         alert('로그인 fx 실행')
	          if($('#input_id').val()===""){
	             alert('ID 를 입력해 주세요');
	             return false;
	          }
	          if($('#input_pass').val()===""){
	             alert('PASS 를 입력해 주세요');
	             return false;
	          }          
	          $('#login_box').attr('action',app.path.ctx()+"/auth/login");          
	          $('#login_box').attr('method','post');          
	          return true;
	         
	      });
	};
	var setContentView=function(){
	};
	return {
		init : init
	};
})();

app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$("#home").on('click',function(){
			app.controller.moveTo("/common","/main");
		});
		
		$("#logout").on('click',function(){
			app.controller.moveTo("/common","/home");
		});
		
		  $(".dropdown-menu a").eq(0).on('click',function(){
			  app.controller.moveTo("/member","/member_add");
		  });
		  $(".dropdown-menu a").eq(1).on('click',function(){
			  app.member.moveList(1);
		  });
		  $(".dropdown-menu a").eq(2).on('click',function(){
			  app.controller.moveTo("/member","/member_detail");
		  });
		  $(".dropdown-menu a").eq(3).on('click',function(){
			  app.controller.moveTo("/member","/member_update");
		  });
		  
		  $(".dropdown-menu a").eq(4).on('click',function(){
			  app.controller.moveTo("/grade","/grade_add");
		  });
		  $(".dropdown-menu a").eq(5).on('click',function(){
			  app.controller.moveTo("/grade","/grade_list");
		  });
		  $(".dropdown-menu a").eq(6).on('click',function(){
			  app.controller.moveTo("/grade","/grade_detail");
		  });
		  $(".dropdown-menu a").eq(7).on('click',function(){
			  app.controller.moveTo("/grade","/grade_update");
		  });
		  $(".dropdown-menu a").eq(8).on('click',function(){
			  app.controller.moveTo("/grade","/grade_update");
		  });
		  
		  $(".dropdown-menu a").eq(9).on('click',function(){
			  app.controller.moveTo("/board","/board_write");
		  });
		  $(".dropdown-menu a").eq(10).on('click',function(){
			  app.controller.moveTo("/board","/board_list");
		  });
		  $(".dropdown-menu a").eq(11).on('click',function(){
			  app.controller.moveTo("/board","/board_detail");
		  });
		  $(".dropdown-menu a").eq(12).on('click',function(){
			  app.controller.moveTo("/board","/board_update");
		  });
		  $(".dropdown-menu a").eq(13).on('click',function(){
			  app.controller.moveTo("/board","/board_update");
		  });
	};
	var setContentView=function(){
		  var $u1=$("#navbar_ul_stu");
		  var $u2=$("#navbar_ul_grade");
		  var $u3=$("#navbar_ul_board");
		  $u1.addClass("dropdown-menu");
		  $u2.addClass("dropdown-menu");
		  $u3.addClass("dropdown-menu");
		  /*콜백함수*/
		  /*dropdown메뉴는 클래스기 때문에 앞에 .을 붙여주고, 그 자식인 a태그는 태그기 때문에 아무것도 붙여주지 않는다.
		  그리고 dropdown메뉴에 꺽쇠(>)를 부텨주면 바로 밑에 a 태그를 뜻한다.*/
	};
	return {
		init : init
	};
})();

app.member=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#updateBtn').on('click',function(){
			alert('정보수정 버튼 클릭');
			//id,title,phone,email;
			sessionStorage.setItem('name',$('#detail_name').text());
			sessionStorage.setItem('id',$('#detail_id').text());
			sessionStorage.setItem('title',$('#detail_title').text());
			sessionStorage.setItem('phone',$('#detail_phone').text());
			sessionStorage.setItem('email',$('#detail_email').text());
			app.controller.moveTo('member','member_update');
		});
	};
	var setContentView=function(){
		alert(':::Member Detail:::');
	};
	var moveList=function(pno){
		location.href=app.path.ctx()+"/member/member_list/"+pno
	}
	return{
		init : init,
		moveList : moveList
	};
})();

app.grade=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		
	};
	var setContentView=function(){
		
	};
	return {
		init:init,
	};
})();

app.board=(function(){
	var init =function(){
		onCreate();
	};
	var onCreate=function(){
		
	};
	var setContentView=function(){
		
	};
	return {
		init:init
	};
})();

app.controller=(function(){
	var init=function(){
		
	};
	var moveTo=function(dir,page){
		location.href=app.path.ctx()+"/common/path"+dir+page;
	};
	var list=function(dir,page,pageNumber){
		location.href=app.path.ctx()+dir+page+pageNumber;
	};
	var search=function(pno){
		var $search=$('#search_id').val();
		alert("검색할 이름: "+$search);
		location.href=app.path.ctx()+"/member/member_search/"+$search+pno;
	};
	var updateStudent=function(id,email){
		location.href=app.path.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function(id){
		alert('삭제할 id : ' +id);
		location.href = app.path.ctx()+'/'+"member.do?action=delete&page=member_list&id="+id;
	};
	var detailStudent=function(id){
		alert('조회할 id : '+id);
		/*location.href = app.ctx()+'/'+"member.do?action=detail&page=member_detail&id="+id;*/
	};
	var logout=function(){
		  location.href=app.ctx()+'/'+"home.do?action=logout&page=home";
		  alert('로그아웃');
	};
	/*다른 var function에도 쓰기 위해서 json에도 moveTo를 리턴해준다.*/
	return {
		moveTo:moveTo,
		list : list,
		search : search,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		logout : logout
		
	};
})();














