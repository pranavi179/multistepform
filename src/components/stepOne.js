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
import BlockIcon from '@material-ui/icons/Block';
import SendIcon from '@material-ui/icons/Send';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import useForm from './useForm';
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
			opacity: '.7',
			transition: '3s ease-in-out',
		},
	},
	disabledBtn: {
		background: 'rgba(0,0,0,0.38)',
		width: '100%',
		height: '3rem',
	},
});

const StepOne = ({ steps, activeStep, handleNext }) => {
	// Define the state schema
	const stateSchema = {
		firstname: { value: '', error: '' },
		lastname: { value: '', error: '' },
		email: { value: '', error: '' },
		password: { value: '', error: '' },
		confirmpassword: { value: '', error: '' },
	};
	const stateValidatorSchema = {
		firstname: {
			required: true,
			validator: {
				func: (value) =>
					/^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
				error: 'First name is required',
			},
		},
		lastname: {
			required: true,
			validator: {
				func: (value) =>
					/^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
				error: 'last name is required',
			},
		},
		email: {
			required: true,
			validator: {
				func: (value) =>
					/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
						value
					),
				error: 'Invalid email',
			},
		},
		password: {
			required: true,
			validator: {
				func: (value) =>
					/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
				error: 'Invalid password',
			},
		},
		confirmpassword: {
			required: true,
			validator: {
				func: (value) =>
					/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
				error: 'Invalid confirm password',
			},
		},
	};

	const { values, errors, dirty, handleOnChange } = useForm(
		stateSchema,
		stateValidatorSchema
	);

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

	const { firstname, lastname, email, password, confirmpassword } = values;
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<Typography variant='h5' style={{ color: '#999', textAlign: 'center' }}>
				Sign Up with Email
			</Typography>{' '}
			<div className={classes.formContainer}>
				<form>
					<TextField
						label='First Name'
						variant='outlined'
						className={classes.inputField}
						name='firstname'
						value={firstname}
						onChange={handleOnChange}
					/>
					{errors.firstname && dirty.firstname && (
						<Typography
							style={{ marginTop: '0', color: 'red', fontweight: '150' }}
						>
							{errors.firstname}
						</Typography>
					)}
					<TextField
						label='Last Name'
						variant='outlined'
						className={classes.inputField}
						name='lastname'
						value={lastname}
						onChange={handleOnChange}
					/>
					{errors.lastname && dirty.lastname && (
						<Typography
							style={{ marginTop: '0', color: 'red', fontweight: '150' }}
						>
							{errors.lastname}
						</Typography>
					)}
					<IntlTelInput
						preferredCountries={['ru', 'in']}
						className={classes.inputField}
					/>
					<TextField
						label='Email'
						variant='outlined'
						className={classes.inputField}
						name='email'
						value={email}
						onChange={handleOnChange}
					/>
					{errors.email && dirty.email && (
						<Typography
							style={{ marginTop: '0', color: 'red', fontweight: '150' }}
						>
							{errors.email}
						</Typography>
					)}
					<FormControl variant='outlined' className={classes.inputField}>
						<InputLabel>Password</InputLabel>
						<OutlinedInput
							labelWidth={55}
							type={showPasswordvalue.showPassword ? 'text' : 'password'}
							name='password'
							value={password}
							onChange={handleOnChange}
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
						{errors.password && dirty.password && (
							<Typography
								style={{ marginTop: '0', color: 'red', fontweight: '150' }}
							>
								{errors.password}
							</Typography>
						)}
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
							name='confirmpassword'
							value={confirmpassword}
							onChange={handleOnChange}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										edge='end'
										onClick={handleClickShowConfirmPassword}
									>
										{showConfirmPasswordvalue.showConfirmPasswordvalue ? (
											<VisibilityIcon />
										) : (
											<VisibilityOffIcon />
										)}
									</IconButton>
								</InputAdornment>
							}
						/>
						{confirmpassword !== password ? (
							<Typography style={{ color: 'red' }}>
								passwords didnt match{' '}
							</Typography>
						) : null}
					</FormControl>
					{!firstname ||
					!lastname ||
					!email ||
					!password ||
					!confirmpassword ||
					confirmpassword !== password ? (
						<Button
							variant='outlined'
							type='submit'
							className={classes.disabledBtn}
							disabled
							endIcon={<BlockIcon />}
						>
							{activeStep === steps.length ? 'Finish' : 'Sign Up'}
						</Button>
					) : (
						<Button
							variant='outlined'
							className={classes.btn}
							onClick={handleNext}
							color='secondary'
							endIcon={<SendIcon />}
						>
							{activeStep === steps.length ? 'Finish' : 'Sign Up'}
						</Button>
					)}
				</form>
			</div>
		</div>
	);
};

export default StepOne;
