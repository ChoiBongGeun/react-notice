package com.example.demo.mapper;

import com.example.demo.vo.contentVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface contentMapper {

    List<contentVO> contentList();
    contentVO contentread(int bno);
    List<contentVO> mycontent(String write);
    void create(contentVO content);
    void delete(int bno);
    void update(contentVO content);

}