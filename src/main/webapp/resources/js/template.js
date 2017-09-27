

var introUI={
	
	login : i=>{
		return '<div id="container">'
		+'<div id="login_box">'
		+	'<img src="'+i+'/login.jpg" alt="" /><br />'
		+	'<span id="login_id">ID</span>'
		+	'<input id="login_input" type="text"  /> <br />'
		+	'<span id="login_pass">PASSWORD</span> '
		+	'<input type="text"  /> <br />'
		+'</div>'
	+'</div>';
	},
	navbar : ()=>{
		return '<nav class="navbar navbar-inverse">'
		+'  <div class="container-fluid">'
		+'    <div class="navbar-header">'
		+'      <a class="navbar-brand" href="#">GMS</a>'
		+'    </div>'
		+'    <ul class="nav navbar-nav">'
		+'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" '
		+'          	aria-haspopup="true" '
		+'          	aria-expanded="false">회원관리 <span class="caret">'
		+'          	</span></a>'
		+'          <ul id="navbar_ul_stu" class="dropdown-menu">'
		+'            <li><a>학생추가</a></li>'
		+'            <li><a>학생목록</a></li>'
		+'            <li><a>학생조회</a></li>'
		+'            <li></li>'
		+'            <li><a>학생삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_grade" class="dropdown-menu">'
		+'            <li><a>성적추가</a></li>'
		+'            <li><a>성적목록</a></li>'
		+'            <li><a>성적조회</a></li>'
		+'            <li></li>'
		+'            <li><a>성적삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a>게시글추가</a></li>'
		+'            <li><a>게시글목록</a></li>'
		+'            <li><a>게시글조회</a></li>'
		+'            <li></li>'
		+'            <li><a>게시글삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="arithBtn">등차수열</a></li>'
		+'            <li><a id="switchBtn">스위치수열</a></li>'
		+'            <li><a id="diffBtn">등비수열</a></li>'
		+'            <li><a id="facBtn">팩토리얼</a></li>'
		+'            <li><a id="fiboBtn">피보나치</a></li>'
		+'          </ul>'
		+'        </li>'
		+'     <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="selBtn">선택정렬</a></li>'
		+'            <li><a id="bubbleBtn">버블정렬</a></li>'
		+'            <li><a id="insertBtn">삽입정렬</a></li>'
		+'            <li><a id="rankBtn">석차구하기</a></li>'
		+'            <li><a id="binSearchBtn">이분검색</a></li>'
		+'            <li><a id="mergeBtn">병합</a></li>'
		+'            <li><a id="stackBtn">스택</a></li>'
		+'          </ul>'
		+'        </li>'
		+'     <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="selBtn">기본 5행 5열</a></li>'
		+'            <li><a id="bubbleBtn">직각삼각형</a></li>'
		+'            <li><a id="insertBtn">지그재그</a></li>'
		+'            <li><a id="rankBtn">다이아몬드</a></li>'
		+'            <li><a id="binSearchBtn">모래시계</a></li>'
		+'            <li><a id="mergeBtn">오른쪽 빈삼각형</a></li>'
		+'            <li><a id="stackBtn">이등변삼각형</a></li>'
		+'            <li><a id="stackBtn">90도 회전</a></li>'
		+'            <li><a id="stackBtn">달팽이</a></li>'
		+'            <li><a id="stackBtn">대각선채우기</a></li>'
		+'            <li><a id="stackBtn">마방진</a></li>'
		+'            <li><a id="stackBtn">행렬변환</a></li>'
		+'          </ul>'
		+'        </li>'
		+'    </ul>'
		+'    <span class="float-right">${user.name} &nbsp;'
		+'    	<a id="logout" >로그아웃</a></span>'
		+'  </div>'
		+'</nav>';
	}
};

var algoUI={
	tbl : x=>{
		return '<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
	     +    '<tr style="border: 1px solid black;">'
	     +         '<td id="tblLeft" style="width: 50%;border: 1px solid black;"></td>'
	     +         '<td id="tblRight" style="width: 50%;border: 1px solid black;"></td>'
	     +    '</tr>'
	     +'</table>';
	},
	seriesMenu : ()=>{return '<ul class="list-group">'
		+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
		+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
		+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
		+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열 합</a></li>'
		+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
		+'</ul>'},
	series : x=>{
		var $cnt=compUI.div('content');
		$cnt.append(compUI.h1(x))
			.append(compUI.span('start_txt'))
			.append(compUI.br())
			.append(compUI.span('end_txt'))
			.append(compUI.div('result'))
		;
		return $('#content');
	}	,
	sort : x=>{
		return 
		'<div id="content">'
		+'<h1 id="title">'+x+'</h1>'
		+'<input type="text" id="sortVal" placeholder="양의 정수만 입력가능"/>'
		+'<input type="button" id="sortBtn" value="값 입력" placeholder="입 력"/>'
			;
	}
};

var compUI={
		br : ()=>{return $('<br/>');},	
		div : x=>{return $('<div/>',{id:x});},
		h1 : x=>{return $('<h1/>',{id:x});},
		span : x=>{return $('<span/>',{id:x});},
		iTxt : x=>{return $('<input/>',{id : x,type : 'text'});},
		aBtn : s=>{return $('<a>',{href:'#',role:'button',id:x});},
		iBtn : x=>{return $('<input/>',{id : x,type : 'button'});},
		image : (x,y)=>{return $('<img/>',{id : x,src : y});},
		tr : ()=>{return $('<tr/>')},
		td : ()=>{return $('<td/>')}
	}

