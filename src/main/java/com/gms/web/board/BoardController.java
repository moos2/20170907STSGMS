package com.gms.web.board;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@RequestMapping("/write")
	public String boardWrite() {
		logger.info("board controller --- write 진입!");
		return "board/board_write";
	}
	
	@RequestMapping("/list")
	public String boardList() {
		logger.info("board controller --- write 진입!");
		return "board/board_list";
	}
	@RequestMapping("/detail")
	public String boardDetail() {
		logger.info("board controller --- write 진입!");
		return "board/board_detail";
	}
	@RequestMapping("/update")
	public String boardUpdate() {
		logger.info("board controller --- write 진입!");
		return "board/board_update";
	}
	@RequestMapping("/delete")
	public String boardDelete() {
		logger.info("board controller --- write 진입!");
		return "board/board_delete";
	}
}
