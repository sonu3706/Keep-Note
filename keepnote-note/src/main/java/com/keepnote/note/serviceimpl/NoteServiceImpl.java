package com.keepnote.note.serviceimpl;

import com.keepnote.note.model.Note;
import com.keepnote.note.model.UserNote;
import com.keepnote.note.repository.NoteRepository;
import com.keepnote.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public Boolean createNote(Note note) {
        boolean noteCreatedStatus = false;

        if (note != null) {
            UserNote userNote = null;
            List<Note> notes = null;
            if (noteRepository.existsById(note.getCreatedBy())) {
                userNote = noteRepository.findById(note.getCreatedBy()).get();
                note.setNoteId(UUID.randomUUID().toString());
                note.setCreatedOn(LocalDateTime.now());
                userNote.getNotes().add(note);
            } else {
                userNote = new UserNote();
                notes = new ArrayList<>();
                note.setNoteId(UUID.randomUUID().toString());
                note.setCreatedOn(LocalDateTime.now());
                userNote.setUserId(note.getCreatedBy());
                notes.add(note);
                userNote.setNotes(notes);
            }
            noteRepository.save(userNote);
            noteCreatedStatus = true;
        }
        else {
            System.out.println("Throw exception");
        }

        return noteCreatedStatus;
    }

    @Override
    public UserNote getAllNotesByUserId(String userId) {
        return (noteRepository.existsById(userId) ? noteRepository.findById(userId).get() : null);
    }

    @Override
    public Boolean deleteNote(String noteId) {
        return null;
    }

    @Override
    public Boolean updateNote(String noteId, Note note) {
        return null;
    }
}
