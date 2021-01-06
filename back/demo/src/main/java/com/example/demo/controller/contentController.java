package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.mapper.contentMapper;
import com.example.demo.vo.contentVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/content")
public class contentController{

    @Autowired
    contentMapper contentMapper;

    @GetMapping
    public List<contentVO> contentList(){
        System.out.println(contentMapper.contentList());
        System.out.println("유저리스트 출력 성공");
        return contentMapper.contentList();
    }
    @GetMapping("/read/{bno}")
    public contentVO read(@PathVariable int bno) {
        System.out.println(contentMapper.contentread(bno));
        System.out.println("bno 출력 성공");
        contentVO readcontent = contentMapper.contentread(bno);
        return readcontent;

    }
    @PostMapping
    void insertUser(@RequestBody contentVO user) {
        contentMapper.create(user);
        System.out.println("유저 DB 저장 성공");
    }
    @PutMapping("/{bno}")
    public void updatecontent(@PathVariable int bno, @RequestBody  contentVO content) {

        contentVO updatecontent= content;
        System.out.println("업데이트유저 => " + updatecontent);

        updatecontent.setTitle(content.getTitle());
        updatecontent.setContent(content.getContent());
        contentMapper.update(updatecontent);
    }
    @DeleteMapping("/{bno}")
    public void delete(@PathVariable int bno) {
        contentMapper.delete(bno);
        System.out.println("유저 삭제, 성공적");
    }
}