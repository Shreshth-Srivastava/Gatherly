import React from "react";
import { useForm } from "react-hook-form";
import type { EventItem } from "../data/events";
import { useNavigate } from "react-router-dom";

export default function CreateEvent({
  onCreate,
}: {
  onCreate: (e: EventItem) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventItem>();
  const navigate = useNavigate();

  function onSubmit(data: any) {
    onCreate({ ...data, id: Date.now() });
    navigate("/");
  }

  return (
    <div className="card max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Host an Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* form fields unchanged */}
      </form>
    </div>
  );
}
