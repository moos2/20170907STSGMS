<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">GMS</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a id="home"><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>
      <li class="dropdown">
      <a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">회원관리 <span class="caret">
      	</span></a>
      	<ul id="navbar_ul_stu">
      		<li><a>학생추가</a></li>
      		<li><a>학생목록</a></li>
      		<li><a>학생조회</a></li>
      		<li></li>
      		<li><a >학생삭제</a> </li>
      	</ul>
      	</li>
      <li class="dropdown">
      <a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">회원관리 <span class="caret">
      	</span></a>
      	<ul id="navbar_ul_grade">
      		<li><a >성적 입력</a></li>
      		<li><a >성적 목록</a></li>
      		<li><a >성적 상세</a></li>
      		<li><a >성적 수정</a></li>
      		<li></li>
      		<li><a >성적 삭제</a> </li>
      	</ul>
      	</li>
      <li class="dropdown">
      <a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">회원관리 <span class="caret">
      	</span></a>
      	<ul id="navbar_ul_board">
      		<li><a >게시글 쓰기</a></li>
      		<li><a >게시글 목록</a></li>
      		<li><a >게시글 상세</a></li>
      		<li><a >게시글 수정</a></li>
      		<li></li>
      		<li><a >게시글 삭제</a> </li>
      	</ul>
      	</li>
    </ul>
    <span class="float-right">${sessionScope.user.name}&nbsp;<a id="logout">로그아웃</a></span>
  </div>
  <script>
  	app.navbar.init();
	 /* window.onload=navbarLoad(); */
/*   function moveTo(dir,page){			
		location.href="${ctx}/"+dir+".do?action=move&page="+page;
		} */
  /* function targetDelete(target){
		prompt(target+'의 ID?');
	} */
 /*  var home = document.getElementById("home").setAttribute("onclick","moveTo('common','index')"); */
  /* function logout(){
	  location.href="${ctx}/home.do?action=logout&page=home";
	  alert('로그아웃');
	  } */
/* 	function list(dir,page,pageNumber){
		location.href="${ctx}/"+dir+".do?action=list&page="+page+"&pageNumber="+pageNumber;
	}	 */  
	  
  /* function mainLoad(){
	var u1=document.getElementById("main_ul_stu");
	var u2=document.getElementById("main_ul_grade");
	var u3=document.getElementById("main_ul_board");
	u1.setAttribute("class", "list-group");
	u2.setAttribute("class", "list-group");
	u3.setAttribute("class", "list-group");
	var u1c=u1.children;
	var u2c=u2.children;
	var u3c=u3.children;
	var i;
	for(i=0; i<u1c.length;i++){
		u1c[i].setAttribute("class","list-group-item");
	}
	for(i=0; i<u2c.length;i++){
		u2c[i].setAttribute("class","list-group-item");
	}
	for(i=0; i<u3c.length;i++){
		u3c[i].setAttribute("class","list-group-item");
	}
	u1c[0].setAttribute("onclick", "moveTo('member','member_add')");
	u1c[1].setAttribute("onclick", "list('member','member_list','1')");
	u1c[2].setAttribute("onclick", "moveTo('member','member_detail')");
	u1c[3].setAttribute("onclick", "moveTo('member','member_update')");
	u1c[4].setAttribute("onclick", "memberDelete('target')");
	
	u2c[0].setAttribute("onclick", "moveTo('grade','grade_add')");
	u2c[1].setAttribute("onclick", "list('grade','grade_list','1')");
	u2c[2].setAttribute("onclick", "moveTo('grade','grade_detail')");
	u2c[3].setAttribute("onclick", "moveTo('grade','grade_update')");
	u2c[4].setAttribute("onclick", "targetDelete('target')");
	
	u3c[0].setAttribute("onclick", "moveTo('board','board_write')");
	u3c[1].setAttribute("onclick", "list('board','board_list','1')");
	u3c[2].setAttribute("onclick", "moveTo('board','board_detail')");
	u3c[3].setAttribute("onclick", "moveTo('board','board_update')");
	u3c[4].setAttribute("onclick", "targetDelete('target')");
	} */
  
