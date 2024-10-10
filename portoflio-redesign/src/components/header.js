import { Avatar, Box, Typography, IconButton, Button} from '@mui/material'
import {
    LinkedIn,
    GitHub,
    Feed,
    Email
} from '@mui/icons-material'

const Header = () => (
    <Box textAlign="center" sx={{ padding: "16px", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <Avatar alt="Profile-picture" src="assets/img/profile-img.jpg" sx={{ width: 150, height: 150, margin: "0 auto" }}/>
        
        <Typography variant='h4' fontWeight='bold' mt={2}>Chanatip Deemee</Typography>
        <Typography variant='subtitle1' color='textSecondary'>Data Scientist at LSEG</Typography>
        <Typography variant='body2' color='textSecondary'>Base in Bangkok, TH</Typography>   
        <Box mt={2} display={"flex"} justifyContent={"center"} gap={2}>
            <IconButton href="https://www.linkedin.com/in/chanatip-deemee-6a7575230/"><LinkedIn/></IconButton>
            <IconButton href="https://www.linkedin.com/in/chanatip-deemee-6a7575230/"><GitHub/></IconButton>
            <IconButton href="https://www.linkedin.com/in/chanatip-deemee-6a7575230/"><Feed/></IconButton>
        </Box>

        <Button variant="contained" startIcon={<Email />} sx={{ marginTop: 2 }} href="mailto:chanatip.deemee@gmail.com">
            Email Me
        </Button>

        <Typography variant='h6' fontWeight={"bold"} mt={4}>
            About
        </Typography>
        <Typography variant='body1' mt={1}>
            Quantitative Finanace Graduate, enjoy working with the statistical stock price data to help support strategy based on
            the quantitative insights and statistical models.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={4}>
        Skills
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
            <Button variant="outlined">SQL</Button>
            <Button variant="outlined">Python</Button>
            <Button variant="outlined">JavaScript </Button>
            <Button variant="outlined">JAVA</Button>
            <Button variant="outlined">ANGULAR</Button>
            <Button variant="outlined">R</Button>
            <Button variant="outlined">TypeScript</Button>
            <Button variant="outlined">React</Button>
            <Button variant="outlined">AWS</Button>
            <Button variant="outlined">GitLab CI/CD</Button>
        </Box>
    </Box>
)

export default Header;