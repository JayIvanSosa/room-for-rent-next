import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Link } from '@mui/material';
import NextLink from 'next/Link';
import useStyles from '../utils/style';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { IMAGE_HOST_INPUT } from '../redux/actionTypes';

function HostSeventh() {
	const [ imageInput, setImageInput ] = useState('');
	const classes = useStyles();
	const [ image, setImage ] = React.useState('');
	const imageRef = React.useRef(null);
	const dispatch = useDispatch();
	const { imageValue } = useSelector((state) => state.seventhpage);

	function useDisplayImage() {
		const [ result, setResult ] = React.useState('');

		function uploader(e) {
			const imageFile = e.target.files[0];

			const reader = new FileReader();
			reader.addEventListener('load', (e) => {
				setResult(e.target.result);
			});

			reader.readAsDataURL(imageFile);
		}

		return { result, uploader };
	}

	const { result, uploader } = useDisplayImage();

	return (
		<div>
			<Head>
				<title>7th Hosting</title>
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
								Next, let&apos;s add some photos of your place
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
										marginTop: 40,
										position: 'absolute',
										marginLeft: 1000
									}}
								>
									Upload Image
									<Container
										style={{
											minWidth: 950,
											maxWidth: 400,
											minHeight: 800,
											maxHeight: 400
										}}
									>
										<div className="App">
											<input
												type="file"
												accept=".jpg, .jpeg, .png"
												value={imageInput}
												onChange={(e) => {
													setImage(e.target.files[0]);
													uploader(e);
													setImageInput(event.target.value);
												}}
											/>
											{result && (
												<Image
													ref={imageRef}
													style={{ width: 950, height: 800 }}
													src={result}
													alt=""
												/>
											)}
										</div>
									</Container>
								</Grid>

								<NextLink href="/8thHost" passHref>
									<Button
										variant="contained"
										style={{
											marginTop: 560,
											position: 'absolute',
											marginLeft: 1100
										}}
										onClick={() =>
											dispatch({
												type: IMAGE_HOST_INPUT,
												payload: {
													imageValue: result
												}
											})}
									>
										Save Image
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
									<NextLink href="/6thHost" passHref>
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

export default HostSeventh;
