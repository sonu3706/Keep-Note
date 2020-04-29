package com.keepnote.note.service;

import com.keepnote.note.model.Note;

import java.util.List;

public interface NoteService {
 Boolean createNote(Note note);
 List<Note> getAllNotesByUserId(String userId);
 Boolean deleteNote(String noteId);
 Boolean updateNote(String noteId, Note note);
}
