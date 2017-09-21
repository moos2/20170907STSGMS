package com.gms.web.board;


import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@RequestMapping("/get/{category}/list")
	//메이븐에 jacson을 인젝션 해줬기 때문에 @ResponseBody, @RequestBody를 쓸 수 있다.
	public @ResponseBody Map<?, ?> boardDelete(
			@PathVariable String category
			) {
		logger.info("board controller --- 진입!");
		Map<String, String> map = new HashMap<>();
		switch (category) {
		case "board":
			map.put("msg", "게시판"+"리스트");
			break;
		case "grade":
			map.put("msg", "성적"+"리스트");
			break;
		default:
			break;
		}
		return map;
	}
}
