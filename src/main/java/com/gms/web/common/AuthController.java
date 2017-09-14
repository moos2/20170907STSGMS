package com.gms.web.common;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

// authentification (권한 )로그인을 담당하는 컨트롤러
//annotation은 field, class, method에 syntax를 쓰기위해 더해주는 것이다.
//@이로 하는 것을 annotaion 이라고한다.
@Controller
@RequestMapping("/auth")
@SessionAttributes("user")
public class AuthController {
	//compile이 되면 .java가 되는데, 이것을 인지 하지 못한다. 따라서 .class를 붙여준다
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Autowired MemberService service;
	@Autowired MemberDTO bean;
	@Autowired CommandDTO cmd;
	//separator
	@RequestMapping("/login_view")
	public String goLogin(Model model) {
		//Model model -> proxy역할을 한다.
		logger.info("AuthController-goLogin으로 진입!");
		//command
		return "public:common/login.tiles";
	}
	//method를 post 방식으로 쓰면 value를 꼭 써줘야한다.
	//post방식을 쓰면 requestparam을 써줘야지 pathvariable을 쓰면 안된다.
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(Model model,
			@RequestParam("server_id") String id, 
			@RequestParam("server_pass") String pass
			) {
		logger.info("AuthController-login으로 진입!");
		logger.info("로그인 아이디:: "+id);
		logger.info("로그인 비밀번호:: "+pass);
		cmd.setSearch(id);
		cmd.setPage(pass);
		Map<String, Object> map=service.login(cmd);
		logger.info("서비스 로그인의 result: "+map.get("result"));
		model.addAttribute("result", map.get("result"));
		if(map.get("result").equals("sucess")) {
			model.addAttribute("user", map.get("user"));
		}else {
			model.addAttribute("result", map.get("result"));
		}
		return String.valueOf(map.get("page"));
	}
}
