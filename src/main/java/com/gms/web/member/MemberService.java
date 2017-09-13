package com.gms.web.member;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
@Component
public interface MemberService {
	public String addMember(Map<String, Object> map);
	public List<?> list(CommandDTO cmd); //목록을 가져와서 보여주기
	public List<?> findByName(CommandDTO cmd);
	public StudentDTO findById(CommandDTO cmd);
	public String count();
	public String modify(CommandDTO cmd);
	public String remove(CommandDTO cmd);
	public Map<String, Object> login(CommandDTO cmd);
}
