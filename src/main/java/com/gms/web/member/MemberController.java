package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/member")
public class MemberController {
		private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
		
		@RequestMapping("/join")
		public String memberAdd() {
			logger.info("memberController-join으로 진입!!");
			return "auth:member/member_add.tiles";
		}
		@RequestMapping("/list")
		public String memberList() {
			logger.info("memberController-list으로 진입!!");
			return "auth:member/member_list.tiles";
		}
		@RequestMapping("/detail")
		public String memberDetail() {
			logger.info("memberController-detail으로 진입!!");
			return "auth:member/member_detail.tiles";
		}
		@RequestMapping("/update")
		public String memberUpdate() {
			logger.info("memberController-update으로 진입!!");
			return "auth:member/member_update.tiles";
		}
		@RequestMapping("/delete")
		public String memberDelete() {
			logger.info("memberController-delete으로 진입!!");
			return "auth:member/member_delete.tiles";
		}
	}
