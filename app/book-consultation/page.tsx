import React from "react";
import BookingForm from "@/components/BookingForm";

export default function BookSessionPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <BookingForm />
      </div>
    </main>
  );
}