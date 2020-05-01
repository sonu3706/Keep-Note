package com.keepnote.note.service;

import com.keepnote.note.model.Note;
import com.keepnote.note.model.UserNote;

import java.util.List;

public interface NoteService {
 Boolean createNote(Note note);
 UserNote getAllNotesByUserId(String userId);
 Boolean deleteNote(String noteId);
 Boolean updateNote(String noteId, Note note);
}
