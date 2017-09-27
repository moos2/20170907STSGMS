package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.tomcat.util.http.fileupload.util.LimitedInputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.PageProxy;
@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
		private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
		@Autowired MemberService service;
		@Autowired Member member;
		@Autowired CommandDTO cmd;
		@Autowired MajorDTO major;
		@Autowired PageProxy pxy;
		
		@RequestMapping(value="/add",method=RequestMethod.POST)
		public String addStudent(
				@ModelAttribute Member member,
				@RequestParam("subject") List<String> list
				) {
			logger.info("memberController-add로 진입!!");
			logger.info("등록 학생 정보 : {}",member);
			logger.info("등록 과목 : {}",list);
			Map<String, Object> paramMap=new HashMap<>();
			paramMap.put("member", member);
			
			List<MajorDTO> paramList = new ArrayList<>();
			MajorDTO mj=null;
			for(String m:list) {
				int random=(int) (Math.random()*9999)+1000;
				mj= new MajorDTO();
				mj.setMemberId(member.getMemberId());
				mj.setMajorId(String.valueOf(random));
				mj.setSubjId(m);
				mj.setTitle(m);
				paramList.add(mj);
			}
			
			paramMap.put("list", paramList);
			
			service.addMember(paramMap);
			return "redirect:/member/member_list/1";
		}
		
		@RequestMapping("/member_list/{pageNumber}")
		@SuppressWarnings({ "unchecked", "unused" })
		public String memberList(
				Model model,
				@PathVariable int pageNumber
				) {
			logger.info("memberController-list로 진입!!");
			pxy.setPageSize(5);
			pxy.setBlockSize(5);
			pxy.setPageNumber(pageNumber);
			int count = Integer.parseInt(service.count());
			pxy.setTheNumberOfRows(count);
			int[] result=new int[6];
			int theNumberOfPages=0,startPage=0,endPage=0;
			
			theNumberOfPages = (pxy.getTheNumberOfRows() %pxy.getBlockSize()) == 0 ?pxy.getTheNumberOfRows() / pxy.getBlockSize() : pxy.getTheNumberOfRows() / pxy.getBlockSize() +1;
		      startPage = pxy.getPageNumber()-((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		      endPage = (startPage + pxy.getBlockSize() -1 <= theNumberOfPages) ?
		            startPage + pxy.getBlockSize() -1 : theNumberOfPages;
			
			result[0]=pxy.getPageNumber();
			result[1]=theNumberOfPages;
			result[2]=startPage;
			result[3]=endPage;
			result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
			result[5]=startPage+pxy.getBlockSize();
			
			
			if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1) {
				if(pxy.getPageNumber()==1) {
					cmd.setStartRow("1");
					cmd.setEndRow(String.valueOf(pxy.getPageSize()));
				}else {
					logger.info("pageNumber는? "+pxy.getPageNumber());
					cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize()+1));
					cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
				}
			}
			
			List<Student> list = (List<Student>) service.list(cmd);
			System.out.println("리스트 결과: "+list);
			pxy.execute(model, result, list);
			return "auth:member/member_list.tiles";
		}
		
		@RequestMapping("/member_search/{name}/{pageNumber}")
		public String searchStd(
				Model model,
				@PathVariable String name,
				@PathVariable int pageNumber
				) {
			model.addAttribute("searchName", name);
			cmd.setSearch(name);
			logger.info("search controller 검색한 이름:"+name);
			pxy.setPageSize(5);
			pxy.setBlockSize(5);
			int count = (service.findByName(cmd).size());
			pxy.setPageNumber(pageNumber);
			logger.info("서치 카운트: "+count);
			pxy.setTheNumberOfRows(count);
			int[] result=new int[6];
			int theNumberOfPages=0,startPage=0,endPage=0;
			
			theNumberOfPages = (pxy.getTheNumberOfRows() % pxy.getBlockSize()) == 0 ?
					pxy.getTheNumberOfRows() / pxy.getBlockSize() : pxy.getTheNumberOfRows() / pxy.getBlockSize() +1;
		      startPage = pxy.getPageNumber()-((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		      endPage = (startPage + pxy.getBlockSize() -1 <= theNumberOfPages) ?
		            startPage + pxy.getBlockSize() -1 : theNumberOfPages;
			
			result[0]=pxy.getPageNumber();
			result[1]=theNumberOfPages;
			result[2]=startPage;
			result[3]=endPage;
			result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
			result[5]=startPage+pxy.getBlockSize();
			
			if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1) {
				if(pxy.getPageNumber()==1) {
					cmd.setStartRow("1");
					cmd.setEndRow(String.valueOf(pxy.getPageSize()));
				}else {
					logger.info("서치 pageNumber는? "+pxy.getPageNumber());
					cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize()+1));
					cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
				}
			}
			
			@SuppressWarnings("unchecked")
			List<Student> list = (List<Student>) service.findByName(cmd);
			System.out.println("서치 리스트 결과: "+list);
			pxy.execute(model, result, list);
			logger.info("search controller에서 불러온 리스트"+service.findByName(cmd));
			return"auth:member/member_list.tiles";
		}
		
		@RequestMapping("/delete/{delId}")
		public String memberDelete(
				@PathVariable String delId
				) {
			logger.info("memberController-delete으로 진입!!");
			logger.info("멤버 컨트롤러에서 삭제할 id: "+delId);
			cmd.setSearch(delId);
			service.remove(cmd);
			if(service.remove(cmd)==1) {
				logger.info(delId+"를 삭제성공!");
			}else {
				logger.info(delId+"를 삭제실패!");
			}
			/* "redirect:"에서 "/"로 시작하면 절대경로(이 프로젝트의 ctx)가 된다..
			 * redirect를 쓰면 URL을 만들어주는 것이다.
			 *  */
			return "redirect:/member/member_list/1";
		}
		
		@RequestMapping("/detail/{detailId}")
		public String memberDetail(
				Model model,
				@PathVariable String detailId
				) {
			cmd.setColumn(detailId);
			model.addAttribute("student", service.findById(cmd));
			return "auth:member/member_detail.tiles";
		}
		
		@RequestMapping(value="/update", method=RequestMethod.POST)
		public String update(
				@ModelAttribute Member studentUpdate
				) {
			logger.info("멤버 컨트롤러 UPDATE로 진입!");
			logger.info("UPDATE로 넘어온 바꿀 이메일: "+studentUpdate.getEmail());
			logger.info("UPDATE로 넘어온 바꿀 전화번호: "+studentUpdate.getPhone());
			service.modify(studentUpdate);
			return "redirect:/member/detail/"+studentUpdate.getMemberId();
		}
	}