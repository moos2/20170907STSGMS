package com.gms.web.board;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@RequestMapping("/delete")
	public String boardDelete() {
		logger.info("board controller --- write 진입!");
		return "board/board_delete";
	}
}
