import { Grid } from '@mui/material';
// import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from '../src/components/dashboard/SalseOverview';
import DailyActivity from '../src/components/dashboard/DailyActivity';
import ProductPerfomance from '../src/components/dashboard/ProductPerfomance';
import LikeLinkContent from '../src/components/dashboard/LikeLinkContent';
import MenuCategory from '../src/components/dashboard/MenuCategory';

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        {/* <SalesOverview /> */}
        <LikeLinkContent />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        {/* <DailyActivity /> */}
        <MenuCategory />
      </Grid>
      <Grid item xs={12} lg={12}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        {/* <BlogCard /> */}
      </Grid>
    </Grid>
  );
}
