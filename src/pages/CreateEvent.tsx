// import React from 'react'
import { useForm } from 'react-hook-form'
import type { EventItem } from '../data/events'
import { useNavigate } from 'react-router-dom'

export default function CreateEvent({ onCreate }: { onCreate: (e: EventItem) => void }){
  const { register, handleSubmit, formState: { errors } } = useForm<EventItem>()
  const navigate = useNavigate()

  function onSubmit(data: any) {
    onCreate({ ...data, id: Date.now() })
    navigate('/')
  }

  return (
    <div className="card max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Host an Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input {...register('title', { required: true, minLength: 5 })} className="mt-1 w-full rounded-lg bg-bg/50 p-2" />
          {errors.title && <div className="text-xs text-red-400 mt-1">Title is required (min 5 chars)</div>}
        </div>

        <div>
          <label className="block text-sm">Description</label>
          <textarea {...register('description', { required: true, minLength: 10 })} className="mt-1 w-full rounded-lg bg-bg/50 p-2 h-28" />
          {errors.description && <div className="text-xs text-red-400 mt-1">Description minimum 10 chars</div>}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm">Date</label>
            <input {...register('date', { required: true })} type="date" className="mt-1 w-full rounded-lg bg-bg/50 p-2" />
            {errors.date && <div className="text-xs text-red-400 mt-1">Date required</div>}
          </div>

          <div>
            <label className="block text-sm">Location</label>
            <input {...register('location', { required: true })} className="mt-1 w-full rounded-lg bg-bg/50 p-2" />
            {errors.location && <div className="text-xs text-red-400 mt-1">Location required</div>}
          </div>

          <div>
            <label className="block text-sm">Type</label>
            <select {...register('type', { required: true }) as any} className="mt-1 w-full rounded-lg bg-bg/50 p-2">
              <option value="Workshop">Workshop</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Meetup">Meetup</option>
              <option value="Fitness">Fitness</option>
              <option value="Other">Other</option>
            </select>
            {errors.type && <div className="text-xs text-red-400 mt-1">Type required</div>}
          </div>
        </div>

        <div>
          <label className="block text-sm">Host name</label>
          <input {...register('host', { required: true })} className="mt-1 w-full rounded-lg bg-bg/50 p-2" />
          {errors.host && <div className="text-xs text-red-400 mt-1">Host required</div>}
        </div>

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 rounded-lg bg-accent text-black font-semibold">Create Event</button>
          <button type="button" onClick={() => navigate('/')} className="px-4 py-2 rounded-lg border">Cancel</button>
        </div>
      </form>
    </div>
  )
}