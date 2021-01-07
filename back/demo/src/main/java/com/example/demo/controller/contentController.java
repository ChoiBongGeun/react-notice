package com.example.demo.controller;

import java.util.List;
import java.text.SimpleDateFormat;
import java.util.Date;

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
        System.out.println("게시판 목록 출력 성공");
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
    void insertUser(@RequestBody contentVO content) {
        contentMapper.create(content);
        System.out.println("글 저장 성공");
    }
    @PutMapping("/{bno}")
    public void updatecontent(@PathVariable int bno, @RequestBody  contentVO content) {

        contentVO updatecontent= content;
        System.out.println("글 업데이트 => " + updatecontent);

        updatecontent.setTitle(content.getTitle());
        updatecontent.setContent(content.getContent());
        Date today = new Date();
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        updatecontent.setRegdate(date.format(today));
        contentMapper.update(updatecontent);
    }
    @DeleteMapping("/{bno}")
    public void delete(@PathVariable int bno) {
        contentMapper.delete(bno);
        System.out.println("글삭제");
    }
}