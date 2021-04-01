import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StepOne from './stepOne';

const useStyles = makeStyles({
	root: {
		width: '50%',
		margin: '6rem auto',
		border: '1px solid',

		' & .MuiStepIcon-root.MuiStepIcon-active': {
			color: 'purple',
		},
		' & .MuiStepIcon-root.MuiStepIcon-completed': {
			color: 'crimson',
		},
	},
});

const Main = () => {
	//Hooks
	const [activeStep, SetactiveStep] = useState(0);
	const handleNext = () => {
		SetactiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	function getSteps() {
		return ['SIGN UP', 'CHOOSE PLAN', 'CHECKOUT'];
	}
	const steps = getSteps();
	function getStepsContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <StepOne />;
			case 1:
				return 'Step Two';
			case 2:
				return 'Step Three';
			default:
				return 'Unknown step';
		}
	}
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Stepper alternativeLabel activeStep={activeStep}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
				<br />
			</Stepper>{' '}
			{activeStep === steps.length ? (
				'Finish'
			) : (
				<>
					{getStepsContent(activeStep)}{' '}
					<Button onClick={handleNext}>
						{activeStep === steps.length ? 'Finish' : 'Next'}
					</Button>
				</>
			)}
		</div>
	);
};

export default Main;
