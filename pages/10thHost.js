import React, { useState } from 'react';
import Head from 'next/head';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import useStyles from '../utils/style';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { useSelector, useDispatch } from 'react-redux';
import { PRICE_HOST_INPUT } from '../redux/actionTypes';

function HostTenth() {
	const classes = useStyles();

	const [ priceInput, setpriceInput ] = useState('');
	const dispatch = useDispatch();
	const { priceValue } = useSelector((state) => state.tenthpage);

	return (
		<div>
			<Head>
				<title>10th Hosting</title>
			</Head>
			<div className={classes.splitScreen}>
				<Grid
					item
					style={{
						position: 'absolute',
						marginLeft: 50
					}}
				>
					<h1 style={{ color: 'white' }}> Room For Rent </h1>
				</Grid>
				<Box
					sx={{
						width: '100%',
						background: 'linear-gradient(#01c9f0, #1b4688)'
					}}
				>
					<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Box
							style={{ background: 'transparent', marginTop: 200 }}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								p: 15,
								m: 8,
								bgcolor: 'transparent'
							}}
						>
							<Grid item style={{ color: 'White', fontSize: 50, fontWeight: 600 }}>
								Now for the fun part set your price
							</Grid>
						</Box>
					</Grid>
				</Box>

				<div className={classes.rightSide}>
					<Box sx={{ width: '100%', background: '#f7f7f7' }}>
						<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Box
								style={{ background: 'white' }}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									p: 1,
									m: 1,
									bgcolor: 'transparent'
								}}
							>
								<Grid
									item
									style={{
										marginTop: 270,
										position: 'absolute',
										marginLeft: 1100
									}}
								>
									<TextField
										style={{ width: 500 }}
										id="outlined-basic"
										label="PRICE/NIGHT"
										variant="outlined"
										value={priceInput}
										onChange={(event) => setpriceInput(event.target.value)}
									/>
								</Grid>
								<NextLink href="/11thHost" passHref>
									<Button
										variant="contained"
										style={{
											marginTop: 360,
											position: 'absolute',
											marginLeft: 1100
										}}
										onClick={() =>
											dispatch({
												type: PRICE_HOST_INPUT,
												payload: {
													priceValue: priceInput
												}
											})}
									>
										Submit price
									</Button>
								</NextLink>

								<Grid
									item
									style={{
										marginTop: 760,
										position: 'absolute',
										marginLeft: 400
									}}
								>
									<NextLink href="/9thHost" passHref>
										<Link>
											<Button
												variant="contained"
												style={{
													fontSize: 17,
													maxWidth: '150px',
													maxHeight: '80px',
													minWidth: '90px',
													minHeight: '65px'
												}}
											>
												Back
											</Button>
										</Link>
									</NextLink>
								</Grid>
							</Box>
						</Grid>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default HostTenth;
