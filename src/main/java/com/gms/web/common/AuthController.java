package com.gms.web.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

// authentification (권한 )로그인을 담당하는 컨트롤러
//annotation은 field, class, method에 syntax를 쓰기위해 더해주는 것이다.
//@이로 하는 것을 annotaion 이라고한다.
@Controller
@RequestMapping("/auth")
public class AuthController {
	//compile이 되면 .java가 되는데, 이것을 인지 하지 못한다. 따라서 .class를 붙여준다
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	//separator
	@RequestMapping("/login_view")
	public String goLogin(Model model) {
		//Model model -> proxy역할을 한다.
		logger.info("AuthController-goLogin으로 진입!");
		//command
		return "public:common/login.tiles";
	}
	@RequestMapping("/login")
	public String login() {
		logger.info("AuthController-login으로 진입!");
		
		return "auth:common/main.tiles";
	}
}
