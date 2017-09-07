package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constants.*;

import lombok.Getter;
import lombok.Setter;


@Lazy @Component
public class CommandDTO implements Commandable{
	@Getter 
	protected String action,pageNumber,view;
	@Getter @Setter
	protected String dir,page,startRow,endRow,column,search,email,phone;
	
	public void setPageNumber(String pageNumber){
		this.pageNumber = (pageNumber==null)?"1":pageNumber;
	}
	
	public void setAction(String action) {
		this.action = (action.equals(""))?"move":action;
	}
	
	@Override
	public void process() {
		this.view=
				(dir.equals("home"))?"/WEB-INF/view/common/home.jsp":
				Path.VIEW+dir+Path.SEPARATOR+page+Extension.JSP;
	}

	@Override
	public String toString() {
		return "Command [DEST=" + dir +"/"+page+".jsp"+",ACTION= "+action+"]";
	}

}
