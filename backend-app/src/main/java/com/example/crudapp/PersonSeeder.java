package com.example.crudapp;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class PersonSeeder implements CommandLineRunner {

    private final PersonRepository personRepository;

    @Override
    public void run(String... args) {
        if (personRepository.count() > 0) return;

        List<Person> persons = Arrays.asList(
                new Person("Ahmet", "Y.", 35),
                new Person("Ayşe", "D.", 28),
                new Person("Mehmet", "K.", 42),
                new Person("Fatma", "Ş.", 31),
                new Person("Ali", "Ö.", 25),
                new Person("Zeynep", "Ç.", 36),
                new Person("Mustafa", "Y.", 45),
                new Person("Elif", "A.", 29),
                new Person("Hasan", "K.", 38)
        );

        personRepository.deleteAll();
        personRepository.saveAll(persons);
    }
}
