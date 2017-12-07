package com.bolster.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class IndexController {

	@RequestMapping(method = RequestMethod.GET)
	public String getIndexPage(){
		System.out.println("*********   getIndexPage  ********");
		return "index";
	}
	
//	@RequestMapping(value="/event", method = RequestMethod.GET)
//	public String getEventPage(){
//		return "event";
//	}
//	
//	@RequestMapping(value="/club", method = RequestMethod.GET)
//	public String getClubPage(){
//		return "club";
//	}
//	
//	@RequestMapping(value="/user", method = RequestMethod.GET)
//	public String getUserPage(){
//		return "user";
//	}
//	
//	@RequestMapping(value="/group", method = RequestMethod.GET)
//	public String getGroupPage(){
//		return "group";
//	}
}
