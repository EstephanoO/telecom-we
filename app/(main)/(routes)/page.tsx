import { WorkType } from '@/components/cards/workType/WorkType';
import { getData, getDataforWeekChart, getForms, getWeekForms, workTypesData } from '@/lib/data';
import { UserTable } from '@/components/usersTable/UserTable';
import { LastSends } from '@/components/lastSends/LastSends';
import { columns } from '@/components/usersTable/_components/columns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CarouselSize } from '@/components/cards/workType/CarouselCard';
import BarChart from '@/components/dashboard/chart/Chart';

async function HomePage() {
  const data = await getData();
  const forms = await getForms()
  const weekForms = await getWeekForms()
  const weekChart = await getDataforWeekChart()
  const lastSendsData = forms.slice(0, 20)

  const last20Data = lastSendsData.map(form => ({
    id: form.id,
    workType: form.TipoTrabajo,
    location: form.Ubicacion,
    name: data.find(user => user.id === form.Trabajador)?.name || form.Trabajador, // Busca el nombre del trabajador usando el ID
    value: form.TrabajoRealizado
  }));

  const currentWeek = weekForms.filter(form => form.Semana === weekForms[weekForms.length - 1].Semana);
  const weekData = currentWeek.map(form => ({
    id: form.id,
    percentaje : parseFloat(form.PorcentajeCambio).toFixed(2),
    value : form.SumaDelTrabajo,
    workType: form.TipoTrabajo,
    week : form.Semana
  }))
  const tiposDeTrabajoUnicos = new Set(weekForms.map(item => item.TipoTrabajo));

  return (
    <div className="p-4">
      <CarouselSize data={weekData} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <UserTable data={data} columns={columns} />
        {Array.from(tiposDeTrabajoUnicos).map(tipo => (
  <BarChart 
    key={tipo}
    week={weekForms.filter(form => form.TipoTrabajo === tipo)}
  />
))}
        </div>
        <div className="lg:col-span-1">
          <ScrollArea className="rounded-md border p-6 h-3/5">
          <h1> Ultimos Envios</h1>
          {last20Data.map((lastSends) => (
            <LastSends
            key={lastSends.id}
            location={lastSends.location}
            workType={lastSends.workType}
            name={lastSends.name}
            value={lastSends.value}
            />
          ))}
</ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
