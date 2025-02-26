import { Box, Typography } from '@mui/material';

export default function Education() {
  return (
    <Box sx={{ padding: '24px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)', marginBottom: '32px', backgroundColor: '#f3f5f7' }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Education
      </Typography>
      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" color="secondary">
          2024 - Now
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="textPrimary">
          Information and Communication Technology, Master Degree in Computer Science, Mahidol University
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={1}>
          This curriculum focuses on producing graduates who have the knowledge and skills necessary to create and deploy disruptive technologies for solving complex scientific and business problems, develop knowledge and technology through research in the area of computer science, and integrate knowledge in computer science with other fields effectively for national development.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight="bold" color="secondary">
          2020 - 2024
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="textPrimary">
          Information and Communication Technology, Computer Science, Mahidol University
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={1}>
          This core track focuses on the use of several computer science theories to solve fundamental problems. In addition, students will study system related topics in computer science such as algorithms analysis, database design, embedded system, and computer graphics.
        </Typography>
      </Box>
    </Box>
  );
}
