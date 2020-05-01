package com.keepnote.note.controller;

import com.keepnote.note.model.Note;
import com.keepnote.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/notes")
@CrossOrigin()
public class NoteController {
    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping()
    public ResponseEntity<?> createNote(@RequestBody Note note) {
        ResponseEntity <?> responseEntity;
        try {
            responseEntity = ResponseEntity.status(201).body(noteService.createNote(note));
        } catch (Exception exception) {
            responseEntity = ResponseEntity.status(409).body(exception.getMessage());
        }
        return responseEntity;
    }

    @GetMapping(value = "/{userId}")
    public ResponseEntity<?> getAllNotesByUserId(@PathVariable("userId") String userId) {
        ResponseEntity <?> responseEntity;
        try {
            responseEntity = ResponseEntity.status(200).body(noteService.getAllNotesByUserId(userId));
        } catch (Exception exception) {
            responseEntity = ResponseEntity.status(409).body(exception.getMessage());
        }
        return responseEntity;
    }

    @DeleteMapping(value = "/{userId}")
    public ResponseEntity<?> deleteNote(@PathVariable("userId") String userId) {
        return null;
    }

    @PutMapping(value = "/{noteId}")
    public ResponseEntity<?> updateNote(@PathVariable("noteId") String noteId) {
        return null;
    }
}
