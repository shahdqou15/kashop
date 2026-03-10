import useCart from '../../hooks/useCart';
import { Button, CircularProgress, Box, Link, TextField, Typography, IconButton } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import useupdateQuantity from '../../hooks/useupdateQuantity';

export default function Cart() {

    const { data, isLoading, isError, error } = useCart();
    const { mutate, isPending } = useRemoveFromCart();
    const {mutate:updateItem , isPending:Upadating} = useupdateQuantity();

    const handleUpadateQty = (productId,action)=>{
      const item =   data.items.find( (i)=>{
            return i.productId == productId
        })
        if(action == '-'){
            updateItem({productId,count:item.count-1})
        }else{
          updateItem({productId,count:item.count+1})   
        }
    }


    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>



    return (
        <Box className="cart" p={5}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Product
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Quantity
                            </TableCell>
                            <TableCell>
                                Subtotal
                            </TableCell>
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.items.map(item => (
                            <TableRow>
                                <TableCell>
                                    {item.productName}
                                </TableCell>
                                <TableCell>
                                    ${item.price}
                                </TableCell>
                                <TableCell>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <IconButton onClick={()=>handleUpadateQty(item.productId,'-')} disabled={Upadating}><RemoveIcon /></IconButton>
                                        <Typography>{item.count}</Typography>
                                        <IconButton onClick={()=>handleUpadateQty(item.productId,'+')} disabled={Upadating}><AddIcon /></IconButton>
                                    </Box>

                                </TableCell>
                                <TableCell>
                                    ${item.totalPrice}
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => mutate(item.productId)} disabled={isPending}>
                                        <CancelOutlinedIcon />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={2}>
                <Link component={RouterLink} to={'/'} underline='none'><Button variant="outlined" color='primary'>Return to shop</Button></Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} p={2}>
                <Box display={'flex'} gap={2}>
                    <TextField id="outlined-basic" label="Coupon Code" variant="outlined" />
                    <Button variant="outlined" color='primary'>Apply Coupon</Button>
                </Box>
                <Box border={1} p={3} width={'40%'} display={'flex'} flexDirection={'column'} gap={3}>
                    <Typography>Cart Total</Typography>
                    <Table>
                        <TableRow>
                            <TableCell>Subtotal:</TableCell>
                            <TableCell>${data.cartTotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Shipping:</TableCell>
                            <TableCell>Free</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>total</TableCell>
                            <TableCell>${data.cartTotal}</TableCell>
                        </TableRow>
                    </Table>
                    <Link component={RouterLink} to={'/checkout'} underline='none'><Button variant="outlined" color='primary'>Procees to checkout</Button></Link>
                </Box>

            </Box>
        </Box>
    )
}
