package com.keepnote.note.serviceimpl;

import com.keepnote.note.model.Note;
import com.keepnote.note.repository.NoteRepository;
import com.keepnote.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public Boolean createNote(Note note) {
        return null;
    }

    @Override
    public List<Note> getAllNotesByUserId(String userId) {
        return null;
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
