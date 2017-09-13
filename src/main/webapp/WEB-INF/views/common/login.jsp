<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<head>
<meta charset="UTF-8">
<title>학생관리</title>
<link rel="stylesheet" href="${path.css }/member.css" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

	<div id="wrapper">
		<header>
		</header>
	</div>

<div id="container">
		
	<form id="login_box" name="login_box">
		<img src="${path.img}/login.jpg" alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" id="input_id" name="server_id" value="hong"/> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" id="input_pass"name="server_pass"  value="2"/> <br /><br />
		<input id="loginBtn" type="submit" value="LOGIN"/>
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
		<input type="reset" value="CANCEL" />
	</form>
	<div style="height: 40px;width: 300px;" >
			로그인 결과 : <span style="color: red;text-align: center">${result} </span>
	</div>
</div>

<script>
app.auth.init();
</script>
