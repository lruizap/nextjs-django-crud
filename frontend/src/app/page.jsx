import './globals.css'

export const dynamic = 'force-dynamic'

import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";

export default function HomePage() {
  return (
    <div className='container mx-auto p-5'>
      <h1>Task App</h1>

      <div className='flex gap-x-10'>
        <FormTask />
        <ListTask />
      </div>

    </div>
  );
}
