import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        height={30}
        width={30}
        src={"/images/dropbox_Icon.png"}
        alt="Mini Dropbox Logo"
        className="!w-10 !h-auto"
      />
      <span className="text-xl font-bold">Mini Box</span>
    </div>
  );
}
