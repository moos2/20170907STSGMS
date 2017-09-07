package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;
@Component
public interface BoardService {
	public String write(BoardDTO bean);
	public List<BoardDTO> list(); //목록을 가져와서 보여주기
	public List<BoardDTO> findByName(String name);
	public List<BoardDTO> findById(String id);
	public BoardDTO findBySeq(String seq);
	public String count();
	public String modify(BoardDTO bean);
	public String remove(String id);
}
