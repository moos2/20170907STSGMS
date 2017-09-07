<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<head>
</head>

	<div id="wrapper">
		<h1 id="title">학생정보 목록</h1>
		<a id="go_main" href="../index.jsp">메인으로 가기</a><br />
		<hr />
		<div id="container">
			<input id="search_id"  name="search" type="text" class="form-control" placeholder="Search for..."/>
      			<span class="input-group-btn">
       				<button id="searchBtn" class="btn btn-default" type="button">Search!</button>
      			</span>
			<!-- id,name,password,ssn,regdate,email,major,subject -->
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
				<c:forEach var="i" items="${requestScope.list}">
				<tr>
					<td>${i.num }</td>
					<td><a onclick="controller.detailStudent('${i.id }')">${i.id }</a></td>
					<td>${i.name }</td>
					<td>${i.ssn }</td>
					<td>${i.phone }</td>
					<td>${i.email }</td>
					<td>${i.title }</td>
					<td>${i.regdate }</td>
				</tr>
					<td>수정/삭제</td>
				</c:forEach>
			</table>
<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;">
	  <ul id="pagination" class="pagination" >
	  	<c:if test="${requestScope.prevBlock gt 0 }">
	    <li>
	    	<a onclick="list('member', 'member_list', '1')">
	    		<span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
	    	</a>
	    </li>
	    <li>
	      <a onclick="list('member', 'member_list', '${requestScope.prevBlock+1}')" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	    </c:if>
	    <c:forEach varStatus="i" begin="${requestScope.startPage}" 
	    							end="${requestScope.endPage}" step="1">
	    	<c:choose>
	    		<c:when test="${i.index eq requestScope.pageNumber}">
	    			<li id="pclick" class="active"><a id="pages" href="#">${i.index}</a></li>
	    		</c:when>
	    		<c:otherwise>
	    			<li ><a href="#">
	    				${i.index}</a></li>
	    		</c:otherwise>
	    	</c:choose>
	    </c:forEach>
	    <c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages}">
	    	<li>
		      	<a onclick="list('member', 'member_list', '${requestScope.endPage+1}')"  aria-label="Next">
		        	<span aria-hidden="true">&raquo;</span>
		      	</a>
		    </li>
	    	<li>	
	    		<a onclick="list('member', 'member_list', '${requestScope.theNumberOfPages}')" >
	    			<span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
	    		</a>
	    	</li>
	    </c:if>
	  </ul>
	</nav>
		</div>
	</div>

<script>
controller.search();
</script>






























