import { Box, Typography } from "@mui/material";
import ContributorsDetails from "./ContributorsDetails";
import { fetchContributors } from "@/utils/fetchContributors";

const Contributors = async () => {
  // Fetch contributors data on the server
  const contributors = await fetchContributors();

  return (
    <Box
      id="contributors"
      sx={{
        padding: 4,
        backgroundColor: "rgb(25, 22, 49)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 2, color: "#64ffda" }}
      >
        Contributors
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4, color: "#8892b0" }}>
        People behind the magic
      </Typography>
      <ContributorsDetails contributors={contributors} />
    </Box>
  );
};

export default Contributors;