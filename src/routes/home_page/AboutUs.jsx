import { Box, Typography } from "@mui/material";
import RecyclingFactory from '../../assets/images/RecyclingFactory.jpeg';
import { useEffect, useState } from "react";

function AboutUs() {
    const [skew, setSkew] = useState(20);
    const movementSpeed = 3000;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSkew((prevSkew) => -prevSkew);
      }, movementSpeed);
  
      return () => clearInterval(intervalId);
    }, []);
    return(
        <Box
        maxWidth={ 'xl' }
        sx={{
            mx: { md:'auto', xs: 4 },
            display: { md:'flex' },
            maxWidth: 'lg',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            mt: 8,
            textAlign: { xs: 'center' },
        }}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'self-start',
            }}>
                <Box sx={{ position: 'relative', m: 2 }}>
                    <Box
                        sx={{
                        background: 'white',
                        height: '2.5rem',
                        width: '10rem',
                        transform: `skew(${skew}deg)`,
                        WebkitTransform: `skew(${skew}deg)`,
                        MozTransform: `skew(${skew}deg)`,
                        OTransform: `skew(${skew}deg)`,
                        transition: `transform ${movementSpeed}ms ease-in-out`,
                        }}
                    />
                        <Typography
                            variant="subtitle1"
                            color="primary"
                            fontWeight={700}
                            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                            About Us
                        </Typography>
                </Box>
                <Typography
                variant="h1"
                component={"h1"}
                color={ 'secondary' }
                fontSize={'1.8rem'}
                align="left"
                sx={{
                    mb: 6,
                    mt: 2,
                }}>
                    Recycling and processing of metal waste for material recovery
                </Typography>
                <Typography
                variant="body1"
                color={'text.primary'}
                sx={{
                    mb: 2 ,
                    textAlign: { xs: 'left' }
                }}>
                    The idea began in 2017 to work on finding 
                    solutions to preserve natural resources, protect the 
                    environment from pollution and greenhouse gases, 
                    and reduce global warming, in order to be among 
                    the contributors to maintaining a clean, pollution-free and sustainable environment.
                    Based on this principle, we have established the 
                    <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'secondary'}>{' GMR '}</Typography>
                    Company to embody this idea on the ground.
                </Typography>
            </Box>
            <Box
            component={ 'img' }
            src={ RecyclingFactory }
            sx={{
                width: '100%',
                maxWidth: 500,
            }}
            />
        </Box>
    );
}

export default AboutUs;