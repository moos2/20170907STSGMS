package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("member service impl진입");
		MemberDTO member=(MemberDTO)map.get("member");
		System.out.println("넘어온 회원의 이름:" + member.toString());
		List<MajorDTO> list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		
		return  null;
	}

	@Override
	public String count() {
		logger.info("count is{}","entered");
		String count=mapper.count();
		logger.info("count is {}",count);
		return count;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return mapper.selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("memberserviceimple::findbyname:: ("+cmd.getSearch()+")");
		System.out.println("서비스임플 서치 카운트: "+mapper.selectByName(cmd));
		return mapper.selectByName(cmd);
	}

	@Override
	public String modify(CommandDTO cmd) {
		return null;
	}

	@Override
	public String remove(CommandDTO cmd) {
		return null;
	}
	@Override
	public Map<String, Object> login(CommandDTO cmdc) {
		System.out.println("memberserviceimple LOGIN 진입!!!!");
		System.out.println("넘겨진 아이디와 비밀번호::"+cmdc.getSearch()+"////"+cmdc.getPage());
		Map<String, Object> map =new HashMap<>();
		cmd.setSearch(cmdc.getSearch());
		System.out.println("cmd의 "+cmd.getSearch());
		
		member = mapper.login(cmd);
		
		if(member!=null) {
			if(cmdc.getPage().equals(member.getPassword())) {
			map.put("result", "sucess");
			map.put("page", "auth:common/main.tiles");
			} else {
				map.put("result", "wrong password");
				map.put("page", "public:common/login.tiles");
			}
		}else{
			map.put("result", "no id");
			map.put("page", "auth:member/member_add.tiles");
		}
		map.put("user", member);
		logger.info("로그인 결과: {}",map.get("result"));
		return map;
	}
}