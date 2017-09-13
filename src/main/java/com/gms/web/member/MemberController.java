package com.gms.web.member;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.gms.web.command.CommandDTO;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;
@Controller
@RequestMapping("/member")
public class MemberController {
		private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
		@Autowired MemberService service;
		@Autowired MemberDTO member;
		@Autowired CommandDTO cmd;
		@Autowired PageProxy pxy;
		
		@RequestMapping("/member_add")
		public String memberAdd() {
			logger.info("memberController-add로 진입!!");
			return "auth:member/member_delete.tiles";
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
			
			List<StudentDTO> list = (List<StudentDTO>) service.list(cmd);
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
			pxy.setTheNumberOfRows(9);
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
			List<StudentDTO> list = (List<StudentDTO>) service.findByName(cmd);
			System.out.println("서치 리스트 결과: "+list);
			pxy.execute(model, result, list);
			logger.info("search controller에서 불러온 리스트"+service.findByName(cmd));
			return"auth:member/member_list.tiles";
		}
		
		@RequestMapping("/delete")
		public String memberDelete() {
			logger.info("memberController-delete으로 진입!!");
			return "auth:member/member_delete.tiles";
		}
	}