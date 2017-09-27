<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<head>
</head>

	<div id="wrapper">
		<h1 id="title">학생정보 목록</h1>
		<hr />
		<div id="container">
			<input id="search_id"  name="search" type="text" class="form-control" placeholder="Search for..."/>
      			<span class="input-group-btn">
       				<button id="searchBtn" class="btn btn-default" type="button" onclick="app.controller.search('/1')">Search!</button>
      			</span>
			<!-- id,name,password,ssn,regdate,email,major,subject -->
			<div style="height: 40px;width: 300px" >
			회원수 : ${count}
			</div>
			<table class="member_list" style="width:900px;margin:0 auto">
				<tr>
					<th>No.</th>
					<th>ID</th>
					<th>이름</th>
					<th>생년월일</th>
					<th>전화번호</th>
					<th>이메일</th>
					<th>수강과목</th>
					<th>등록일</th>
					<th>수정/삭제</th>
				</tr>
				<c:forEach var="i" items="${list}">
				<tr>
				<!-- 돈 같은 숫자를 다룰 때 fmt를 많이 쓴다. pattern에 . 대신에 $등을 넣으면 통화표시를 할 수 있다. -->
					<td><fmt:formatNumber value="${i.num }" pattern="."/></td>
					<td><a onclick="app.controller.detailStudent('${i.id }')">${i.id }</a></td>
					<td>${i.name }</td>
					<td>${i.ssn }</td>
					<td>${i.phone }</td>
					<td>${i.email }</td>
					<td>${i.title }</td>
					<td>${i.regdate }</td>
					<td>
					<a onclick="app.controller.updateStudent('${i.id}')">수정</a>
					/
					<a onclick="app.controller.deleteStudent('${i.id}')">삭제</a>
					</td>
				</tr>
				</c:forEach>
			</table>
<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;">
	  <ul id="pagination" class="pagination" >
	  	<c:if test="${requestScope.prevBlock gt 0 }">
	    <li>
	    	<a onclick="app.member.moveList('1')">
	    		<span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
	    	</a>
	    </li>
	    <li>
	      <a onclick="app.member.moveList('${requestScope.startPage-1}')" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	    </c:if>
	    <c:forEach varStatus="i" begin="${requestScope.startPage}" 
	    							end="${requestScope.endPage}" step="1">
	    	<c:choose>
	    		<c:when test="${i.index eq requestScope.pageNumber}">
	    			<li class="active"><a onclick="app.member.moveList('${i.index}'" href="#">${i.index}</a></li>
	    		</c:when>
	    		<c:otherwise>
	    			<li >
	    			<c:choose>
	    				<c:when test="${requestScope.searchName ne NULL}">
	    					<a onclick="app.controller.search('${searchName}/${i.index}')" href="#">${i.index}</a>
	    				</c:when>
	    				<c:otherwise>
	    					<a onclick="app.member.moveList('${i.index}')" href="#">${i.index}</a>
	    				</c:otherwise>
	    			</c:choose>
	    				</li>
	    		</c:otherwise>
	    	</c:choose>
	    	
	    </c:forEach>
	    <c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages}">
	    	<li>
		      	<a onclick="app.member.moveList('${requestScope.endPage+1}')"  aria-label="Next">
		        	<span aria-hidden="true">&raquo;</span>
		      	</a>
		    </li>
	    	<li>	
	    		<a onclick="app.member.moveList('${requestScope.theNumberOfPages}')" >
	    			<span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
	    		</a>
	    	</li>
	    </c:if>
	  </ul>
	</nav>
		</div>
	</div>
	
<script>

</script>






























