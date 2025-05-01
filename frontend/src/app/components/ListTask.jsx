import Task from "./Task"

async function loadTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`)
  const data = await res.json()
  return data
}

async function ListTask() {

  const tasks = await loadTasks()
  console.log(tasks)

  return (
    <div
      className="bg-slate-700 p-4 w-full"
    >
      <h1 className="text-white text-2xl font-bold mb-3">List Tasks</h1>

      {tasks.map((task) => (<Task task={task} key={task.id} />))}

    </div>
  )
}

export default ListTask