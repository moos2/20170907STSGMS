/**
 * 
 */
var meta=meta || {};
var $$=function(x){return meta.session.getPath(x)};

//함수 리터럴
meta.common=(function(){
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function(){
	};
	return{
		init:init
	};
})();

meta.index=(function(){
	var $wrapper,img,js,algo,temp;
	var init=function(){
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		ctx=$$('x');
		onCreate();
	};
	var onCreate=function(){
		//var button의 id를 btn으로 줬다.
		$.get(setContentView(),()=>{
			$('#btn').click(()=>{
			$wrapper.empty();
			var selectSeq=prompt("Enter mathSeq \n"+
					"1.등차 2.스위치 3.등비수열 4.계차수열 5.팩토리얼 6.피보나치")
			meta.ui.init();
			meta.navbar.init();
			$.get(meta.ui.arithmetic(),()=>{
				switch(selectSeq){
				case '1':	
						$('#calc').click(()=>{
							$.getScript(algo,(x1,x2)=>{
								$('#result').text("결과:"+series.arithmetic(
										$('#start_num').val(),$('#end_num').val()
								));
							});
						});
					break;
				case '2':
						$('h1').html('스위치수열');
						$('#calc').click(()=>{
							$.getScript(algo,(x1,x2)=>{
								$('#result').text("결과:"+series.switchSeries(
										$('#start_num').val(),$('#end_num').val()
								));
							});
						});
					break;
				case '3':
						$('h1').empty();
						$('#start').empty();
						$('#end').empty();
						$('h1').append('등비수열');
						$('#start').append('첫째항');
						$('#end').append('공비');
						var $nterm='<span>마지막항</span>'
							+'<input id="nterm" type="text"></input></br>';
						$('#calc').before($nterm);
						$('#calc').click(()=>{
							$.getScript(algo,(x1,x2,x3)=>{
								$('#result').text("결과:"+series.geometric($('#start_num').val(),$('#end_num').val(),$('#nterm').val()
								));
							});
						})	
					break;
				case '4':
						$('h1').empty();
						$('#start').empty();
						$('#end').empty();
						$('h1').append('계차수열');
						$('#start').append('증가값');
						$('#end').append('시작값');
						var $nterm='<span>몇 번째 항까지?</span>'
							+'<input id="nterm" type="text"></input></br>';
						$('#calc').before($nterm);
						$('#calc').click(()=>{
							$.getScript(algo,(x1,x2,x3)=>{
								$('#result').text("결과:"+series.differseq(
										$('#start_num').val(),$('#end_num').val(),$('#nterm').val()
								));
							});
						})	
					break;
				case '5':
						$('h1').empty();
						$('#start').empty();
						$('#end').empty();
						$('h1').append('팩토리얼');
						$('#start').append('증가배수');
						$('#end').append('시작값');
						var $nterm='<span>몇 번째 항까지?</span>'
							+'<input id="nterm" type="text"></input></br>';
						$('#calc').before($nterm);
						$('#calc').click(()=>{
							$.getScript(algo,(x1,x2,x3)=>{
								$('#result').text("결과:"+series.factorial(
										$('#start_num').val(),$('#end_num').val(),$('#nterm').val()
								));
							});
						})	
					break;
				case '6':
						$('#start').empty();
						$('#start').next('input').remove();
						$('#end').empty();
						$('#end').next('input').remove();
						$('h1').html('피보나치');
						var $nterm='<span>몇 번째 항까지?</span>'
							+'<input id="nterm" type="text"></input></br>';
						$('#calc').before($nterm);
						$('#calc').click(()=>{
							$.getScript(algo,(x1)=>{
								$('#result').text("결과:"+series.fibonacci($('#nterm').val()
								));
							});
						})	
					break;
				default:
					location.href=ctx;
					break;
				}
			})
			})
			$('#authbtn').click(()=>{
				alert('게시판가기');
				var url=location.href=ctx+'/get/board/list';
				$.getJSON(url,(x)=>{
					alert('x msg is: '+x.msg);	
				});
			});
			}
		);
	};
	var setContentView=function(){
		var ctx=$$('x');
		var img=$$('i');
		$wrapper=$('#wrapper');
		$.getScript(temp,x=>{
			var $image=$('<img/>',
				intro.loading(img)
			);
			$wrapper.append($image);
			var $algobutton=$('<input/>',
					{
				id: 'btn',
				type:'button',
				style:'width:100px; height:50px; color:red',
				value:'알고리즘'
					}
			);
			$wrapper.append($algobutton);
			var $authbutton=$('<input/>',
					{
				id: 'authbtn',
				type:'button',
				style:'width:100px; height:50px; color:red',
				value:'게시판'
					}
			);
			$wrapper.append($authbutton);
		});
		// 똑같은 말임. appendTo 와 append의 차이 
		// $button.appendTo($('#wrapper'))
	};
	return{
		init:init
		};
})();

