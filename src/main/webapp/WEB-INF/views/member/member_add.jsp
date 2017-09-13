<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>학생 등록</title>
<link rel="stylesheet" href="${path.css}/member.css" />
</head>
<body>
	<div id="wrapper">
		<%@ include file="member_head.jsp" %>
		<hr/>
		<div id="container">
			<form id="join_form">
				<div>
					<h1 style="color: red;text-align: center">${result}</h1>
				</div>
				<fieldset>
				<legend>Join information:</legend>
				<span id="join_id">ID: </span>
				<input id="join_id" name="join_id" type="text" value="cost" /><br />
				<span id="join_pass">PASSWORD: </span>
				<input id="join_pass" name="join_pass" type="password" placeholder="비밀번호" value="1"/><br />
				<span id="join_name">NAME: </span>
				<input id="join_name" name="join_name" type="text" placeholder="이름" value="박비용"/><br />
				<span id="join_birth">생년월일</span>
				<input id="join_birthday" name="join_birthday"   type="text" value="2000-05-05"/><br />
				<input type="radio" name="gender" value="male" checked/> 남자
				<input type="radio" name="gender" value="female" /> 여자
				<br />
				이메일 <input type="email" name="email" value="cost@test.com"/>
				<h3>전 공</h3>
				<select name="major">
					<option value="computer" selected>컴퓨터공학</option>
					<option value="economics">경제학</option>
					<option value="tourism">관광학</option>
					<option value="art">미술학</option>
				</select><br />
				<h3>수강과목</h3>
				<input type="checkbox" name="subject" value="java" checked/>자바 <br />
				<input type="checkbox" name="subject" value="c" checked/>C언어 <br />
				<input type="checkbox" name="subject" value="html" checked/>HTML <br />
				<input type="checkbox" name="subject" value="css" />CSS <br />
				<input type="checkbox" name="subject" value="javascript" />자바스크립트<br />
				<input type="checkbox" name="subject" value="sql" />SQL<br />
				<input type="checkbox" name="subject" value="python" />파이썬<br />
				<input id="join_yes_btn" name="join_yes_btn" type="submit" value="join"/>
				<input id="join_no_btn" type="reset" value="cancle"/>
				<input type="hidden" name="action" value="join" />
				<input type="hidden" name="page" value="main" />
				</fieldset>
			</form>
		</div>
	</div>
</body>
<script>

</script>