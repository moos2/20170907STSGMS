package com.gms.web.member;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO{
	private String memberId,password,name,ssn,regdate,email,phone,profile;
	//private Map<String, Object> major,subject;
	
	public String toString() {
		return String.format("이름:%s 아이디:%s 비밀번호:%s 주민번호:%s 전화번호:%s 이메일:%s\n",name,memberId,password,ssn,phone,email);
	}
}