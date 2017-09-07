package com.gms.web.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
@Service
public class BoardServiceImpl implements BoardService{
	BoardDTO bean;
	public static BoardServiceImpl instance = new BoardServiceImpl();
	public static BoardServiceImpl getInstance() {
		return instance;
	}
	List<BoardDTO> list;
	Map<String, BoardDTO> map;
	int count;
	private BoardServiceImpl() {
		bean = new BoardDTO();
		list = new ArrayList<>();
		map = new HashMap<>();
		count = 0;
	}
	@Override
	public String write(BoardDTO bean) {
		return null;
	}
	@Override
	public List<BoardDTO> list() {
		return null;	}
	@Override
	public List<BoardDTO> findByName(String name) {
		return null;
	}
	@Override
	public List<BoardDTO> findById(String id) {
		return null;
	}
	@Override
	public String count() {
		return null;
	}
	@Override
	public String modify(BoardDTO bean) {
		return null;
	}

	@Override
	public String remove(String id) {
		return null;
	}
	@Override
	public BoardDTO findBySeq(String seq) {
		return null;
	}

}
