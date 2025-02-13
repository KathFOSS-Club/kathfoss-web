import { Box, Typography } from "@mui/material";
import ContributorsDetails from "./ContributorsDetails";
import { fetchContributors } from "@/utils/fetchContributors";

const Contributors = async () => {
  // Fetch contributors data on the server
  const contributors = await fetchContributors();

  return (
    <Box sx={{marginTop: 8}}>
      <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "600", marginBottom: 3 }}
        >
          Contributors
          <Typography
            variant="h6"
            component="h6"
            align="center"
            gutterBottom
            sx={{
              marginBottom: 3,
              color: "#8892b0",
            }}
          >
            People behind the magic
          </Typography>
        </Typography>
    <Box
      id="contributors"
      sx={{
        padding: 4,
        backgroundColor: "rgb(25, 22, 49)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <ContributorsDetails contributors={contributors} />
    </Box>

    </Box>
  );
};

export default Contributors;