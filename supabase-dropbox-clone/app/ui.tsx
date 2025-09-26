"use client";

import DropboxImageList from "components/dropbox-image-list";
import FileDragDropZone from "components/file-dragdropzone";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import Image from "next/image";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {/* 로고 섹션 */}
      <Logo />

      {/* search 섹션 */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {/* 파일 업로드 섹션 */}
      <FileDragDropZone />

      {/* 파일 이미지 섹션 */}
      <DropboxImageList />
    </div>
  );
}
