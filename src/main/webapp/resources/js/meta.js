//메타는 전역객체가 된다.
var meta=meta || {};

meta.common=(()=>{
	var init=(ctx)=>{
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{};
	return { init:init };
})();
meta.index=(()=>{
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo,tr;
	var init=()=>{
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			img=$$('i');
			ctx=$$('x');
			onCreate();
		};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			
			$container.append(compUI.div('content'))
				.css({'width':'100%'});
			$('#content')
				.css({'width':'40%','margin':'0 auto'})
				.append(compUI.image('loading',img+'/soda.gif'));
			$('#loading').after(compUI.h1('h-btn'));
			$('#h-btn').append(compUI.span('btn1'))
				.attr('display','inline');
			$('#btn1').html('알고리즘')
				.addClass('label label-default');
			$('#h-btn').append(compUI.span('btn2'))
			.attr('display','inline');
			$('#btn2').html('회원 관리')
			.addClass('label label-primary')
			.css({'margin-left':'10px'});
			
			compUI.span('bbsBtn')
			.html('게시판관리')
			.addClass('label label-danger')
			.css({'margin-left':'10px'})
			.appendTo($('#h-btn'))
			.click(()=>{
				alert('게시판 가기');
				var url=ctx+'/get/board/list/1';
				meta.board.list();
			});
			
			$('#btn1').click(()=>{
				$container.empty();
				meta.navbar.init();
				$container.html(algoUI.series());
			});
			
			$('#btn2').click(()=>{
				//$container.empty();
				//meta.auth.init();	
				
			});
		});
		};
	return {init:init};
})();

