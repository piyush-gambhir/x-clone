import Button from "@components/ui/button";

export default function Subscribe() {
  return (
    <section className="bg-[#f7f9f9] w-full flex flex-col gap-3 py-3 px-4 rounded-xl">
      <div className="font-extrabold text-xl leading-6">
        Subscribe to Premium
      </div>
      <div className="text-[15px] leading-5 font-bold break-words ">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </div>
      <Button
        className="py-2 px-4 bg-black text-white text-[15px] font-bold"
        loading={false}
      >
        Subscribe
      </Button>
    </section>
  );
}
