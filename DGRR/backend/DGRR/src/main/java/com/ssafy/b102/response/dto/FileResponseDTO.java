package com.ssafy.b102.response.dto;

import java.time.format.DateTimeFormatter;

import com.ssafy.b102.Entity.FileEntity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Data
@Setter(AccessLevel.NONE)
@Builder(access = AccessLevel.PRIVATE)
public class FileResponseDTO {
    private String originalName;
    private String saveName;

    public static FileResponseDTO toDTO(FileEntity fileEntity) {
        if (fileEntity == null) return getDefaultDTO();
        String createDate = fileEntity.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
       
        return FileResponseDTO.builder()
                .originalName(fileEntity.getOriginalName())
                .saveName(createDate + "/" + fileEntity.getSavedName())
                .build();
    }

    private static FileResponseDTO getDefaultDTO() {
        return FileResponseDTO.builder()
                .originalName("profile_image.jpg")
                .saveName("default/profile_image.jpg")
                .build();
    }
}
