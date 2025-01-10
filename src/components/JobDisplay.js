import { Box, Chip, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
function JobDisplay({ data }) {
  const { id } = useParams();

  const selectedData = data.find((job) => job.id === id);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {selectedData.title}
      </Typography>

      <Box sx={{ padding: 0 }}>
        {selectedData.skills.map((skill) => (
          <Chip
            label={skill}
            sx={{ backgroundColor: "#d84943", color: "white", mr: 1, mb: 1 }}
          />
        ))}
      </Box>
      <Typography variant="body1">{selectedData.description}</Typography>
    </Box>
  );
}

export default JobDisplay;
