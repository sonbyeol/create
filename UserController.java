package com.example.demo.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.User;

import jakarta.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.UUID;

@RestController
public class UserController {

    @GetMapping("/usersrest")
    public List<User> getAllUsers(HttpServletResponse response) {
        // 여기에서 실제로 데이터베이스에서 사용자 목록을 가져오는 코드를 작성하세요.
        // 예를 들어, UserRepository를 주입받아 사용자 목록을 가져올 수 있습니다.
        // List<User> users = userRepository.findAll();
        
        // 임시로 하드코딩된 사용자 목록을 반환하는 예제:
        List<User> users = List.of(
            new User(1, "John"),
            new User(2, "Alice"),
            new User(3, "Bob")
        );
        
     // Content-Range 헤더를 추가하여 전체 결과 수를 제공합니다.
        // 여기서는 임시로 총 사용자 수를 3으로 설정하였습니다.
        String contentRange = "items 0-2/3";

        // HttpServletResponse를 사용하여 헤더를 설정합니다.
        response.setHeader("Content-Range", contentRange);
        // 클라이언트에 노출할 추가적인 응답 헤더를 지정합니다.
        response.setHeader("Access-Control-Expose-Headers", "Content-Range");

        return users;
    }
    
    @PostMapping("/usersrest")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // 클라이언트가 보낸 사용자 정보를 받아옵니다.
        // 이때 userId는 클라이언트에서 자동으로 생성되므로 사용자 정보에는 포함되지 않습니다.
        
        // 받아온 사용자 정보로 새로운 사용자를 생성합니다.
        // 여기서는 임시로 UUID를 생성하여 id로 사용합니다.
        UUID userId = UUID.randomUUID();
        user.setId(userId);
        
        // 생성된 사용자 정보를 데이터베이스에 저장하거나 다른 작업을 수행합니다.
        // 여기서는 간단히 사용자 정보를 로그에 출력합니다.
        System.out.println("Created user: " + user);

        // 클라이언트에게 새로운 사용자가 생성되었음을 응답합니다.
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}