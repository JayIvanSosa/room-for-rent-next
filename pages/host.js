import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Link, AppBar, Container, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';
import useStyles from '../utils/style';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import sideImage from '../public/images/image3.jpg';
import firebase from 'firebase/compat/app';
import { auth, firestore, postToJSON } from '../lib/firebase';

export async function getServerSideProps() {
	const postsQuery = firestore.collectionGroup('users');
	// .where('published', '==', true)
	// .orderBy('createdAt', 'desc')
	// .limit(LIMIT);

	const posts = (await postsQuery.get()).docs.map(postToJSON);

	return {
		props: { posts } // will be passed to the page component as props
	};
}

function Host(props) {
	const classes = useStyles();
	const [ posts, setPosts ] = useState(props.posts);

	const hostName = posts.filter((users) => {
		return users.id == auth.currentUser.uid;
	});

	// const profile = hostName.find((a) => a.name === hostName);

	// if (!profile) {
	//   return <div> There is no user </div>;
	// }

	return (
		<div>
			<Head>
				<title>Try Hosting</title>
			</Head>
			<AppBar position="static" className={classes.nav} style={{ backgroundColor: 'black' }}>
				<Toolbar className={classes.grow}>
					<NextLink href="/lobby" passHref>
						<Link>
							<Typography className={classes.title}>Room For Rent</Typography>
						</Link>
					</NextLink>
					<div className={classes.grow} />
				</Toolbar>
			</AppBar>

			<div className={classes.splitScreen}>
				<Box sx={{ width: '100%', background: 'Black' }}>
					<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Box
							style={{ background: 'transparent' }}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								p: 15,
								m: 8,
								bgcolor: 'transparent'
							}}
						>
							<Grid item style={{ color: 'White', fontSize: 50, fontWeight: 600 }}>
								<h1>Hi {hostName[0].name} </h1>
								Hosting makes RoomforRent, RoomforRent
							</Grid>
						</Box>
					</Grid>
				</Box>

				<div className={classes.rightPane}>
					<Box sx={{ width: '100%', background: 'Black' }}>
						<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Box
								style={{ background: 'transparent' }}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									p: 1,
									m: 1,
									bgcolor: 'transparent'
								}}
							>
								<Grid item>
									<Container style={{ marginTop: 10 }}>
										<Image src={sideImage} alt="sideImage" layout="fixed" />
									</Container>
								</Grid>
								<Grid
									item
									style={{
										marginTop: 700,
										position: 'absolute',
										marginLeft: 500
									}}
								>
									<NextLink href="/1stHost" passHref>
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
												Try Hosting
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

export default Host;
