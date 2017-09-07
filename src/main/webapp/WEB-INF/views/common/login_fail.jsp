<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../member/member_head.jsp" %>
<head>
<meta charset="UTF-8">
<title>Login Fail</title>
<link rel="stylesheet" href="${ctx}/resources/css/member.css" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
	<div id="wrapper">
		<header>
		
		</header>
	</div>

<div id="container">
	<form id="login_box" action="${ctx}/common.do" method="get">
		<img src="${ctx}/resources/img/login.jpg" alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" name="id" value="hong" /> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" name="password" value="2" /> <br /><br />
		<input type="submit" value="LOGIN" />
		<input type="reset" value="CANCEL" />
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
	</form>
</div>
</body>
<%@ include file="../common/footer.jsp" %>