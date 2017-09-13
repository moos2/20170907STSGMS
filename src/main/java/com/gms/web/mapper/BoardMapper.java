package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.BoardDTO;
@Repository
public interface BoardMapper {
	public String insert(BoardDTO bean);
	public List<BoardDTO> selectAll(); 
	public List<BoardDTO> selectById(String id);
	public BoardDTO selectBySeq(String seq);
	public String count();
	public String update(BoardDTO bean);
	public String delete(String seq);
}
