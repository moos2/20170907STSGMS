package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;

@Service
public class MemberServiceImpl implements MemberService {
	public static MemberServiceImpl instance = new MemberServiceImpl();
	
	public static MemberServiceImpl getInstance() {
		return instance;
	}
	private MemberServiceImpl() {}

	@SuppressWarnings("unchecked")
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
	public String count(CommandDTO cmd) {
		return null;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		System.out.println("serviceimpl에서 pagenum:::::::::"+cmd.getPageNumber());
		return null;
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return null;
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("memberserviceimple::findbyname:: ("+cmd.getSearch()+")");
		return null;
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
	public Map<String, Object> login(MemberDTO bean) {
		System.out.println("memberserviceimple LOGIN 진입!!!!");
		System.out.println("넘겨진 아이디와 비밀번호::"+bean.getId()+"////"+bean.getPassword());
		Map<String, Object> map =new HashMap<>();
		CommandDTO cmd=new CommandDTO();
		cmd.setSearch(bean.getId());
		MemberDTO m = null;
		String page = 
				(m!=null)?(bean.getPassword().equals(m.getPassword()))?"main":"login_fail":"join";
		map.put("page", page);
		map.put("user", m);
		return map;
	}
}