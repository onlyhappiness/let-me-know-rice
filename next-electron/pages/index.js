import { Grid } from '@mui/material';
// import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from '../src/components/dashboard/SalseOverview';
import DailyActivity from '../src/components/dashboard/DailyActivity';
import ProductPerfomance from '../src/components/dashboard/ProductPerfomance';
import LikeLinkContent from '../components/dashboard/LikeLinkContent';
import MenuCategory from '../components/dashboard/MenuCategory';
import SearchMyLocation from '../components/dashboard/SearchMyLocation';

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SearchMyLocation />
      </Grid>
      <Grid item xs={12} lg={12}>
        {/* 추천하는 곳으로 이동 */}
        {/* <LikeLinkContent /> */}
      </Grid>
      <Grid item xs={12} lg={12}>
        {/* <DailyActivity /> */}
        <MenuCategory />
      </Grid>
    </Grid>
  );
}
