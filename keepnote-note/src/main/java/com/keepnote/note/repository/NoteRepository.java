package com.keepnote.note.repository;

import com.keepnote.note.model.UserNote;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NoteRepository extends MongoRepository<UserNote, String> {

}
