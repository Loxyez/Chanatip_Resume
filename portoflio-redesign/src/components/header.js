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
        <Typography variant='subtitle1' color='textSecondary'>Software Engineer at LSEG</Typography>
        <Typography variant='body2' color='textSecondary'>Base in Bangkok, TH</Typography>   
        <Box mt={2} display={"flex"} justifyContent={"center"} gap={2}>
            <IconButton href="https://www.linkedin.com/in/chanatip-deemee-6a7575230/"><LinkedIn/></IconButton>
            <IconButton href="https://github.com/Loxyez"><GitHub/></IconButton>
            <IconButton href="https://medium.com/@chanatip.dee/about"><Feed/></IconButton>
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
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" style={{ width: 20, height: 20 }} />}>C++</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#" style={{ width: 20, height: 20 }} />}>C#</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" style={{ width: 20, height: 20 }} />}>SQL</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="Postgres" style={{ width: 20, height: 20 }} />}>Postgres</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style={{ width: 20, height: 20 }} />}>Python</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" style={{ width: 20, height: 20 }} />}>JavaScript</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" style={{ width: 20, height: 20 }} />}>Java</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" style={{ width: 20, height: 20 }} />}>Angular</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" alt="R" style={{ width: 20, height: 20 }} />}>R</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" alt="Terraform" style={{ width: 20, height: 20 }} />}>Terraform</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" style={{ width: 20, height: 20 }} />}>TypeScript</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{ width: 20, height: 20 }} />}>React</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" style={{ width: 20, height: 20 }} />}>AWS</Button>
            <Button variant="outlined" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/GitLab_icon.svg/623px-GitLab_icon.svg.png?20220627020840" alt="GitLab CI/CD" style={{ width: 20, height: 20 }} />}>GitLab CI/CD</Button>
        </Box>
    </Box>
)

export default Header;