package com.keepnote.note.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/notes")
public class NoteController {
    public NoteController() { }

    @PostMapping()
    public ResponseEntity<?> takeNote(){ return null;}
    @GetMapping(value = "/{userId}")
    public ResponseEntity<?> getAllNotesByUserId(@PathVariable("userId") String userId){ return null;}
    @DeleteMapping(value = "/{userId}")
    public ResponseEntity<?> deleteNoteByUserId(@PathVariable("userId") String userId) { return null;}
    @PutMapping(value = "/{noteId}")
    public ResponseEntity<?> updateNoteByNoteId(@PathVariable("noteId") String noteId){ return null;}
}
