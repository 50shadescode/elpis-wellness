import BookingForm from "@/components/BookingForm"; // Adjust the import path based on where your component lives

export default function BookSessionPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Your beautiful booking section card renders here standalone */}
        <BookingForm />
      </div>
    </main>
  );
}