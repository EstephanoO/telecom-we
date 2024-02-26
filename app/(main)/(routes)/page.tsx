import { getUser } from '@/lib/data';

const MainPage = async () => {
  const userData = await getUser();
  
  console.log(userData)

  return (
    <div>MainPage</div>
  )
}

export default MainPage