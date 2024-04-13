package com.example.demo.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor // 기본 생성자 추가
@AllArgsConstructor
public class User {
	private UUID id;
    private long userId;
    private String name;
    // Getter 및 Setter 메서드는 생략되었습니다. 
    // 실제 프로젝트에서는 필요에 따라 추가해야 합니다.
 // 생성자 추가
    public User(long userId, String name) {
        this.id = UUID.randomUUID(); // UUID로 id 자동 생성
        this.userId = userId;
        this.name = name;
    }
}