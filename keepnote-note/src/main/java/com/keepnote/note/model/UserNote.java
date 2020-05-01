package com.keepnote.note.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@ToString
@Document
@Data
public class UserNote {
    @Id
    private String userId;
    private List<Note> notes;
}
