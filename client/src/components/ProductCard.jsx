import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    Tooltip,
    Stack,
    Button,
    Link,
    HStack,
    Text,
  } from "@chakra-ui/react";
  import { FiShoppingCart } from "react-icons/fi";
  import { Link as ReactLink } from "react-router-dom";
  import { StarIcon } from "@chakra-ui/icons";
  import { useState } from "react";

const Rating=({rating,numReviews})=>{
    const{ iconSize,setIconSize}=useState('14px');
    return(
        <Flex>
            <HStack spacing='2px'>
                <StarIcon size={iconSize} w='14px' color='orange.500'/>
                <StarIcon size={iconSize} w='14px' color={Rating>=2 ? 'orange.500':'gray.200'}/>
                <StarIcon size={iconSize} w='14px' color={Rating>=3 ? 'orange.500':'gray.200'}/>
                <StarIcon size={iconSize} w='14px' color={Rating>=4 ? 'orange.500':'gray.200'}/>
                <StarIcon size={iconSize} w='14px' color={Rating>=5 ? 'orange.500':'gray.200'}/>
            </HStack>
            <Text fontSize='md' fontWeight='bold' ml='4px'>
                {
                `${numReviews} ${numReviews === 1 ? 'Review' : 'Reviews'}`}
            </Text>
        </Flex>

    )

};



  const ProductCard = ({product}) => {
    return (
      <Stack
        p="2"
        spacing="3px"
        bg={useColorModeValue("white", "gray.800")}
        minW="240px"
        borderWidth="1px"
        rounded="1g"
        shadow="1g"
        position="relative"
      >
        {product.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="green.300"
          />
        )}
        {product.stock <= 0 && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.300"
          />
        )}
        <Image src={product.image} alt={product.name} rounded="lg" />
        <Box flex={1} maxH="s" alignItems="baseline">
         {product.stock <= 0 && (
           <Badge rounded="full" px="2" fontSize="0.8em" colorscheme="red">
            Sold Out
           </Badge>
         )}
         {product.isNew && (
           <Badge rounded="full" px="2" fontSize="0.8em" colorscheme="green">
             New
           </Badge>
         )}
       </Box>
       <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
           as={ReactLink}
           to={"/product${product_id}"}
           pt="2"
           cursor="pointer"
         >
            <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
           {product.name}
        </Box>
         </Link>
         
       </Flex>
       <Flex justify='space-between' alignContent='center' py='2'>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
       </Flex>
       <Flex justifyContent="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color={"gray.600"} fontSize='1g'>
            $ 

          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip label='Add to cart' bg='white' placement="top" color='gray.800' fontSize='1.2em'>
            <Button varient='ghost' display='flex' disabled={product.stock<=0}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center'/>
            </Button>
        </Tooltip>
      </Flex>

      </Stack>
    );
  };
  
  export default ProductCard;