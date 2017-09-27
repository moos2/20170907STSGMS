package com.gms.web.mapper;
import java.util.List;
import java.util.Map;

import org.mvel2.sh.Command;
import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.Member;
import com.gms.web.member.Student;

@Repository
public interface MemberMapper {
	public int insert(Member member);
	public List<?> selectAll(CommandDTO cmd); 
	public List<?> selectByName(CommandDTO cmd);
	public Student selectById(CommandDTO cmd);
	public String count();
	public int update(Member member);
	public int delete(CommandDTO cmd);
	public Member login(CommandDTO cmd);
}
