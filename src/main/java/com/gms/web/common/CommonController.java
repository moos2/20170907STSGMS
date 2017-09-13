package com.gms.web.common;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@RequestMapping("/path/{dir}/{page}")
	public String moveTo(
			@PathVariable String dir, 
			@PathVariable String page,
			HttpSession session) {
		logger.info("--commoncontroller 진입--");
		logger.info("넘어온 category: "+dir+"+ 넘어온 page: "+page);
		return String.format("auth:%s/%s.tiles", dir,page);
	}
}
