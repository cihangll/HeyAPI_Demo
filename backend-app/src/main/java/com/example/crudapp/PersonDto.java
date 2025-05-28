package com.example.crudapp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonDto {
    private String id;
    private String name;
    private String surname;
    private Integer age;
}
