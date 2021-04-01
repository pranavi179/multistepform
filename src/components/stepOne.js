import React from 'react';
import {
	Typography,
	InputLabel,
	FormControl,
	OutlinedInput,
	Button,
	TextField,
	InputAdornment,
	IconButton,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SendIcon from '@material-ui/icons/Send';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
const useStyles = makeStyles({
	mainContainer: {
		display: 'grid',
		position: 'relative',
		justifyContent: 'center',
		zIndex: '5',
	},
	formContainer: {
		position: 'relative',
		padding: '2rem',
		height: 'auto',
		width: '28.125rem',
	},
	inputField: {
		width: '100%',
		marginBottom: '1rem',
	},
	btn: {
		width: '100%',
		height: '3rem',
		background: 'red',
		color: 'white',
		'&:hover': {
			color: 'red',
		},
	},
});

const StepOne = () => {
	const [showPasswordvalue, setShowPasswordvalue] = useState({
		showPasswordvalue: false,
	});

	const [showConfirmPasswordvalue, setShowConfirmPasswordvalue] = useState({
		showConfirmPasswordvalue: false,
	});
	const handleClickShowPassword = () => {
		setShowPasswordvalue({
			showPassword: !showPasswordvalue.showPassword,
		});
	};

	const handleClickShowConfirmPassword = () => {
		setShowConfirmPasswordvalue({
			showConfirmPasswordvalue: !showConfirmPasswordvalue.showConfirmPasswordvalue,
		});
	};
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<Typography variant='h5' style={{ color: '#999', textAlign: 'center' }}>
				Sign Up with Email
			</Typography>{' '}
			<form className={classes.formContainer}>
				<TextField
					label='First Name'
					variant='outlined'
					className={classes.inputField}
				/>
				<TextField
					label='Last Name'
					variant='outlined'
					className={classes.inputField}
				/>
				<IntlTelInput
					preferredCountries={['ru', 'in']}
					className={classes.inputField}
				/>
				<TextField
					label='Email'
					variant='outlined'
					className={classes.inputField}
				/>
				<FormControl variant='outlined' className={classes.inputField}>
					<InputLabel>Password</InputLabel>
					<OutlinedInput
						labelWidth={55}
						type={showPasswordvalue.showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton edge='end' onClick={handleClickShowPassword}>
									{showPasswordvalue.showPassword ? (
										<VisibilityIcon />
									) : (
										<VisibilityOffIcon />
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<FormControl variant='outlined' className={classes.inputField}>
					<InputLabel>Confirm Password</InputLabel>
					<OutlinedInput
						labelWidth={100}
						type={
							showConfirmPasswordvalue.showConfirmPasswordvalue
								? 'text'
								: 'password'
						}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton edge='end' onClick={handleClickShowConfirmPassword}>
									{showConfirmPasswordvalue.showConfirmPasswordvalue ? (
										<VisibilityIcon />
									) : (
										<VisibilityOffIcon />
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<Button
					variant='outlined'
					type='submit'
					className={classes.btn}
					color='secondary'
					endIcon={<SendIcon />}
				>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default StepOne;
