import { Box, Typography, Chip, Avatar, Grid } from '@mui/material';

export default function Experience() {
    return (
      <Box sx={{ padding: '16px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: '24px' }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Experience
        </Typography>
        {/* LSEG */}
        <Box mb={2}>
            <Grid container alignItems="center" spacing={2}>
                {/* Company Logo */}
                <Grid item>
                    <img
                    alt="Amazon Logo"
                    src="assets/img/lseg_logo_rgb_pos.png"
                    style={{ width: "auto", height: "80px" }}
                    />
                </Grid>
                {/* Experience Text */}
                <Grid item>
                    <Typography variant="h6" fontWeight="bold">
                    Jun 2024 - Now
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                        Technology Associated Program / Data Scientist
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={1}>
                        Leading global financial markets infrastructure and data provider that operates connected businesses to serve customers across the entire financial markets value chain.
                    </Typography>
                </Grid>
            </Grid>

            {/* Skills/Technologies */}
            <Box mt={2}>
            <Chip label="Financial Data Analytics" sx={{ marginRight: 1 }} />
            <Chip label="Website Development" sx={{ marginRight: 1 }} />
            <Chip label="Cloud Infrastructure" sx={{ marginRight: 1 }} />
            </Box>
        </Box>
        {/* NCU */}
        <Box mb={2}>
            <Grid container alignItems="center" spacing={2}>
            {/* Company Logo */}
            <Grid item>
                <img
                alt="Amazon Logo"
                src="assets/img/NCU.png"
                style={{ width: "auto", height: "80px" }}
                />
            </Grid>
            {/* Experience Text */}
            <Grid item>
                <Typography variant="h6" fontWeight="bold">
                Jun 2023 - Aug 2023
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                Research Manager / Project Management
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                Led a project on stock market forecasting using ARIMA models, focusing on evaluating the impact of different ARIMA orders on prediction accuracy. The research utilized historic NYSE data and provided insights into improving financial forecasting through a comprehensive statistical comparison of model performance.
                </Typography>
            </Grid>
            </Grid>

            {/* Skills/Technologies */}
            <Box mt={2}>
            <Chip label="Time Series Analysis" sx={{ marginRight: 1 }} />
            <Chip label="Data Analysis" sx={{ marginRight: 1 }} />
            <Chip label="Predictive Modeling" sx={{ marginRight: 1 }} />
            <Chip label="Research Leadership" sx={{ marginRight: 1 }} />
            <Chip label="Project Management" sx={{ marginRight: 1 }} />
            <Chip label="Financial Data Analytics" sx={{ marginRight: 1 }} />
            <Chip label="Statistical Modeling" sx={{ marginRight: 1 }} />
            </Box>
        </Box>
        {/* SBITO */}
        <Box mb={2}>
            <Grid container alignItems="center" spacing={2}>
            {/* Company Logo */}
            <Grid item>
                <img
                alt="SBI LOGO"
                src="assets/img/SBITradeAI_logo.png"
                style={{ width: "auto", height: "80px" }}
                />
            </Grid>
            {/* Experience Text */}
            <Grid item>
                <Typography variant="h6" fontWeight="bold">
                Mar 2022 - Jan 2023
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                Data Scientist at SBITO
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                Leading the development and implementation of data analytics strategies that support business goals. Managing a team of data analysts to ensure data accuracy, completeness, and integrity. Providing insights and recommendations to senior management based on analysis of customer behaviour, product performance, and other key metrics.
                </Typography>
            </Grid>
            </Grid>

            {/* Skills/Technologies */}
            <Box mt={2}>
            <Chip label="Time Series Analysis" sx={{ marginRight: 1 }} />
            <Chip label="Data Analysis" sx={{ marginRight: 1 }} />
            <Chip label="Predictive Modeling" sx={{ marginRight: 1 }} />
            <Chip label="Financial Data Analytics" sx={{ marginRight: 1 }} />
            </Box>
        </Box>
        {/* MAHIDOL */}
        <Box>
            <Grid container alignItems="center" spacing={2}>
            {/* Company Logo */}
            <Grid item>
                <img
                alt="MUICT"
                src="assets/img/MUICT2.png"
                style={{ width: "auto", height: "80px" }}
                />
            </Grid>
            {/* Experience Text */}
            <Grid item>
                <Typography variant="h6" fontWeight="bold">
                Jul 2020 - Mar 2024
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                Lab Assistant / Research Assistant / Lecture Assistant
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                Assisted in lab sessions, supported research projects, and provided lecture assistance at the Faculty of Information and Communication Technology. Contributed to academic activities by guiding students and assisting with research and technical tasks.
                </Typography>
            </Grid>
            </Grid>

            {/* Skills/Technologies */}
            <Box mt={2}>
            <Chip label="Technical Assistance" sx={{ marginRight: 1 }} />
            <Chip label="Research Support" sx={{ marginRight: 1 }} />
            <Chip label="Teaching Assistance" sx={{ marginRight: 1 }} />
            <Chip label="Student Mentorship" sx={{ marginRight: 1 }} />
            <Chip label="Time Management" sx={{ marginRight: 1 }} />
            <Chip label="Problem-Solving" sx={{ marginRight: 1 }} />
            </Box>
        </Box>
      </Box>
    );
}