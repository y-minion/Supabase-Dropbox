"use client";

export default function FileDragDropZone() {
  return (
    <section className="flex flex-col items-center w-full border-4 border-dotted border-indigo-700 py-20">
      <input type="file" className="" />
      <p>파일을 여기다 끌어다 놓거나 클릭하여 업로드 하세요</p>
    </section>
  );
}
