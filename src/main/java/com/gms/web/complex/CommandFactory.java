package com.gms.web.complex;
import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.command.ListCommand;
import com.gms.web.command.MoveCommand;
import com.gms.web.command.SearchCommand;
import com.gms.web.constants.Action;
@Component
public class CommandFactory {
	public static CommandDTO createCommand(String dir,String action,String page,String pageNumber,String column,String search){
		CommandDTO cmd = null;
		if(action==null){action=Action.LOGIN;}
		System.out.println(action);
		switch (action) {
		case Action.MOVE : 
		case Action.LOGIN: 
		case Action.LOGOUT: 
		case Action.MEMBER_ADD:
		case Action.MEMBER_UPDATE:
		case Action.MEMBER_DELETE:
		case Action.MEMBER_DETAIL:
			cmd=new MoveCommand(dir,action,page);
			break;
		case Action.MEMBER_LIST:
			cmd=new ListCommand(dir, action, page, pageNumber);
			break;
		case Action.MEMBER_SEARCH:
			cmd = new SearchCommand(dir, action, page, pageNumber, column, search);
			break;
		default:
			System.out.println("command fail");
			break;
		}
		return cmd;
	}
}
