package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	@RequestMapping("/delete")
	public String boardDelete() {
		logger.info("grade controller --- delete 진입!");
		return "sql/grade/board_delete";
	}
}
