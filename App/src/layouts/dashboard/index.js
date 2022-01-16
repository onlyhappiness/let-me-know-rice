// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React example
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// import Footer from "examples/Footer";
// import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Timeline
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
// import Projects from "layouts/dashboard/components/Projects";
// import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        {/* 약간의 padding을 준거네 */}
        <SuiBox py={3}>
          <SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={3}>
                <DefaultBlogCard
                  image="https://bit.ly/3Hlw1MQ"
                  category={{ color: "info", label: "house" }}
                  title="Shared Coworking"
                  description="이 음식점을 추천한다는 리뷰 1"
                  author={{
                    image: "https://bit.ly/3kDZgRd",
                    name: "Mathew Glock",
                    date: "Posted on 28 February",
                  }}
                  action={{ type: "internal", route: "/somewhere" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <DefaultBlogCard
                  image="https://bit.ly/3Hlw1MQ"
                  category={{ color: "info", label: "house" }}
                  title="Shared Coworking"
                  description="이 음식점을 추천한다는 리뷰 2"
                  author={{
                    image: "https://bit.ly/3kDZgRd",
                    name: "Mathew Glock",
                    date: "Posted on 28 February",
                  }}
                  action={{ type: "internal", route: "/somewhere" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <DefaultBlogCard
                  image="https://bit.ly/3Hlw1MQ"
                  category={{ color: "info", label: "house" }}
                  title="Shared Coworking"
                  description="이 음식점을 추천한다는 리뷰 3"
                  author={{
                    image: "https://bit.ly/3kDZgRd",
                    name: "Mathew Glock",
                    date: "Posted on 28 February",
                  }}
                  action={{ type: "internal", route: "/somewhere" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <DefaultBlogCard
                  image="https://bit.ly/3Hlw1MQ"
                  category={{ color: "info", label: "house" }}
                  title="Shared Coworking"
                  description="이 음식점을 추천한다는 리뷰 4"
                  author={{
                    image: "https://bit.ly/3kDZgRd",
                    name: "Mathew Glock",
                    date: "Posted on 28 February",
                  }}
                  action={{ type: "internal", route: "/somewhere" }}
                />
              </Grid>
            </Grid>
          </SuiBox>
          <SuiBox mb={3}>
            {/* 옼이 grid가 총 12분할임 */}
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <TimelineList title="Timeline">
                  <TimelineItem
                    color="success"
                    icon="notifications"
                    title="$2400 Design changes"
                    dateTime="22 DEC 7:20 PM"
                    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                    badges={["design"]}
                  />
                  <TimelineItem
                    color="error"
                    icon="inventory_2"
                    title="New order #1832412"
                    dateTime="21 DEC 11 PM"
                    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                    badges={["order", "#1832412"]}
                  />
                  <TimelineItem
                    icon="shopping_cart"
                    title="Server payments for April"
                    dateTime="21 DEC 9:34 PM"
                    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                    badges={["server", "payments"]}
                    lastItem
                  />
                </TimelineList>
              </Grid>
              <Grid item xs={12} lg={5}>
                <WorkWithTheRockets />
              </Grid>
            </Grid>
          </SuiBox>
          {/* <SuiBox SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5}>
                <ReportsBarChart
                  title="active users"
                  description={
                    <>
                      (<strong>+23%</strong>) than last week
                    </>
                  }
                  chart={chart}
                  items={items}
                />
              </Grid>
              <Grid item xs={12} lg={7}>
                <GradientLineChart
                  title="Sales Overview"
                  description={
                    <SuiBox display="flex" alignItems="center">
                      <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon className="font-bold">arrow_upward</Icon>
                      </SuiBox>
                      <SuiTypography variant="button" color="text" fontWeight="medium">
                        4% more{" "}
                        <SuiTypography variant="button" color="text" fontWeight="regular">
                          in 2021
                        </SuiTypography>
                      </SuiTypography>
                    </SuiBox>
                  }
                  height="20.25rem"
                  chart={gradientLineChartData}
                />
              </Grid>
            </Grid>
          </SuiBox> */}
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrderOverview />
            </Grid>
          </Grid> */}
        </SuiBox>
        {/* <Footer /> */}
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
