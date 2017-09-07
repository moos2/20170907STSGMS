package com.gms.web.board;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class BoardDTO{
	private String id, title, content, regdate;
	private int articleSeq, hitCount;

	@Override
	public String toString() {
		return "ArticleBean [id=" + id + ", title=" + title + ", content=" + content + ", regdate=" + regdate
				+ ", articleSeq=" + articleSeq + ", hitCount=" + hitCount + "]\n";
	}
}
