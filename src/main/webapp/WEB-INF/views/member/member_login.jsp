<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MEMBER LOGIN</title>
<link rel="stylesheet" href="${path.ctx}/css/member.css" />
</head>
<body>
<div id="wrapper">
<h1 id="title">LOGIN</h1>
<a id="go_main" href="../index.jsp">메인으로 가기</a><br />
<hr />
<div id="container">
	<img src="../img/login.jpg" alt="" /><br />
	<span id="login_id">ID</span>
	<input type="text"  /> <br />
	<span id="login_pass">PASSWORD</span> 
	<input type="text"  /> <br /><br />
	<button id="login_btn" onclick="window.location.href='member/mypage.html'">LOGIN</button>
	<button id="cancel_btn" onclick="window.location.href='../index.html'">CANCEL</button>
</div>
</div>
</body>
</html>