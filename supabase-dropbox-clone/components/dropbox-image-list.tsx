"use client";

import DropboxImage from "./dropbox-image";

export default function DropboxImageList() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <DropboxImage />
      <DropboxImage />
      <DropboxImage />
      <DropboxImage />
    </section>
  );
}
