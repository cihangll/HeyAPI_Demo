package com.example.crudapp;

import org.springframework.stereotype.Component;

@Component
public class PersonMapper {

    public PersonDto toDto(Person person) {
        PersonDto dto = new PersonDto();
        dto.setId(person.getId());
        dto.setName(person.getName());
        dto.setSurname(person.getSurname());
        dto.setAge(person.getAge());
        return dto;
    }

    public Person toEntity(PersonDto dto) {
        Person person = new Person();
        person.setId(dto.getId());
        person.setName(dto.getName());
        person.setSurname(dto.getSurname());
        person.setAge(dto.getAge());
        return person;
    }
}