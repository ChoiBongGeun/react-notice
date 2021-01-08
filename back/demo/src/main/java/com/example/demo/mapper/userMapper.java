package com.example.demo.mapper;


import com.example.demo.vo.userVO;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface userMapper {

    void adduser(userVO user);
    userVO checkuser(userVO user);
    userVO loginuser(userVO user);
    userVO forgotid(userVO user);
    userVO forgotpw(userVO user);
    void updateuser(userVO user);
    void updatepw(userVO user);
    void delete(String user);


}
