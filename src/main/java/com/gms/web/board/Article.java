package com.gms.web.board;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class Article{
	private String id, title, content, regdate
	,articleSeq, hitcount;

	@Override
	public String toString() {
		return "ArticleBean [id=" + id + ", title=" + title + ", content=" + content + ", regdate=" + regdate
				+ ", articleSeq=" + articleSeq + ", hitCount=" + hitcount + "]\n";
	}
}
