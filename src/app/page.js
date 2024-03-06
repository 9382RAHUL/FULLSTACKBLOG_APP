import Feature from '@/components/featured/Feature';
import styles from './homepage.module.css'
import Categorylist from '@/components/categorylist/Categorylist';
import Cardlist from '@/components/cardlist/Cardlist';
import Menu from '@/components/menu/Menu';
export default function Home({searchParams}) {
  const page=parseInt(searchParams)||1;
  return (
    <>
   <div className={styles.container}>
      <Feature/>
      <Categorylist/>
      <div className={styles.content}>
        <Cardlist page={page}/>
        <Menu/>
      </div>
   </div>
    </>
  );
}