meta.navbar=(function(){
	var temp,algo,js;
	var init=function(){
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		$wrapper=$('#wrapper');
		img=$$('i');
		$.get(onCreate());
		
	};
	var onCreate=function(){
		$.get(setContentView(),()=>{
			$('#navbar_ul_math a').click(()=>{
				$('#content').remove();
				$('#result').remove();
			});
			$('#algoBtn').click(()=>{
				//remove()태그까지 다 지운다. empty()태그의 내용물을 지운다.
				$.get(meta.ui.arithmetic(),()=>{
					$('h1').empty();
					$('h1').append("등차수열");
					$('#calc').click(()=>{
						$.getScript(algo,(x1,x2)=>{
							$('#result').text("결과:"+series.arithmetic(
									$('#start_num').val(),$('#end_num').val()
							));
						});
					});
				});
			})
			$('#switchBtn').click(()=>{
				$.get(meta.ui.arithmetic(),()=>{
					/*$('h1').html("스위치수열")은 
				  $('h1').empty() 와 $('h1').append("스위치수열")를
				  합친 것과 같다.*/
					$('h1').html("스위치수열");
					$('#calc').click(()=>{
						$.getScript(algo,(x1,x2)=>{
							$('#result').text("결과:"+series.switchSeries(
									$('#start_num').val(),$('#end_num').val()
							));
						});
					});
				});
			});
			$('#geoBtn').click(()=>{
				$.get(meta.ui.arithmetic(),()=>{
					$('h1').empty();
					$('#start').empty();
					$('#end').empty();
					$('h1').append('등비수열');
					$('#start').append('첫째항');
					$('#end').append('공비');
					var $nterm='<span>마지막항</span>'
						+'<input id="nterm" type="text"></input></br>';
					$('#calc').before($nterm);
					$('#calc').click(()=>{
						$.getScript(algo,(x1,x2,x3)=>{
							$('#result').text("결과:"+series.geometric($('#start_num').val(),$('#end_num').val(),$('#nterm').val()
							));
						});
					})
				});
			});
			$('#difBtn').click(()=>{
				$.get(meta.ui.arithmetic(),()=>{
					$('h1').empty();
					$('#start').empty();
					$('#end').empty();
					$('h1').append('계차수열');
					$('#start').append('증가값');
					$('#end').append('시작값');
					var $nterm='<span>몇 번째 항까지?</span>'
						+'<input id="nterm" type="text"></input></br>';
					$('#calc').before($nterm);
					$('#calc').click(()=>{
						$.getScript(algo,(x1,x2,x3)=>{
							$('#result').text("결과:"+series.differseq($('#start_num').val(),$('#end_num').val(),$('#nterm').val()
							));
						});
					})
				});
			});
			$('#facBtn').click(()=>{
				$.get(meta.ui.arithmetic(),()=>{
					$('h1').empty();
					$('#start').empty();
					$('#end').empty();
					$('h1').append('팩토리얼');
					$('#start').append('증가배수');
					$('#end').append('시작값');
					var $nterm='<span>몇 번째 항까지?</span>'
						+'<input id="nterm" type="text"></input></br>';
					$('#calc').before($nterm);
					$('#calc').click(()=>{
						$.getScript(algo,(x1,x2,x3)=>{
							$('#result').text("결과:"+series.factorial($('#start_num').val(),$('#end_num').val(),$('#nterm').val()
							));
						});
					})
				});
			});
			
			$('#fiboBtn').click(()=>{
				$.get(meta.ui.arithmetic(),()=>{
					$('#start').empty();
					$('#start').next('input').remove();
					$('#end').empty();
					$('#end').next('input').remove();
					$('h1').html('피보나치');
					var $nterm='<span>몇 번째 항까지?</span>'
						+'<input id="nterm" type="text"></input></br>';
					$('#calc').before($nterm);
					$('#calc').click(()=>{
						$.getScript(algo,(x1)=>{
							$('#result').text("결과:"+meta.algo.fibonacci($('#nterm').val()
							));
						});
					})
				});
			});
		});
	};
	var setContentView=function(){
		$.getScript(temp,()=>{
			$wrapper.html(
					intro.navbar()
			);
			var $u1=$("#navbar_ul_stu");
			var $u2=$("#navbar_ul_grade");
			var $u3=$("#navbar_ul_board");
			var $u4=$("#navbar_ul_math");
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			$u4.addClass("dropdown-menu");
		})
	};
	return {init:init};
})();

meta.ui=(function(){
	var $wrapper,ctx,img,js,css,temp;
	var init=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
	}

	var arithmetic=function(){
		$.getScript(temp,()=>{
			$wrapper.append(intro.content());
			$('#start').after(meta.comp.input(
					{
						id : 'start_num',
						type: 'text'
					}
			)
			);
			$('#end').after(meta.comp.input(
					{
						id: 'end_num',
						type: 'text'
					}
			)
			);
			$('#content').append(meta.comp.input(
					{
						id: 'calc',
						type: 'button',
						value:'answer?'
					}
			)
			);
		});
	};
	return{init:init,
		arithmetic:arithmetic
	};
})();



meta.auth=(function(){
	var $wrapper,img,temp,js;
	var init=function(){
		js=$$('j');
		img = $$('i');
		temp=js+'/template.js';
		onCreate();
		};
	var onCreate=function(){
		setContentView();
		};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		alert(page.login(img));
		$.getScript(temp,(img)=>{
			$wrapper.append(page.login(img));
				$('#login_input').after(meta.comp.input(
						{
							type : 'button',
							id : 'login_btn',
							style:'color:red',
							value : 'LOGIN'
						}
					)
				);
				$('#login_box').append(meta.comp.input(
						{
							type : 'button',
							id : 'cancle_btn',
							value : 'CANCLE'
						}
					)
				);
		});
	};
	return{
		init:init
		};
})();

//
/*meta.comp=(function(){
	return {
		button:function(json){
			return $('<input/>',json);
		}
	};
})();*/

// 메소드끼리 공유하는 것이 없으면 객체 literal방식으로 한다.
meta.comp={
		input:function(json){
			return $('<input/>',json);
		}
	};

meta.session=
	{
		init : function(x){
			sessionStorage.setItem('x',x);
			sessionStorage.setItem('j',x+'/resources/js');
			sessionStorage.setItem('i',x+'/resources/img');
			sessionStorage.setItem('c',x+'/resources/css');
		},
		getPath : function(x){
			return sessionStorage.getItem(x);
		}
	};




















