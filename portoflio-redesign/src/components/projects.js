import { Card, CardContent, Typography, Grid, CardMedia, Chip, Box } from '@mui/material';

export default function Projects() {

  // Define your array of projects
  const projects = [
    {
      title: 'Statistical Comparison of ARIMA Order Performance in Stock Market',
      description: 'This research presents a comprehensive statistical comparison of ARIMA model orders in stock market forecasting, using historic NYSE data. The study offers valuable insights into the impact of different ARIMA parameters on prediction accuracy and robust financial forecasting.',
      technologies: ['ARIMA Models', 'Time Series Analysis', 'Stock Market Data', 'Statistical Modeling'],
      imageUrl: 'assets/img/stock_price_prediction.jpg',
    },
    {
      title: 'Building a Moving Average (MA) Signal using Python',
      description: 'A hands-on project demonstrating the use of Python to create a stock price signal based on the Moving Average (MA) indicator. This tutorial guides users through building an MA signal, a fundamental tool for financial data analysis and stock market forecasting.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Financial Data Analysis'],
      imageUrl: 'assets/img/StockPrice.jpg',
    },    
    {
      title: 'Point of Sale (POS) System',
      description: 'Developed a custom POS system to streamline sales, inventory management, and customer transactions for my own company. The system supports real-time sales tracking, automated stock updates, and detailed reporting. It provides an intuitive interface for staff to efficiently manage transactions, refunds, and customer data, improving overall business operations.',
      technologies: ['JavaScript', 'Node.js', 'MySQL', 'React', 'REST APIs'],
      imageUrl: 'assets/img/POS.jpg',
    },    
    {
      title: 'One-Stop Service System',
      description: 'Developed a responsive one-stop service system to centralize customer support and service management. The system integrates multiple service modules, including inquiries, complaints, service requests, and status tracking, into a unified platform. Designed to enhance user experience, it provides both desktop and mobile-friendly interfaces, allowing customers to access services anytime and efficiently resolve their needs.',
      technologies: ['React', 'Node.js', 'Microsoft SQL', 'Material UI', 'REST APIs'],
      imageUrl: 'assets/img/OneStopService.jpg', // Replace with a relevant image
    },
    {
      title: 'Comparison of Single-Variable and Multi-Variable Stock Price Prediction Performance',
      description: 'This research project explores the differences in prediction accuracy between single-variable and multi-variable models in stock price forecasting. The study compares models such as ARIMA for single-variable analysis and machine learning models like multiple linear regression and random forest for multi-variable analysis. The results highlight the impact of including additional variables like market trends, economic indicators, and company-specific data on forecast accuracy and performance.',
      technologies: ['ARIMA', 'Multiple Linear Regression', 'Random Forest', 'Python', 'Pandas'],
      imageUrl: 'assets/img/StockPricePrediction.png', // Replace with a relevant image
    }
    
  ];

  // Render your projects
  return (
    <Box sx={{ padding: '16px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: '24px' }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Projects
      </Typography>
      <Grid container spacing={2}>  {/* Change the spacing to reduce the gap */}
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Box mt={2}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} sx={{ marginRight: 1, marginBottom: 1 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
