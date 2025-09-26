"use client";

import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-xl shadow-md">
      {/* Image */}
      <div>
        {/* 사진의 비율을 맞추기 위해 aspect-square을 사용한다. */}
        <img
          src="/images/dropbox_Icon.png"
          className="w-full rounded-xl aspect-square"
        />
      </div>
      {/* FileName */}
      <div>드랍박스 이미지</div>

      <div className="absolute top-4 right-4 ">
        <IconButton color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
