package com.gms.web.mapper;
import java.util.List;
import java.util.Map;

import org.mvel2.sh.Command;
import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Repository
public interface MemberMapper {
	public String insert(Map<?,?> map);
	public List<?> selectAll(CommandDTO cmd); 
	public List<?> selectByName(CommandDTO cmd);
	public StudentDTO selectById(CommandDTO cmd);
	public String count();
	public String update(Command cmd);
	public String delete(Command cmd);
	public MemberDTO login(CommandDTO cmd);
}
