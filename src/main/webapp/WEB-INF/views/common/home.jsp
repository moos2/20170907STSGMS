<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<img src="${path.ctx}/loading_icon.gif" alt="" />
<script>
/* EL이 원래는 ${session.ctx}라고 해줘야하지만 sessionScope를 빼줘도된다.
sessionScope는 범위가 넓어서 ctx라는 범위를 찾을 때 지정해줄 필요가없다.
requestScope는 지정해준다. */
app.path.init("${path.ctx}");
</script>
