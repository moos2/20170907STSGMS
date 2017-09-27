package com.gms.web.board;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.RespMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired GradeMapper gradeMapper;
	@Autowired BoardMapper boardMapper;
	@Autowired Command cmd;
	
	
	
	public @ResponseBody Map<?, ?> post(){
		//메이븐에 jackson을 인젝션 해줬기 때문에 @ResponseBody, @RequestBody를 쓸 수 있다.
		return null;
	};
	@RequestMapping("/get/{category}/list/{search}")
	public @ResponseBody Map<?, ?> list(
			@PathVariable String category,
			@PathVariable String search
			) {
		logger.info("board controller --- 진입!");
		logger.info("보드컨트롤러의 서치: {}",search);
		Map<String, Object> map = new HashMap<>();
		if(search.equals("1")) {
			switch (category) {
			case "board":
				IListService listService =null;
				IGetService countService=null;
				listService=(x)-> {
						return boardMapper.selectList(cmd);
				};
				countService=(x)->{
					return boardMapper.count(cmd);
				};
				RespMap r=(RespMap) countService.execute(cmd);
				
				map.put("msg", "보드리스트");
				map.put("total", r);
				map.put("list", listService.execute(cmd));
				break;
			case "grade":
				map.put("msg", "성적"+"리스트");
			/*	cmd=null;
				listService=(x)->{
					return gradeMapper.selectSome(cmd);
				};
				cmd=null;*/
				break;
			default:
				break;
			}
		}else {
			switch (category) {
			case "board":
				IListService listService =null;
				logger.info("if else로 들어온 아이디 : {}",search);
				/*cmd=new Command();*/
				cmd.setDir(search);
				logger.info("cmd DIR에 set 된 아이디: {}",cmd.getDir());
				listService=(x)-> {
						return (List<Article>) boardMapper.selectList(cmd);
				};
				logger.info("보드리스트의 리스트서비스: {}",listService);
				map.put("msg", "보드리스트");
				map.put("list", listService.execute(cmd));
				break;
			case "grade":
				map.put("msg", "성적"+"리스트");
			/*	cmd=null;
				listService=(x)->{
					return gradeMapper.selectSome(cmd);
				};
				cmd=null;*/
				break;
			default:
				break;
			}
		}
		return map;
	}
	@RequestMapping("/get/{category}/{seq}")
	public @ResponseBody Map<?, ?> get(@PathVariable String category,@PathVariable String seq){
		Map<String, Object> map = new HashMap<>();
		IGetService detailService=null;
		RespMap bean=null;
		switch (category) {
		case "detail":
			logger.info("디테일 컨트롤러로 넘어온 시퀀스: {}",seq);
			cmd.setSearch(seq);
			detailService=(x)->{
				return boardMapper.selectOne(cmd);
			};
			bean = (RespMap) detailService.execute(cmd);
			map.put("seq", seq);
			map.put("bean", bean);
			logger.info("respmpa에 담긴 내용 {}",map.get("bean"));
			break;
		default:
			break;
		}
		return map;
	};
	@RequestMapping(value="/put/articles",
            method=RequestMethod.POST,
            consumes="application/json")
	public @ResponseBody Map<?, ?> put(
			@RequestBody RespMap art){
		Map<String, Object> map = new HashMap<>();
		IPutService updateService = null;
		map.put("msg", art.getSeq());
		cmd.setAction(art.getTitle());
		cmd.setColumn(art.getContent());
		cmd.setDir(art.getSeq());
		updateService =(x)->{
			boardMapper.update(cmd);
			};
		updateService.execute(cmd);
		map.put("seq", art.getSeq());
		return map;
	};
	public @ResponseBody Map<?, ?> delete(){
		return null;
	};
}
