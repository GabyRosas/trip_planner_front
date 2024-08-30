import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledInput, StyledButton, Label } from './formStyled';

const ItineraryForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((values) => {
        alert('Form submit: ' + JSON.stringify(values));
    });

    return (
        <StyledForm onSubmit={onSubmit}>
            <Label htmlFor="city">City</Label>
            <StyledInput {...register('City', { required: true })} placeholder='Barcelona' />

            <Label htmlFor="accommodation">Accommodation</Label>
            <StyledInput {...register('Accommodation', { required: true })} placeholder='Hotel/Hostel/Apartment/B&B/Camping' />

            <Label htmlFor="activities">Favourite activities</Label>
            <StyledInput {...register('Favourite activities', { required: true })} placeholder='Adventure/Cultural/Nature/Gastronomic/Relax' />

            <Label htmlFor="duration">Duration</Label>
            <StyledInput {...register('Duration', { required: true })} placeholder='1 day/2 days/3 days' />

            <StyledButton type='submit'>Generate itinerary</StyledButton>
        </StyledForm>
    );
};

export default ItineraryForm;