/**
 * 
 */
var meta=meta || {};
var $$=function(){return meta.session.getPath('ctx')};
var js=function(){return meta.session.getPath('js')};
var img=function(){return meta.session.getPath('img')};
var css=function(){return meta.session.getPath('css')};


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
meta.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return{
		init:init,
		getPath:getPath
	};
})();
meta.index=(function(){
	var $wrapper;
	
	var init=function(){
		alert("로딩 그림");
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		//var button의 id를 btn으로 줬다.
		$('#btn').on('click',function(){
			alert('로딩 그림 지운다');
			$wrapper.empty();
		});
	};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		var $image=$('<img/>',
			{
				id: 'loading',
				src: img()+'/loading.gif'
			}
		);
		$wrapper.append($image);
		var $button=$('<input/>',
				{
					id: 'btn',
					type:'button',
					style:'width:100px; height:50px; color:red',
					value:'어지럽나?'
				}
		);
		$wrapper.append($button);
		// 똑같은 말임. appendTo 와 append의 차이 
		// button.appendTo($('#wrapper'))

	};
	return{
		init:init
		};
})();




