meta.board=(()=>{
	var init=()=>{
		ctx=$$('x');
		js=$$('j');
		listurl=ctx+'/get/board/list/1/';
		$container=$('#container');
		temp=js+'/template.js';
	};
	var list=()=>{
		init();
		$.getJSON(listurl,(data)=>{
			alert("개시글 수"+data.total.count);
			meta.navbar.init();
			var tbl=boardUI.list();
			/*var a=[
				{
					a:1,
					b:'한국인사',
					c:'안녕',
					d:'길동',
					e:'regdate',
					f:'score'
				},
				{
					a:2,
					b:'미국인사',
					c:'Hello',
					d:'john',
					e:'regdate',
					f:'score'
				},
				{
					a:3,
					b:'일본인사',
					c:'곤니치와',
					d:'와타나베',
					e:'regdate',
					f:'score'
				},
				{
					a:4,
					b:'중국인사',
					c:'니하오',
					d:'쩌둥',
					e:'regdate',
					f:'score'
				},
				{
					a:1,
					b:'프랑스인사',
					c:'봉주르',
					d:'앙리',
					e:'regdate',
					f:'score'
				}
			];*/
			// a -> array   i -> index  j -> object
			// a는 JSON 배열이다.
			// 따라서 배열과 타입을 JSON으로 맞춰줘야한다. 아주 중요!!!
			// a가 JSON 배열이므로 j도 JSON 객체가 되야한다.
			var tr='';
			$.each(data.list,(i,j)=>{
				tr+='<tr id="board_content" style="height: 25px">'
					+'<td>'+j.articleSeq+'</td>'
					+'<td>'+j.title+'</td>'	
					+'<td><a onclick=meta.board.detail('+j.articleSeq+');>'+j.content+'</a></td>'	
					+'<td>'+j.id+'</td>'	
					+'<td>'+j.regdate+'</td>'	
					+'<td>'+j.hitcount+'</td>'	
					+'</tr>';			
			});
			
			
			$container.html(tbl);
			$('#tb1').before(boardUI.search()).before(compUI.iTxt('searchTxt').attr('placeholder','Search for...'))
			.before(compUI.iBtn('searchBtn').css({"background-color": "yellow",'width':'100px','margin':'0 auto'}));
			$('#searchBtn').click(()=>{
					alert("검색한 내용 ["+$('#searchTxt').val()+"]");
					if(data.list!=null){
						location.href=ctx+'/get/board/list/'+$('#searchTxt').val();
					}else{
						alert('검색하신 자료가 없습니다.');
					};
				});
			//data : 컨틀롤러에서 던진 맵
			//total: map의 키 값
			//count: mapper.xml의 resultMap에서맞춰준 property 명
			$('#total').append(data.total.count);
			$('#tb1').before(compUI.iBtn('write').css({"margin-left" : "auto"}).val('글쓰기'));
			$('#write').click(()=>{
				$container.html(boardUI.detail());
			});
			$('#tbody').html(tr);
			$container.append(boardUI.pagination());	
		});
	};
	var detail=(x)=>{
	      init();
	      alert('선택한 시퀀스'+x);
	      $.getJSON(ctx+'/get/detail/'+x,data=>{
	         $.getScript(temp,()=>{
	            var $container=$('#container');
	            $container.empty();
	            compUI.div('content').appendTo($container);
	            $content=$('#content');
	            $('#content').html(boardUI.detail());
	            $('legend').html('게시글보기');
	            $('#fname').attr("readonly","readonly").val(data.bean.title);
	            $('#lname').attr("readonly","readonly").val(data.bean.memberId);
	            $('#message').attr("readonly","readonly").val(data.bean.content);
	            console.log(data.bean);
	            var _seq=data.bean.seq;
	            var _title=$('#fname').val();
	            var _message=$('#message').val();
	            
	            $('#updateBtn').html('수정하기').click(e=>{
	               e.preventDefault();//이거 막다, 방지하다라는 뜻
	               //폼 태그 서브밋 기능을 죽이는 기능
	               //ajax 할 때 무조건 걸고 하면 된다.
	               $('legend').html('게시글수정하기');
	               $('#fname').removeAttr("readonly");
	               $('#message').removeAttr("readonly");
	               $('#fileBtn').remove();
	               $('#updateBtn').html('확인').click(e=>{
	                  e.preventDefault();//이거 막다, 방지하다라는 뜻
	                  $.ajax({
	                     url : ctx+'/put/articles',
	                     method : 'post',
	                     dataType:'json',
	                     data : JSON.stringify({
	                        'seq' : _seq,
	                        'title' : _title,
	                        'content' : _message
	                     }),
	                     contentType : 'application/json',
	                     success : (data)=>{
	                        alert('ajax 통신 성공 '+data.msg)
	                        detail(data.seq);
	                     },
	                     error : (x,s,m)=>{
	                        alert('글 수정시 에러발생'+m);
	                     }
	                  });
	               });
	               $('#cancelBtn').html('취소').attr('type','reset')
	               .removeAttr('data-toggle').removeAttr('data-target');
	            });
	            $('#cancelBtn').attr('data-toggle','modal')
	            .attr('data-target','#modal')
	            .addClass('btn btn-primary')
	            .html('삭제하기')
	            .click(e=>{
	               e.preventDefault();//이거 막다, 방지하다라는 뜻
	               //deleteArticle(x+","+pass);
	               
	            });
	         
	            $('#cancelBtn').html('삭 제').click(e=>{
	               
	               
	            });
	            $('#bbsBtn').click(e=>{
	               alert('게시 클릭');
	               meta.board.write();
	            });
	         });
	      });
	};
	
	var update=(x)=>{
		alert('수정버튼 클릭'+'\n시퀀스 번호: '+x);
		detail(x);
	};
	var deleteArticle=(x)=>{
		prompt('게시글을 삭제하시겠습니까?');
	};
	var write=()=>{
		
	};
	return {
		detail : detail,
		list : list,
		update : update,
		deleteArticle : deleteArticle,
		write : write
	}
})();

