"use client";

import { Button } from "@material-tailwind/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { useRef } from "react";

export default function FileDragDropZone() {
  const fileRef = useRef(null);

  const queryClient = useQueryClient(); // useQueryClient 훅을 사용하여 올바른 QueryClient 인스턴스를 가져옵니다

  const uploadImageMutation = useMutation({
    // mutationFn: uploadFile, //서버 액션 함수를 등록만 해준다.
    // 서버 액션을 직접 호출하는 새로운 비동기 함수로 래핑합니다.
    mutationFn: async (formData: FormData) => {
      // 이 안에서 서버 액션을 호출하면 Next.js가 올바르게 처리합니다.
      return uploadFile(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
        exact: false, // ["images"]로 시작하는 모든 쿼리를 무효화합니다.
      }); //쿼리클라이언트에 접근해 해당 키의 캐시를 초기화 한다.
    },
    onError: (error) => {
      console.error("파일 업로드 실패:", error);
      alert(`파일 업로드에 실패했습니다: ${error.message}`);
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current?.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          uploadImageMutation.mutate(formData); //-> 근데 나중에 onSubmit 로직 action 속성으로 리팩토링 하기
        }
      }}
      className="flex flex-col items-center w-full border-4 border-dotted border-indigo-700 py-20"
    >
      <input ref={fileRef} type="file" className="" />
      <p>파일을 여기다 끌어다 놓거나 클릭하여 업로드 하세요</p>
      <Button loading={uploadImageMutation.isPending} type="submit">
        파일 업로드
      </Button>
    </form>
  );
}
