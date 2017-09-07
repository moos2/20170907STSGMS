<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<jsp:include page="header.jsp"/>
<head>
<meta charset="UTF-8">
<title>학생관리</title>
<link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/member.css" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

	<div id="wrapper">
		<header>
		
		</header>
	</div>

<div id="container">
	<form id="login_box" name="login_box">
		<img src="<%=application.getContextPath()%>/resources/img/login.jpg" alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" id="input_id" name="input_id" value="hong"/> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" id="input_pass"name="input_pass"  value="2"/> <br /><br />
		<input id="loginBtn" type="submit" value="LOGIN"/>
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
		<input type="reset" value="CANCEL" />
	</form>
</div>
<script>
app.auth.init();
</script>
