package com.bolster.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.bolster.model.User;

/** Repository manager for User. */
public interface UserRepository extends CrudRepository<User, Integer> {

  /** Get collections of Users by name. */
  List<User> findByLastName(@Param("name") String name);

}