meta.auth=(function(){
	var $wrapper,ctx,img,js,css,temp;
	var init=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){
		$.getScript(temp,(i)=>{
			$wrapper.append(intro.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
		
	};
	var joinView=function(){};
	return {
		init : init
	};
})();
meta.navbar=(function(){
	var algo,js,temp,$container;
	var init=function(){
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		$.getScript(temp,()=>{
			$('#navbar').html(introUI.navbar());
			$('#container').append(compUI.div('content'));
			$('#content').html(algoUI.series('등차수열'))
			.css({'width':'40%','margin':'0 auto'});
			$('#start_txt').after(compUI.iTxt('start'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.iTxt('end'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.iBtn('resultBtn'));
			$('#resultBtn')
				.val('결과보기')
				.addClass('');
			
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				});
			});
			$('.dropdown-menu a').eq(0).on('click',function(){
				alert('aaa');
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',function(){
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',function(){
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',function(){
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',function(){
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',function(){
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',function(){
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',function(){
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',function(){
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',function(){
				
			});
			$('.dropdown-menu a').eq(10).on('click',function(){
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',function(){
				//app.controller.deleteTarget('hong','board','board_delete');
			});
			$('#arithBtn').on('click',function(){
				$container.empty();
				$container.append(algoUI.tbl());
				
	            var $tblRight=$('#tblRight'),
	              $tblLeft=$('#tblLeft');
	            $tblLeft.html(algoUI.seriesMenu()); 
	            $cnt=compUI.div('content');
	    		$cnt.append(compUI.h1('등차수열'))
	    			.append(compUI.span('start_txt'))
	    			.append(compUI.br())
	    			.append(compUI.span('end_txt'))
	    			.append(compUI.div('result'))
	    		;
	            $tblRight.html(
	            		'<div id="content">'
	            		+'<h1>'
	            		+'test</h1>'
	            		+'</div>'
	            		
	            );
				/*$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.iTxt('end'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.iTxt('resultBtn'));
				$('#resultBtn').val('결과보기');*/
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#switchBtn').click(()=>{
				
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.aBtn('resultBtn'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			$('#selBtn').click(()=>{
				$container.empty();
				$container.append(compUI.div('content'))
				.css({'width':'100%'});
				$('#content')
				.css({'width':'40%','margin':'0 auto'});
				
				$('#content').html(
						'<div id="sort-div">'
						+'<h1 id="title">선택정렬</h1>'
						+'<input type="text" id="sortVal" placeholder="양의 정수만 입력가능"/>'
						+'<input type="button" id="sortBtn" value="값 입력" placeholder="입 력"/>'
				);
				var sortList= new Array(5);
				var i=0;
				$('#sortBtn').click((x)=>{
					sortList[i]=$('#sortVal').val();
					$('#sortVal').val('');
					i++;
					if(i==5){
						$('#sortVal').remove();
						$('#sortBtn').val('결과보기');
						$('#sortBtn').after(compUI.h1('result'));
						$('#sortBtn').click(()=>{
							console.log('선택정렬');
							$.getScript(algo,x=>{
								$('#result').text(sort.selection(
										sortList
								));
							});
							i=0;
						});
						
						
					}
				});
			});
			$('#bubbleBtn').click(()=>{
				alert('bubble');
				$container.empty();
				$container.append(compUI.div('content'))
				.css({'width':'100%'});
				$('#content')
				.css({'width':'40%','margin':'0 auto'});
				
				$('#content').html(
						'<div id="sort-div">'
						+'<h1 id="title">버블정렬</h1>'
						+'<input type="text" id="sortVal" placeholder="양의 정수만 입력가능"/>'
						+'<input type="button" id="sortBtn" value="값 입력" placeholder="입 력"/>'
				);
				var sortList= new Array(5);
				var i=0;
				$('#sortBtn').click((x)=>{
					sortList[i]=$('#sortVal').val();
					$('#sortVal').val('');
					i++;
					if(i==5){
						$('#sortVal').remove();
						$('#sortBtn').val('결과보기');
						$('#sortBtn').after(compUI.h1('result'));
						$('#sortBtn').click(()=>{
							console.log('버블정렬');
							$.getScript(algo,x=>{
								$('#result').text(sort.bubble(
										sortList
								));
							});
							i=0;
						});
						
						
					}
				});
			});
			
			
		});
	};

	return {init:init};
})();


meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
//전역변수
var $$= function(x){return meta.session.getPath(x);};