/* function navbarLoad(){  
  var u1=document.getElementById("navbar_ul_stu");
  var u2=document.getElementById("navbar_ul_grade");
  var u3=document.getElementById("navbar_ul_board");
  u1.setAttribute("class","dropdown-menu");
  u2.setAttribute("class","dropdown-menu");
  u3.setAttribute("class","dropdown-menu");
  var u1c=u1.children;
  var u2c=u2.children;
  var u3c=u3.children;

  u1c[0].setAttribute("onclick","moveTo('member','member_add')");
  u1c[1].setAttribute("onclick","list('member','member_list','1')");
  u1c[2].setAttribute("onclick","moveTo('member','member_detail')");
  u1c[3].setAttribute("role","separator");
  u1c[3].setAttribute("class","divider");
  u1c[4].setAttribute("onclick","targetDelete('target')");
  
  u2c[0].setAttribute("onclick","moveTo('grade','grade_add')");
  u2c[1].setAttribute("onclick","list('grade','grade_list','1')");
  u2c[2].setAttribute("onclick","moveTo('grade','grade_detail')");
  u2c[3].setAttribute("onclick","moveTo('grade','grade_update')");
  u2c[4].setAttribute("role","separator");
  u2c[4].setAttribute("class","divider");
  u2c[5].setAttribute("onclick","targetDelete('target')");
  
  u3c[0].setAttribute("onclick","moveTo('board','board_write')");
  u3c[1].setAttribute("onclick","list('board','board_list','1')");
  u3c[2].setAttribute("onclick","moveTo('board','board_detail')");
  u3c[3].setAttribute("onclick","moveTo('board','board_update')");
  u3c[4].setAttribute("role","separator");
  u3c[4].setAttribute("class","divider");
  u3c[5].setAttribute("onclick","targetDelete('target')");
  
  var logout=document.getElementById("logout").setAttribute("onclick","logout()");
  } */
  
/* function search(){
	var search=document.getElementById('search').value;
	alert('입력한 검색어:::::   ' + search);
	location.href="${ctx}/member.do?action=search&page=member_list&search="+search;
};
function updateStudent(id){
	alert('수정할 id : ' +id);
	location.href = "${ctx}/member.do?action=update&page=member_update&id="+id;
}
function deleteStudent(id){
	alert('삭제할 id : ' +id);
	location.href = "${ctx}/member.do?action=delete&page=member_list&id="+id;
}
function detailStudent(id){
	alert('조회할 id : ' +id);
	location.href = "${ctx}/member.do?action=detail&page=member_detail&id="+id;
}
 */
/* function studentInfo(){
	  var id='id',
	      id_val='${requestScope.student.id}',
	      name='name',
	      name_val='${requestScope.student.name}',
	      email='email',
	      email_val='${requestScope.student.email}'
	      ;
	  sessionStorage.setItem(id,id_val);    
	  sessionStorage.setItem(name,name_val);    
	  sessionStorage.setItem(email,email_val);    
}
window.addEventListener('load',test,false); 

function memberAdd(){
	var join_id=document.getElementById('join_id').value
	var join_pass=document.getElementById('join_pass').value
	var join_name=document.getElementById('join_name').value
	var join_birthday=document.getElementById('join_birthday').value
if(join_id===""||join_pass===""||join_name===""||join_birthday===""){
	alert('빈칸을 채워주세요'); 
	return false;
	}
if(join_pass===""){
	alert('비밀번호를 입력해 주세요'); 
	return false;
	}
if(join_name===""){
	alert('이름을 입력해 주세요'); 
	return false;
	}
if(join_birthday===""){
	alert('생년월일을 입력해 주세요'); 
	return false;
	} 
	var form=document.getElementById('join_form');
	form.setAttribute("action","${ctx}/member.do");
	form.setAttribute("method","post");
	form.submit();
	return true;
} */
  </script>
</nav>
