package com.example.demo.controller;

import com.example.demo.vo.contentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.mapper.userMapper;
import com.example.demo.vo.userVO;

import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class userController {
    @Autowired
    userMapper userMapper;

    @PostMapping("/login")
    public Object login(@RequestBody userVO user) {
        userVO login = userMapper.loginuser(user);
        if(login==null) {
            String message = "fail";
            System.out.println(message);
            return message;
        }
        else{
            System.out.println("로그인 성공");
            return login;
        }

    }
    @PostMapping("/checkuser")
    public Object checkuser(@RequestBody userVO user) {
        userVO check = userMapper.checkuser(user);
        System.out.println(user);
        if(check==null) {
            String message = "fail";
            System.out.println(message);
            return message;
        }
        else{
            String message = "success";
            System.out.println(check);
            return message;
        }

    }
    @PutMapping("/updateuser")
    public void updateuser(@RequestBody  userVO user) {
        userMapper.updateuser(user);
    }
    @PutMapping("/updatepw")
    public void updatepw(@RequestBody  userVO user) {
        System.out.println("비번변경");
        System.out.println(user);
        userMapper.updatepw(user);
    }

    @PostMapping("/adduser")
    void addUser(@RequestBody userVO user) {
        userMapper.adduser(user);
        System.out.println("회원가입성공");
    }
    @PostMapping("/forgotid")
    public Object forgotid(@RequestBody userVO user) {
        userVO forgot =userMapper.forgotid(user);
        System.out.println(forgot);
        if(forgot==null) {
            String message = "fail";
            System.out.println(message);
            return message;
        }
        else{
            return forgot;
        }
    }
    @PostMapping("/forgotpw")
    public Object forgotpw(@RequestBody userVO user) {
        userVO forgot =userMapper.forgotpw(user);
        System.out.println(forgot);
        if(forgot==null) {
            String message = "fail";
            return message;
        }
        return forgot;
    }
    @DeleteMapping("/{user}")
    public void delete(@PathVariable String user) {
        userMapper.delete(user);
        System.out.println("글삭제");
    }
}
