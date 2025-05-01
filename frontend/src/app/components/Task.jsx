"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

function Task({ task }) {

  const router = useRouter()
  const [edit, setEdit] = useState(false)

  const [newTitle, setNewTitle] = useState(task.title)
  const [newDescription, setNewDescription] = useState(task.description)

  const handleDelete = async (id) => {
    console.log("Eliminando tarea", id)

    if (window.confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`, {
        method: "DELETE",
      })

      if (res.status === 204) {
        router.refresh()
      }

    }
  }

  const handleTaskDone = async (id) => {
    console.log("Marcar tarea como hecha", id)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/done/`, {
      method: "POST",
    })

  }

  const handleUpdate = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`, {
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await res.json()
    setNewTitle(data.title)
    setNewDescription(data.description)

    setEdit(!edit)

    router.refresh()
  }


  return (
    <div className="bg-slate-500 px-4 m-2 rounded-md text-slate-200 flex justify-between items-center">

      < div className="flex flex-col" >

        {
          !edit ? (
            <h2 className="font-bold">
              {newTitle}
              {task.done && <span> ✅</span>}</h2>
          ) : (
            <input type="text"
              className="bg-slate-500 border-none p-2 rounded-md text-black"
              placeholder={task.title}
              onChange={e => setNewTitle(e.target.value)} />
          )
        }

        {
          !edit ? (
            <p>{newDescription}</p>
          ) : (
            <textarea
              className="bg-slate-500 border-none p-2 rounded-md text-black w-full"
              placeholder={task.description}
              rows={1}
              onChange={e => setNewDescription(e.target.value)} />
          )
        }

      </ div >

      <div className="flex justify-between gap-x-4">

        {
          edit && (
            <button
              className="bg-yellow-500 text-black rounded-md p-2"
              onClick={() => handleUpdate(task.id)}
            >Guardar</button>
          )
        }

        <button
          className={
            "text-white rounded-md p-2" + (task.done ? " bg-gray-700" : " bg-indigo-500")
          }
          onClick={() => handleTaskDone(task.id)}
        >{task.done ? "Desmarcar" : "Hecha"}</button>

        <button
          className="bg-red-500 text-white rounded-md p-2"
          onClick={() => handleDelete(task.id)}
        >Eliminar</button>
        <button
          className="bg-green-500 text-white rounded-md p-2"
          onClick={() => setEdit(!edit)}
        >Editar</button>
      </div>

    </div>
  )
}

export default Task