var boardUI={
		list : ()=>{
			
			var tbl= '<div id="tb1">'
			+'		<h4 id="total">총 개시글 수: </h4>'	
			+'		<table id="board_table" border=1 style="border-collapse: collapse; width: 100%;">'
			+'		<thead><tr style="height: 25px">';
			var a=[
				{width: '5%', txt:'NO'},
				{width: '20%', txt:'제목'},
				{width: '36%',txt:'내용'},
				{width: '15%', txt: '글쓴이'},
				{width: '15%', txt: '작성날짜'},
				{width: '9%', txt: '조회수'}
				];
			$.each(a,(i,j)=>{
				tbl+='<th style="width:'+j.width
				+'; text-align: center;">'+j.txt+'</th>'
			})
			tbl+='</tr></thead><tbody id="tbody">'
			tbl+=' </tbody></table></div>'
			return tbl;
		},
		search: ()=>{
			return '<div id="search">'
			+'<select name="sel_option">'
			+'<option value="name">작성자</option>'
			+'<option value="id">아이디</option>'
			+'</select></div>'
		},
		pagination:()=>{
			return '<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;">'
			+'	  <ul id="pagination" class="pagination" >'
			+'	    <li>'
			+'	    	<a>'
			+'	    		<span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>'
			+'	    	</a>'
			+'	    </li>'
			+'	    <li>'
			+'	      <a aria-label="Previous">'
			+'	        <span aria-hidden="true">&laquo;</span>'
			+'	      </a>'
			+'	    </li>'
			+'	    <li><a>1</a></li>'
			+'	    <li><a>2</a></li>'
			+'	    <li><a>3</a></li>'
			+'	    <li><a>4</a></li>'
			+'	    <li><a>5</a></li>'
			+'	    	<li>'
			+'		      	<a aria-label="Next">'
			+'		        	<span aria-hidden="true">&raquo;</span>'
			+'		      	</a>'
			+'		    </li>'
			+'	    	<li>	'
			+'	    		<a>'
			+'	    			<span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>'
			+'	    		</a>'
			+'	    	</li>'
			+'	    </c:if>'
			+'	  </ul>'
			+'	</nav>'
		},
		detail:()=>{
			return '<div class="page-header">'
			+'	<h1 style="display:inline; margin-left: 700px;">게시판</h1>'
			+'		<a id="back_to_list" style="font-size: large">목록가기</a>'
			+'</div>'
			+'<div class="container">'
			+'	<div class="row">'
			+'		<div class="col-md-12">'
			+'			<div class="well well-sm">'
			+'				<form class="form-horizontal" method="post">'
			+'					<fieldset>'
			+'						<legend class="text-center header">게시글쓰기</legend>'
			+'						<div class="form-group">'
			+'							<span class="col-md-1 col-md-offset-2 text-center">'
			+'								<i class="fa fa-user bigicon"></i>'
			+'							</span>'
			+'							<div class="col-md-12">'
			+'								제목<input id="fname" name="title" type="text" class="form-control">'
			+'							</div>'
			+'						</div>'
			+'						<div class="form-group">'
			+'							<span class="col-md-1 col-md-offset-2 text-center">'
			+'								<i class="fa fa-user bigicon"></i>'
			+'							</span>'
			+'							<div class="col-md-12">'
			+'								아이디<input id="lname" name="name" type="text" class="form-control">'
			+'							</div>'
			+'						</div>'
			+'						'
			+'						<div class="form-group">'
			+'							<span class="col-md-1 col-md-offset-2 text-center">'
			+'								<i class="fa fa-pencil-square-o bigicon"></i>'
			+'							</span>'
			+'							<div class="col-md-12">'
			+'								<textarea class="form-control" rows="15" id="message" name="message"></textarea>'
			+'							</div>'
			+'						</div>'
			+'						'
			+'						<div class="form-group">'
			+'							<div class="col-md-12 text-center">'
			+'								<button id="updateBtn" type="submit" style="width: 200px" class="btn btn-primary btn-lg">확 인</button>'
			+'								<button id="cancleBtn" type="reset" style="width: 200px" class="btn btn-danger btn-lg">취 소</button>'
			+'							</div>'
			+'						</div>'
			+'					</fieldset>'
			+'				</form>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'</div>'
			+'<div class="modal fade alert" id="modal" tabindex="-1" role="dialog" aia-labelledby="modalLabel" aria-hidden="true">'
			+'	<div class="modal-dialog">'
			+'		<div class="modal-content">'
			+'			<div class="modal-header">'
			+'				<button type="button" class="close" data-dismiss="modal">'
			+'				<span aria-hidden="true">x</span>'
			+'				<span class-"sr-only">Close</span></button>'
			+'				<h3 class="modal-title" id="modalLable">정말 삭제하시겠습니까?</h3>'
			+'</div>'
			+'<div class="modal-body">'
			+'	<form>'
			+'		<div class="form-group">'
			+'			<lable for="inputPass">Password</label>'
			+'			<input type="password" class="form-control" id="user-email2" placeholder="Enter Password">'
			+'</div>'
			+'	<button type="submit" style="width:200px" class="btn btn-primary center-block">확인</button>'
			+'</form>'
			+'</div>'
			+'</div>'
			+'</div>'
			+'</div>'
		}
};