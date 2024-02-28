import React from 'react'
import FileTable from './_components/FileTable'
import { getFiles } from '@/lib/data'

async function FilesPage() {
    const files = await getFiles()
  return (
    <div><FileTable files={files} /></div>
  )
}

export default FilesPage