package com.gms.web.common;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.complex.PathFactory;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping("/")
	public String home(Locale locale, Model model, HttpSession session) {
		logger.info("Welcome home! The client locale is {}.", locale);
		Date date = new Date();	
		SimpleDateFormat df=new SimpleDateFormat("yyyy 년 MM 월 dd 일 hh 시 mm 분 ss 초");
		String today=df.format(date);
		
		model.addAttribute("serverTime", today );
		session.setAttribute("path", PathFactory.create());
		
		return "public:common/home.tiles";
	}
	
}
