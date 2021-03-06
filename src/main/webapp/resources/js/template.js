var intro={
		loading: x=>{
			return {
				id: 'loading',
				src:x+'/loading.gif'
			}
		},
		navbar: ()=>{
			return '<nav class="navbar navbar-inverse">'
				+'  <div class="container-fluid">'
				+'    <div class="navbar-header">'
				+'      <a class="navbar-brand" href="#">GMS</a>'
				+'   </div>'
				+'    <ul class="nav navbar-nav">'
				+'     <li class="active"><a id="home"><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
				+'     <li class="dropdown">'
				+'     <a href="#" class="dropdown-toggle"'
				+'     	data-toggle="dropdown" role="button"'
				+'     	aria-haspopup="true"'
				+'     	aria-expanded="false">회원관리 <span class="caret">'
				+'     	</span></a>'
				+'     	<ul id="navbar_ul_stu">'
				+'     		<li><a>학생추가</a></li>'
				+'     		<li><a>학생목록</a></li>'
				+'     		<li><a>학생조회</a></li>'
				+'     		<li></li>'
				+'     		<li><a >학생삭제</a> </li>'
				+'    	</ul>'
				+'     	</li>'
				+'     <li class="dropdown">'
				+'     <a href="#" class="dropdown-toggle"'
				+'     	data-toggle="dropdown" role="button"'
				+'     	aria-haspopup="true"'
				+'     	aria-expanded="false">성적관리 <span class="caret">'
				+'    	</span></a>'
				+'     	<ul id="navbar_ul_grade">'
				+'     		<li><a >성적 입력</a></li>'
				+'     		<li><a >성적 목록</a></li>'
				+'     		<li><a >성적 상세</a></li>'
				+'     		<li><a >성적 수정</a></li>'
				+'     		<li></li>'
				+'     		<li><a >성적 삭제</a> </li>'
				+'     	</ul>'
				+'     	</li>'
				+'     <li class="dropdown">'
				+'     <a href="#" class="dropdown-toggle"'
				+'     	data-toggle="dropdown" role="button"'
				+'     	aria-haspopup="true"'
				+'     	aria-expanded="false">게시글관리 <span class="caret">'
				+'     	</span></a>'
				+'     	<ul id="navbar_ul_board">'
				+'     		<li><a >게시글 쓰기</a></li>'
				+'     		<li><a >게시글 목록</a></li>'
				+'     		<li><a >게시글 상세</a></li>'
				+'     		<li><a >게시글 수정</a></li>'
				+'     		<li></li>'
				+'     		<li><a >게시글 삭제</a> </li>'
				+'     	</ul>'
				+'     	</li>'
				+'     <li class="dropdown">'
				+'     <a href="#" class="dropdown-toggle"'
				+'     	data-toggle="dropdown" role="button"'
				+'     	aria-haspopup="true"'
				+'     	aria-expanded="false">수열관리 <span class="caret">'
				+'     	</span></a>'
				+'     	<ul id="navbar_ul_math">'
				+'     		<li><a id="algoBtn">등차수열</a></li>'
				+'     		<li><a id="switchBtn">스위치수열</a></li>'
				+'     		<li><a id="geoBtn">등비수열</a></li>'
				+'     		<li><a id="difBtn">계차수열</a></li>'
				+'     		<li><a id="facBtn">팩토리얼</a></li>'
				+'     		<li><a id="fiboBtn">피보나치</a></li>'
				+'     		<li></li>'
				+'     	</ul>'
				+'     	</li>'
				+'   </ul>'
				+'   <span class="float-right">${user.name}&nbsp;<a id="logout">로그아웃</a></span>'
				+' </div>'
				
		},
		
		content: ()=>{
			return '<div id="content">'
			+'<h1>등차수열</h1>'
			+'<span id="start">시작값</span></br>'
			+'<span id="end">끝값</span></br>'
		+'</div>'
		+'<div id="result"></div>'
		}
};

var page={
		login: x=>{
			return '<div id="container">'
			+'<div id="login_box">'
			+'<img src="'+x+'/login.jpg" alt="" /><br />'
			+'<span id="login_id">ID</span>'
			+'<input id="login_input" type="text"  /> <br />'
			+'<span id="login_pass">PASSWORD</span>'
			+'<input type="text"  /> <br /><br />'
			+'</div>'
			+'</div>'
		}
};