package com.gms.web.constants;

import org.springframework.stereotype.Component;

@Component
public class SQL {
public static final String MEMBER_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s,%s,%s) VALUES(?,?,?,?,?,?,?,now())",DB.TABLE_MEMBER, DB.MEMBER_ID, DB.MEMBER_NAME, DB.MEMBER_PASS, DB.MEMBER_SSN,DB.PHONE,DB.PROFILE,DB.EMAIL,DB.REGDATE);
public static final String MEMBER_LIST=String.format("SELECT * FROM %s", DB.TABLE_MEMBER);
public static final String MEMBER_FINDBYNAME =String.format( "SELECT * FROM %s WHERE %s=?", DB.TABLE_MEMBER,DB.MEMBER_NAME);
public static final String MEMBER_FINDBYID=String.format("SELECT * FROM %s WHERE %s=?",DB.TABLE_MEMBER,DB.MEMBER_ID);
public static final String MEMBER_COUNT=String.format("SELECT COUNT(*) AS %s FROM %s","count",DB.TABLE_MEMBER);
public static final String MEMBER_UPDATE=String.format("UPDATE %s SET %s=? WHERE %s=?", DB.TABLE_MEMBER,DB.MEMBER_PASS,DB.MEMBER_ID);
public static final String MEMBER_DELETE=String.format("DELETE FROM %s WHERE %s =?", DB.TABLE_MEMBER,DB.MEMBER_ID);

public static final String ARTICLE_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES(article_seq.nextval,?,?,?,0,now())",DB.TABLE_BOARD,DB.ARTICLE_SEQ,DB.ARTICLE_ID,DB.TITLE,DB.ARTICLE_CONTENT,DB.HIT_COUNT,DB.REGDATE);
public static final String ARTICLE_SELECTALL=String.format("SELECT * FROM %s", DB.TABLE_BOARD);
public static final String ARTICLE_FINDBYID=String.format("SELECT * FROM %s WHERE %s=?",DB.TABLE_BOARD,DB.ARTICLE_ID);
public static final String ARTICLE_COUNT=String.format("SELECT COUNT(*) AS %s FROM %s","count",DB.TABLE_BOARD);
public static final String ARTICLE_UPDATE=String.format("UPDATE %s SET %s=? WHERE %s=?", DB.TABLE_BOARD,DB.ARTICLE_CONTENT,DB.ARTICLE_SEQ);
public static final String ARTICLE_DELETE=String.format("DELETE FROM %s WHERE %s =?", DB.TABLE_BOARD,DB.ARTICLE_SEQ);
public static final String ARTICLE_FINDBYSEQ=String.format("SELECT * FROM %s WHERE %s=?",DB.TABLE_BOARD,DB.ARTICLE_SEQ);

public static final String MAJOR_INSERT=String.format("INSERT INTO %s(%s,%s,%s,%s) VALUES(?,?,?,?)",DB.TABLE_MAJOR,DB.MAJOR_ID,DB.TITLE,DB.MEMBER_ID,DB.SUBJECT_ID);

public static final String STUDENT_LIST="select k.* from (SELECT @rownum:=@rownum+1 AS num,t.* from student t, (select @rownum:=0) b) k where num >= ? and num <= ?";
public static final String STUDENT_FINDBYNAME="select k.* from (SELECT @rownum:=@rownum+1 AS num,t.* from student t, (select @rownum:=0) b) k where name LIKE ?";
public static final String STUDENT_COUNT=String.format("SELECT COUNT(*) AS COUNT FROM %s WHERE %s LIKE ?",DB.TABLE_STUDENT,"name");
public static final String STUDENT_FINDBYID="select k.* from (SELECT @rownum:=@rownum+1 AS num,t.* from student t, (select @rownum:=0) b) k where member_id LIKE ?";
public static final String STUDENT_UPDATE=String.format("UPDATE %s SET %s=? WHERE %s LIKE?", DB.TABLE_MEMBER,"email",DB.MEMBER_ID);
}

