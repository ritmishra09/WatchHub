import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions= {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    padding:'4',
    size:'3xl'
}

const Home = () => {
  return <Box>
  <MyCarousel />

  <Container maxW={'container.xl'} minH={'100vh'} p={'16'} >

    <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m='auto'>Services</Heading>
    <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
        <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40' ,'400']}/>
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio iusto quo et dolorem nam ipsa, laudantium soluta eum! Illum voluptatibus, modi, exercitationem possimus temporibus magnam mollitia provident in repellat architecto tempora facilis doloremque quis odio asperiores? Quis minima odio vero eius autem repellat recusandae ut dolore dolorem, in quae labore suscipit consectetur quidem eum. Consectetur veniam aspernatur expedita ex ducimus reprehenderit eveniet, distinctio magnam beatae harum quos esse architecto quo? Cumque quis aliquid facilis aperiam numquam vero ipsa et doloribus, culpa omnis praesentium perferendis, alias debitis, quia laborum suscipit itaque! Nostrum esse magni, voluptas officia aperiam incidunt veniam iste. In quaerat repudiandae fuga? Dolorum molestiae obcaecati adipisci praesentium aperiam tempora quibusdam odit, quos ipsum dolor! Labore libero officiis expedita illum incidunt aperiam consequatur?
        </Text>

    </Stack>

  </Container>
  </Box>
};

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false}>
       <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
            Watch The future
        </Heading>

       </Box>

       <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Future is Gaming
        </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Gaming on Console
        </Heading>
       </Box>

        <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Nightlife is cool!
        </Heading>
       </Box>

    </Carousel>
)

export default Home