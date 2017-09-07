package com.gms.web.member;
import java.util.List;
import java.util.Map;

import org.mvel2.sh.Command;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDAO {
	public String insert(Map<?,?> map);
	public List<?> selectAll(Command cmd); 
	public List<?> selectByName(Command cmd);
	public StudentDTO selectById(Command cmd);
	public String count(Command cmd);
	public String update(Command cmd);
	public String delete(Command cmd);
	public MemberDTO login(Command cmd);
}
