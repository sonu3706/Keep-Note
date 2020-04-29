package com.keepnote.note.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class Note {
    private String noteId;
    private String noteTitle;
    private String noteContent;
    private String createdBy;
    private LocalDateTime createdOn;

}
