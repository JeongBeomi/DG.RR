package com.ssafy.b102.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.b102.Entity.Game;

public interface GameRepository extends JpaRepository<Game, String>{
	
}
