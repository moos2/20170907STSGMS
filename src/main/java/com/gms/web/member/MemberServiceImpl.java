package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;

@Service

public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mMapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@Autowired SubjectDTO subj;
	@Autowired GradeMapper gMapper;
	
	@Override @Transactional
	public int addMember(Map<?, ?> map) {
		logger.info("member service impl진입");
		logger.info("넘어온 회원의 이름:" + map);
		logger.info("넘어온 수강과목:"+map.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO> list=(List<MajorDTO>) map.get("list");
		member=(MemberDTO) map.get("member");
		major=(MajorDTO) map.get("major");
		mMapper.insert(member);
		gMapper.insertMajor(list);
		return  0;
	}

	@Override
	public String count() {
		logger.info("count is{}","entered");
		String count=mMapper.count();
		logger.info("count is {}",count);
		return count;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		return mMapper.selectAll(cmd);
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return mMapper.selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		logger.info("memberserviceimple::findbyname:: ("+cmd.getSearch()+")");
		logger.info("서비스임플 서치 카운트: "+mMapper.selectByName(cmd));
		return mMapper.selectByName(cmd);
	}

	@Override
	public int modify(MemberDTO member) {
		return mMapper.update(member);
	}

	@Override
	public int remove(CommandDTO cmd) {
		logger.info("서비스 임플에서 지울 아이디: "+cmd.getSearch());
		return mMapper.delete(cmd);
	}
	@Override
	public Map<String, Object> login(CommandDTO cmdc) {
		logger.info("memberserviceimple LOGIN 진입!!!!");
		logger.info("넘겨진 아이디와 비밀번호::"+cmdc.getSearch()+"////"+cmdc.getPage());
		Map<String, Object> map =new HashMap<>();
		cmd.setSearch(cmdc.getSearch());
		logger.info("cmd의 "+cmd.getSearch());
		
		member = mMapper.login(cmd);
		
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