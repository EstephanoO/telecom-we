import { getForms } from "@/lib/data"
import { FormTable } from "./_components/formTable"

async function FormPage() {
    const forms = await getForms()

  return (
    <div><FormTable forms={forms} /></div>
  )
}

export default FormPage