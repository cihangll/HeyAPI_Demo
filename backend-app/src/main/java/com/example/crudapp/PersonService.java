package com.example.crudapp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonService {
    private final PersonRepository personRepository;
    private final PersonMapper personMapper;

    public List<PersonDto> getAllPersons() {
        return personRepository.findAll().stream()
                .map(personMapper::toDto)
                .collect(Collectors.toList());
    }

    public Optional<PersonDto> getPersonById(String id) {
        return personRepository.findById(id)
                .map(personMapper::toDto);
    }

    public PersonDto savePerson(PersonDto personDto) {
        Person person = personMapper.toEntity(personDto);
        Person savedPerson = personRepository.save(person);
        return personMapper.toDto(savedPerson);
    }

    public void deletePerson(String id) {
        personRepository.deleteById(id);
    }

    public boolean existsById(String id) {
        return personRepository.existsById(id);
    }

    public PersonDto updatePerson(String id, PersonDto personDto) {
        personDto.setId(id);
        Person person = personMapper.toEntity(personDto);
        Person updatedPerson = personRepository.save(person);
        return personMapper.toDto(updatedPerson);
    }
}