import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Candidate',
    description: [
      'You can learn the specific skills  by our tools for remote work.It helps in key areas for coorpare job',
      
    ],
    buttonText: 'Sign up for Practice',
    buttonVariant: 'outlined',
  },
  {
    title: 'Contributer',
    description: [
      'Anyone can contribute the questions and  to earn ETH coins.You can also review the others questions.',
      
    ],
    buttonText: 'Start Contributing',
    buttonVariant: 'outlined',
  },
  {
    title: 'Hiring',
   
    description: [
      'Evaluate the candiate using AI based Technology to save your time for right person to your company.',
      ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  }
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
		className="header"
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
           WeEvaluate
          </Typography>
         <nav>
         { /*<Link
              variant="button"
              color="text.primary"
              href="/candidate"
              sx={{ my: 1, mx: 1.5 }}
            >
              Candidate
            </Link>
            
            <Link
              variant="button"
              color="text.primary"
              href="/contributor"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contributor
            </Link>
			<Link
              variant="button"
              color="text.primary"
              href="/hiring"
              sx={{ my: 1, mx: 1.5 }}
            >
              Hiring
            </Link>*/}
			<Link
              variant="button"
              color="text.primary"
              href="/pricing"
              sx={{ my: 1, mx: 1.5 }}
            >
              Pricing
            </Link>
  </nav>
         
          <Button href="/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          WeEvaluate
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Hiring' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                 
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} href="/signin">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </React.Fragment>
  );
}

export default function HomePage() {
  return <PricingContent />;
}
