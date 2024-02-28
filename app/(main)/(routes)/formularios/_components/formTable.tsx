import { deleteForm } from '@/lib/actions'
import { Formularios } from '@/lib/types'
import Link from 'next/link'
import styles from './from.module.css'

export const FormTable = ({forms}:{forms: Formularios[]}) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/formularios/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Fecha</td>
            <td>Grupo</td>
            <td>TipoTrabajo</td>
            <td>TrabajoRealizado</td>
            <td>Ubicacion</td>
            <td>Observacion</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {forms?.map((product) => (
            <tr key={product.id}>
              <td>{product.Fecha?.toString().slice(4, 16)}</td>
              <td>{product.Grupo}</td>
              <td>{product.TipoTrabajo}</td>
              <td>{product.TrabajoRealizado}m</td>
              <td>{product.Ubicacion}</td>
              <td>{product.Observacion}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/formularios/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteForm}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  )
}
