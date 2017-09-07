package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	
	@RequestMapping("/add")
	public String gradeAdd() {
		logger.info("grade controller --- write 진입!");
		return "sql/grade/grade_add";
	}
	
	@RequestMapping("/list")
	public String boardList() {
		logger.info("grade controller --- list 진입!");
		return "sql/grade/grade_list";
	}
	@RequestMapping("/detail")
	public String boardDetail() {
		logger.info("grade controller --- detail 진입!");
		return "sql/grade/grade_detail";
	}
	@RequestMapping("/update")
	public String boardUpdate() {
		logger.info("grade controller --- update 진입!");
		return "sql/grade/board_update";
	}
	@RequestMapping("/delete")
	public String boardDelete() {
		logger.info("grade controller --- delete 진입!");
		return "sql/grade/board_delete";
	}
}
