import BasicCard from "../components/BasicCard";
import PrimarySearchAppBar from "../components/Header";
import { Grid, Pagination, Box } from "@mui/material";

import { Outlet } from "react-router-dom";

function Home({ username, setUsername, isLogin, setIsLogin, data }) {
  return (
    <Box
      sx={{
        padding: 0,
        backgroundColor: "#121212",
        width: "100wv",
        height: "100vh",
      }}
    >
      <Outlet />
      <PrimarySearchAppBar
        username={username}
        setUsername={setUsername}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Grid container spacing={2} padding={2}>
        {data.slice(0, 5).map((post) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <BasicCard post={post} key={post.id} isLogin={isLogin} />
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3, // Optional: Add space from the top if needed
          width: "100%", // Ensure it takes up the full width of the container
        }}
      >
        {" "}
        <Pagination
          count={5}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              "&.Mui-selected": {
                backgroundColor: "#d84943",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
