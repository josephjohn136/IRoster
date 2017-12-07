package com.bolster.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bolster.model.User;
import com.bolster.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	
	@RequestMapping("/user/{userId}")
	public User getUser(@PathVariable final Integer userId){
		return userRepository.findOne(userId);
	}
}
