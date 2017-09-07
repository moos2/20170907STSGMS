<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp" />
<jsp:include page="../member/member_head.jsp"/>
<link rel="stylesheet" href="${path.css}/member.css" />
<head>
</head>
<div id ="go_main">${sessionScope.user.name} 님 환영합니다.</div>
	 <%-- 
	 ${10 eq requestScope.val}
	 페이징 처리할 때 자주 쓰는 비교 연산자이다. 
	 --%>	
<div class="jumbotron text-center"> 
 	<h1>Grade Management System</h1>
</div>
 <div class="container">
 	<div class="row">
 		<div class="col-sm-4">
 			<h3>학생관리</h3>
 				<ul id="main_ul_stu">
					<li ><a >학생정보 추가</a></li>
					<li ><a >학생정보 목록</a></li>
					<li ><a >학생 상세정보</a></li>
					<li ><a >학생정보 수정</a></li>
					<li ><a >학생정보 삭제</a></li>
				</ul>
		</div>
 		<div class="col-sm-4">
  			<h3>성적관리</h3>
 				<ul id="main_ul_grade">
					<li ><a >성적 입력</a></li>
					<li ><a >성적 목록</a></li>
					<li ><a >성적 상세</a></li>
					<li ><a >성적 수정</a></li>
					<li ><a >성적 삭제</a></li>
				</ul>
 		</div>
 		<div class="col-sm-4">
  			<h3>게시글관리</h3>
 				<ul id="main_ul_board">
					<li ><a >게시글 쓰기</a></li>
					<li ><a >게시글 목록</a></li>
					<li ><a >게시글 상세</a></li>
					<li ><a >게시글 수정</a></li>
					<li ><a >게시글 삭제</a></li>
				</ul>
 		</div>
 	</div>
</div>
<script>
app.main.init();
</script>












