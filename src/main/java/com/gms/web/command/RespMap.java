package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class RespMap {
	private String memberId, studentId,title, content,
			regdate,hitcount,count,seq,
			name,password,ssn,phone,email,profile;
}
